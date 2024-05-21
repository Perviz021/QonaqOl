import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();

export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPasswordValid = (value) => {
  const newValue = value.trim();
  return newValue.length >= 8 && newValue.length < 20;
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

export const handleInputChange = (e, formState, setFormState, type) => {
  // Login
  if (type === "login") {
    const { name, value } = e.target;
    if (name === "email") {
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        touchedEmail: false,
        fieldsFilled: !!value && !!prevData.password,
      }));
    } else {
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        touchedPassword: false,
        fieldsFilled: !!prevData.email && !!value,
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
      touchedEmail: id === "email" ? false : prevState.touchedEmail,
      touchedPassword: id === "password" ? false : prevState.touchedPassword,
      touchedConfirmPassword:
        id === "confirmPassword" ? false : prevState.touchedConfirmPassword,
    }));
  }
};

export const useRefreshToken = async (
  navigate,
  navigateToCreateEvent = false
) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await fetch(
      "http://89.116.25.33:8081/qonaqol/api/v1/auth/refresh",
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
      if (!navigateToCreateEvent) navigate("/login");
      else navigate("/login?data=event");
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
  navigate,
  navigateToCreateEvent = null
) => {
  try {
    const data = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(data);
    const token = credential.accessToken;
    const user = data.user;

    if (type === "signup")
      handleSignup(
        e,
        user,
        formState,
        setFormState,
        navigate,
        navigateToCreateEvent
      );
    else if (type === "login")
      handleSignIn(
        e,
        user,
        formState,
        setFormState,
        navigate,
        navigateToCreateEvent
      );
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(credential);
  }
};

// SignUp
export const handleSignup = async (
  e,
  user = null,
  formState,
  setFormState,
  navigate,
  navigateToCreateEvent = null
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
      "http://89.116.25.33:8081/qonaqol/api/v1/auth/signup",
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

      if (!navigateToCreateEvent)
        navigate("/"); // Navigate to login page using useNavigate
      else navigate("/create-event");
    } else {
      if (response.status === 401) {
        // If token is expired or invalid, try refreshing the token
        const newAccessToken = await useRefreshToken(
          navigate,
          navigateToCreateEvent
        );
        if (newAccessToken) {
          // If a new access token is obtained, retry the signup
          return handleSignup(e);
        } else {
          // If unable to refresh token, handle error appropriately
          console.error("Unable to refresh token. Please try again later.");
        }
      } else if (response.status === 405) {
        handleSignIn(
          e,
          user,
          formState,
          setFormState,
          navigate,
          navigateToCreateEvent
        );
      } else {
        // console.error("Error signing up:", response.statusText);
        toast.error(`Qeydiyyatdan keçmək mümkün olmadı. Yenidən cəhd edin.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  } catch (error) {
    // console.error("Error signing up:", error.message);
    toast.error(`Qeydiyyatdan keçmək mümkün olmadı. Yenidən cəhd edin.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
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
  navigate,
  navigateToCreateEvent = null
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
      "http://89.116.25.33:8081/qonaqol/api/v1/auth/signin",
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

      if (!navigateToCreateEvent) navigate("/"); // Navigate to home page
      else navigate("/create-event");
    } else if (response.status === 403) {
      const newAccessToken = await useRefreshToken(
        navigate,
        navigateToCreateEvent
      );
      if (newAccessToken) {
        return handleSignIn(); // Retry sign-in with new access token
      } else {
        // console.error("Unable to refresh token. Please try again later.");
        toast.error(`Daxil edilən məlumatlar yanlışdır!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else if (response.status === 404) {
      handleSignup(
        e,
        user,
        formState,
        setFormState,
        navigate,
        navigateToCreateEvent
      );
    } else {
      toast.error(`Qeydiyyat mümkün olmadı. Yenidən cəhd edin.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  } catch (error) {
    // console.error("Error signing in:", error);
    toast.error(`Daxil edilən məlumatlar yanlışdır!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } finally {
    setFormState((prevData) => ({
      ...prevData,
      loading: false,
    }));
  }
};
