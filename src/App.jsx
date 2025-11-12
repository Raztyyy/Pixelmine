import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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

import CareerRole from "./pages/CareerRole";
import NewsDetails from "./pages/NewsDetails";

import { action as newsletterAction } from "./features/newsletter/newsletterAction";
import { action as contactAction } from "./features/contact/contactAction";
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
import ForgotPassword from "./ui/login/ForgotPassword";
import ResetPassword from "./ui/login/ResetPassword";
import DocumentationOverview from "./ui/dashboard/documentation/DocumentationOverview";
import DocumentationGettingStarted from "./ui/dashboard/documentation/DocumentationGettingStarted";
import DocumentationApiReference from "./ui/dashboard/documentation/DocumentationApiReference";
import DashboardDocumentationLayout from "./ui/dashboard/DashboardDocumentationLayout";
import DocumentationConcept from "./ui/dashboard/documentation/DocumentationConcept";
import DocumentationGuides from "./ui/dashboard/documentation/DocumentationGuides";
import DocumentationFAQ from "./ui/dashboard/documentation/DocumentationFAQ";
import DocumentationSupport from "./ui/dashboard/documentation/DocumentationSupport";
import AdPointsBuy from "./ui/dashboard/adpoints/AdPointsBuy";
import AdPointsHistory from "./ui/dashboard/adpoints/AdPointsHistory";
import AdPaymentMethod from "./ui/dashboard/adpoints/AdPaymentMethod";

const API_URL = import.meta.env.VITE_API_URL;

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
      },
      { path: "democratic-system", element: <DemocraticSystem /> },
      // { path: "roadmap", element: <Roadmap /> },

      { path: "about-us", element: <About /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "news-events/:news_slug", element: <NewsDetails /> },
      { path: "careers", element: <Careers /> },
      { path: "careers/:role_slug", element: <CareerRole /> },
      { path: "contact-us", element: <Contact />, action: contactAction },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      {
        path: "child-sexual-abuse-policy",
        element: <ChildSexualAbusePolicy />,
      },
      { path: "commercial-law", element: <CommercialLaw /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },

      // Authentication for Dashboard
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },

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
      { path: "analytics", element: <DashboardAnalytics /> },
      { path: "settings", element: <DashboardSettings /> },
      { path: "profile", element: <DashboardProfile /> },
      {
        path: "documentation",
        element: <DashboardDocumentationLayout />,
        children: [
          { index: true, element: <DocumentationOverview /> }, // /dashboard/documentation
          { path: "getting-started", element: <DocumentationGettingStarted /> },
          { path: "concepts", element: <DocumentationConcept /> },
          { path: "api-reference", element: <DocumentationApiReference /> },
          { path: "guides", element: <DocumentationGuides /> },
          { path: "faq", element: <DocumentationFAQ /> },
          { path: "support", element: <DocumentationSupport /> },
        ],
      },
      { path: "buy", element: <AdPointsBuy /> },
      { path: "history", element: <AdPointsHistory /> },
      { path: "payment-method", element: <AdPaymentMethod /> },
    ],
  },

  // Fallback
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

// ✅ Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
  useEffect(() => {
    // ✅ log visitor IP on first mount
    fetch(`${API_URL}/api/log-visit`).catch(console.error);
  }, []); // empty dependency → fires once

  return (
    <>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} fallbackElement={<Spinner></Spinner>} />
      </Elements>

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
