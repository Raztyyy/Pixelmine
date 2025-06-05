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
import SignUp from "./pages/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChildSexualAbusePolicy from "./pages/ChildSexualAbusePolicy";
import CommercialLaw from "./pages/CommercialLaw";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/spinner/Spinner";

import { networkIncentivesLoader } from "./loaders/networkIncentives";
import CareerRole from "./pages/CareerRole";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Overview /> },
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
      { path: "careers", element: <Careers /> },
      { path: "careers/:role_slug", element: <CareerRole /> },
      { path: "contact-us", element: <Contact /> },
      { path: "sign-up", element: <SignUp /> },

      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      {
        path: "child-sexual-abuse-policy",
        element: <ChildSexualAbusePolicy />,
      },
      { path: "commercial-law", element: <CommercialLaw /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner></Spinner>} // optional, for loading fallback
    />
  );
}

export default App;
