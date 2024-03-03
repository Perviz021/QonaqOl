export const refreshToken = async () => {
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
