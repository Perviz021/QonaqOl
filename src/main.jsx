import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import useNavigate hook
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
import PrivateRouteCreateEvent from "./routers/PrivateRouteCreateEvent.jsx";
import PrivateRouteAuth from "./routers/PrivateRouteAuth.jsx";
import Account from "./pages/account/Account.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reservation from "./pages/reservation/Reservations.jsx";
import HomePageLayout from "./layouts/HomePageLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <PrivateRouteAuth>
        <LoginPage />
      </PrivateRouteAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <PrivateRouteAuth>
        <SignUpPage />
      </PrivateRouteAuth>
    ),
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
        <PrivateRouteCreateEvent>
          <CreateEvent />
        </PrivateRouteCreateEvent>
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
    path: "/events/reservation",
    element: (
      <AppLayout>
        <Reservation />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:name",
    element: (
      <AppLayout>
        <Event />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/category/:category",
    element: (
      <AppLayout>
        <Events />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/update/:id",
    element: (
      <AppLayout>
        <CreateEvent />
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
  {
    path: "/account",
    element: (
      <AppLayout>
        <Account />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
