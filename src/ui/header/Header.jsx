"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";

import Logo from "./Logo";
import DesktopLink from "./DesktopLink";
import MobileLink from "./MobileLink";

const links = [
  {
    name: "Overview",
    path: "/",
  },
  {
    name: "Concept",
    path: "concept",
  },
  {
    name: "Design & Implementation",
    path: "design-implementation",
  },
  {
    name: "Network Incentives",
    path: "network-incentives",
  },
  {
    name: "Democratic System",
    path: "democratic-system",
  },
  {
    name: "Roadmap",
    path: "roadmap",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY !== 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="sticky top-0 z-50 py-6 transition-all duration-300 bg-white shadow ">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 mx-auto max-w-7xl"
      >
        <Logo />

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-600 size-6 group-hover:text-indigo-600"
            />
          </button>
        </div>

        <DesktopLink links={links} />

        <MobileLink
          links={links}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
