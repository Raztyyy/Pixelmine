import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollToTop from "../utils/scrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";

function AppLayout() {
  return (
    <>
      {/* scrolls to top when route changes */}
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* button that scrolls to top when clicked */}
      <ScrollToTopButton />
    </>
  );
}

export default AppLayout;
