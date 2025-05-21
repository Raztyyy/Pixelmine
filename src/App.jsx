import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Concept from "./pages/Concept";
import Overview from "./pages/Overview";
import DesignImplementation from "./pages/DesignImplementation";
import NetworkIncentives from "./pages/NetworkIncentives";
import DemocraticSystem from "./pages/DemocraticSystem";
import Roadmap from "./pages/Roadmap";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="overview" />}></Route>
            <Route path="overview" element={<Overview />}></Route>
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
          </Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
