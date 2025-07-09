import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Overview from "./pages/Overview";
import Concept from "./pages/Concept";
import DesignImplementation from "./pages/DesignImplementation";
import NetworkIncentives from "./pages/NetworkIncentives";
import DemocraticSystem from "./pages/DemocraticSystem";
import Roadmap from "./pages/Roadmap";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import NewsEvents from "./pages/NewsEvents";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChildSexualAbusePolicy from "./pages/ChildSexualAbusePolicy";
import CommercialLaw from "./pages/CommercialLaw";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/ErrorPage";

import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/spinner/Spinner";

import { networkIncentivesLoader } from "./loaders/networkIncentives";
import CareerRole from "./pages/CareerRole";
import NewsDetails from "./pages/NewsDetails";

import { action as newsletterAction } from "./features/newsletter/newsletterAction";
import { signupAction } from "./features/authentication/signupAction";

import { Toaster } from "react-hot-toast";
import Login from "./ui/login/Login";
import Signup from "./ui/signup/Signup";
import DashboardLayout from "./ui/dashboard/DashboardLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import DashboardOverview from "./ui/dashboard/DashboardOverview";
import DashboardAnalytics from "./ui/dashboard/DashboardAnalytics";
import DashboardSettings from "./ui/dashboard/DashboardSettings";
import DashboardProfile from "./ui/dashboard/DashboardProfile";

import VerifyEmail from "./ui/signup/VerifyEmail";
import VerifyEmailConfirm from "./ui/signup/VerifyEmailConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Overview /> },

      // Action-only form handlers (no UI rendered for these routes)
      { path: "newsletter", action: newsletterAction },

      { path: "concept", element: <Concept /> },
      { path: "design-implementation", element: <DesignImplementation /> },
      {
        path: "network-incentives",
        element: <NetworkIncentives />,
        loader: networkIncentivesLoader,
      },
      { path: "democratic-system", element: <DemocraticSystem /> },
      { path: "roadmap", element: <Roadmap /> },

      { path: "about-us", element: <About /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "news-events/:news_slug", element: <NewsDetails /> },
      { path: "careers", element: <Careers /> },
      { path: "careers/:role_slug", element: <CareerRole /> },
      { path: "contact-us", element: <Contact /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      {
        path: "child-sexual-abuse-policy",
        element: <ChildSexualAbusePolicy />,
      },
      { path: "commercial-law", element: <CommercialLaw /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },

      // Authentication for Dashboard
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup />, action: signupAction },

      {
        path: "verify-email",
        element: <VerifyEmail />,
      },

      {
        path: "verify-email/confirm",
        element: <VerifyEmailConfirm />,
      },
    ],
  },
  // 🚧 Dashboard: outside of AppLayout
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: "/dashboard/analytics", element: <DashboardAnalytics /> },
      { path: "/dashboard/settings", element: <DashboardSettings /> },
      { path: "/dashboard/profile", element: <DashboardProfile /> },
    ],
  },

  // Fallback
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<Spinner></Spinner>} // optional, for loading fallback
      />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "#22222",
          },
        }}
      />
    </>
  );
}

export default App;
