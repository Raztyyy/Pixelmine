import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Concept from "./pages/Concept";
import Overview from "./pages/Overview";
import DesignImplementation from "./pages/DesignImplementation";
import NetworkIncentives from "./pages/NetworkIncentives";
import DemocraticSystem from "./pages/DemocraticSystem";
import Roadmap from "./pages/Roadmap";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import NewsEvents from "./pages/NewsEvents";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import SignUp from "./ui/storer/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChildSexualAbusePolicy from "./pages/ChildSexualAbusePolicy";
import CommercialLaw from "./pages/CommercialLaw";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="overview" />}></Route>
            <Route path="overview" element={<Overview />}></Route> */}

            <Route index element={<Overview />}></Route>
            <Route path="concept" element={<Concept />}></Route>
            <Route
              path="design-implementation"
              element={<DesignImplementation />}
            ></Route>
            <Route
              path="network-incentives"
              element={<NetworkIncentives />}
            ></Route>
            <Route
              path="democratic-system"
              element={<DemocraticSystem />}
            ></Route>
            <Route path="roadmap" element={<Roadmap />}></Route>

            <Route path="about-us" element={<About />}></Route>
            <Route path="news-events" element={<NewsEvents />}></Route>
            <Route path="careers" element={<Careers />}></Route>
            <Route path="contact-us" element={<Contact />}></Route>
            <Route path="sign-up" element={<SignUp />}></Route>

            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            ></Route>
            <Route
              path="child-sexual-abuse-policy"
              element={<ChildSexualAbusePolicy />}
            ></Route>
            <Route path="commercial-law" element={<CommercialLaw />}></Route>
            <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
          </Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
