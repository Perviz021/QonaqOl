import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom"; // Import useNavigate hook
import HomePage from "./pages/home/HomePage.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import GiftCardsPage from "./pages/giftcard/GiftCardsPage.jsx";
import CreateEvent from "./pages/event/CreateEvent.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import Event from "./pages/reservation/Event.jsx";
import Events from "./pages/Events/Events.jsx";
import About from "./pages/about/About.jsx";
import LoginForm from "./pages/login/LoginForm.jsx";

// const PrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//       navigate("/");
//     }
//   }, [navigate]);

//   return isAuthenticated ? children : null;
// };
// export default PrivateRoute;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gift-cards",
    element: (
      <AppLayout>
        <GiftCardsPage />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-event",
    element: (
      <AppLayout>
        {/* <PrivateRoute> */}
        <CreateEvent />
        {/* </PrivateRoute> */}
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: (
      <AppLayout>
        <Events />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:id",
    element: (
      <AppLayout>
        <Event />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <AppLayout>
        <About />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
