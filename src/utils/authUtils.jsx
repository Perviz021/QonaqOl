import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();

export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPasswordValid = (value) => {
  return value.length <= 10;
};

export const handleImageLoad = (setFormState) => {
  setFormState((prevState) => ({ ...prevState, imageLoaded: true }));
};

export const togglePasswordVisibility = (field, setFormState) => {
  setFormState((prevData) => ({
    ...prevData,
    [field]: !prevData[field],
  }));
};

export const useRefreshToken = async (navigate) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await fetch(
      "https://qonaqol.onrender.com/qonaqol/api/v1/auth/refresh",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const newAccessToken = data.accessToken;
      const newRefreshToken = data.refreshToken;
      // Update tokens in local storage
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      return newAccessToken;
    } else {
      console.error("Error refreshing token:", response.statusText);
      // Optionally, handle invalid or expired refresh token
      // For example, clear tokens from local storage and redirect to login page
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    // Handle network errors or other exceptions
    // Optionally, clear tokens from local storage and redirect to login page
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }
};

export const googleSignup = async (
  e,
  type,
  formState,
  setFormState,
  navigate
) => {
  try {
    const data = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(data);
    const token = credential.accessToken;
    const user = data.user;

    if (type === "signup")
      handleSubmit(e, user, formState, setFormState, navigate);
    else if (type === "login")
      handleSignIn(e, user, formState, setFormState, navigate);
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(credential);
  }
};

// SignUp
export const handleSubmit = async (
  e,
  user = null,
  formState,
  setFormState,
  navigate
) => {
  e.preventDefault();

  setFormState((prevData) => ({
    ...prevData,
    loading: true,
  }));
  try {
    let payload = {};
    if (!user) {
      // If user is not provided (normal sign up)
      payload = {
        fullName: formState.fullName,
        email: formState.email,
        password: formState.password,
        confirmPassword: formState.confirmPassword,
      };
    } else {
      // If user is provided (sign up with Google)
      payload = {
        fullName: user?.displayName,
        email: user?.email,
        password: user?.uid.slice(0, 10), // Using user UID as password
        confirmPassword: user?.uid.slice(0, 10), // Using user UID as confirmation password
      };
    }

    const response = await fetch(
      "https://qonaqol.onrender.com/qonaqol/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      // Handle success
      console.log("User signed up successfully!");
      const data = await response.json();
      const { userId, tokenPair } = data;
      const { accessToken, refreshToken } = tokenPair;

      // Store userId, accessToken, and refreshToken in local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/"); // Navigate to login page using useNavigate
    } else {
      if (response.status === 401) {
        // If token is expired or invalid, try refreshing the token
        const newAccessToken = await useRefreshToken(navigate);
        if (newAccessToken) {
          // If a new access token is obtained, retry the signup
          return handleSubmit(e);
        } else {
          // If unable to refresh token, handle error appropriately
          console.error("Unable to refresh token. Please try again later.");
        }
      } else if (response.status === 404) {
        handleSignIn(e, user, formState, setFormState, navigate);
      } else {
        // Handle other errors
        console.error("Error signing up:", response.statusText);
      }
    }
  } catch (error) {
    // console.error("Error signing up:", error.message);
    toast.error(`Error signing up: ${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } finally {
    setFormState((prevData) => ({
      ...prevData,
      loading: false,
    }));
  }
};

// Login
export const handleSignIn = async (
  e,
  user = null,
  formState,
  setFormState,
  navigate
) => {
  e.preventDefault();

  setFormState((prevData) => ({
    ...prevData,
    loading: true,
  }));

  try {
    let payload = {};
    if (!user) {
      // If user is not provided (normal sign up)
      payload = {
        email: formState.email,
        password: formState.password,
      };
    } else {
      // If user is provided (sign up with Google)
      payload = {
        email: user?.email,
        password: user?.uid.slice(0, 10), // Using user UID as password
      };
    }

    const response = await fetch(
      "https://qonaqol.onrender.com/qonaqol/api/v1/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const { userId, tokenPair } = data;
      const { accessToken, refreshToken } = tokenPair;

      // Store userId, accessToken, and refreshToken in local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/"); // Navigate to home page
    } else if (response.status === 403) {
      const newAccessToken = await useRefreshToken(navigate);
      if (newAccessToken) {
        return handleSignIn(); // Retry sign-in with new access token
      } else {
        console.error("Unable to refresh token. Please try again later.");
      }
    } else if (response.status === 404) {
      handleSubmit(e, user, formState, setFormState, navigate);
    } else {
      console.error("Sign-in failed");
    }
  } catch (error) {
    // console.error("Error signing in:", error);
    toast.error(`Error signing up: ${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } finally {
    setFormState((prevData) => ({
      ...prevData,
      loading: false,
    }));
  }
};

export const handleInputChange = (e, formState, setFormState, type) => {
  // Login
  if (type === "login") {
    const { name, value } = e.target;
    if (name === "email") {
      const isValid = value.trim() === "" || isEmailValid(value);
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        fieldsFilled: !!value && !!prevData.password,
        emailValid: isValid,
      }));
    } else {
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        fieldsFilled: !!prevData.email && !!value,
        passwordValid: isPasswordValid(value),
      }));
    }
  } //Sign Up
  else if (type === "signup") {
    const { id, value } = e.target;
    const trimmedValue = value.trim();

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
      fieldsFilled:
        !!prevState.fullName &&
        !!prevState.email &&
        !!prevState.password &&
        !!prevState.confirmPassword &&
        trimmedValue !== "",
      emailValid:
        id === "email"
          ? trimmedValue === "" || isEmailValid(trimmedValue)
          : prevState.emailValid,
      passwordMatch:
        id === "confirmPassword"
          ? trimmedValue === prevState.password
          : id === "password"
          ? trimmedValue === prevState.confirmPassword
          : prevState.passwordMatch,
    }));
  }
};
