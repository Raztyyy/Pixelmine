"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulbOn,
  faPuzzlePiece,
  faBars,
  faHandHoldingCircleDollar,
} from "@fortawesome/pro-solid-svg-icons"; // Importing from pro-solid-svg-icons

import { faHandshakeSimple, faMap } from "@fortawesome/pro-solid-svg-icons";
import Logo from "./Logo";
import DesktopLink from "./DesktopLink";
import { Link } from "react-router-dom";
import MobileLink from "./MobileLink";

const products = [
  {
    name: "Concept",
    description: "Get a better understanding of your traffic",
    path: "concept",
    icon: faLightbulbOn,
  },
  {
    name: "Design & Implementation",
    description: "Speak directly to your customers",
    path: "design-implementation",
    icon: faPuzzlePiece,
  },
  {
    name: "Network Incentives",
    description: "Your customers’ data will be safe and secure",
    path: "network-incentives",
    icon: faHandHoldingCircleDollar,
  },
  {
    name: "Democratic System",
    description: "Connect with third-party tools",
    path: "democratic-system",
    icon: faHandshakeSimple,
  },
  {
    name: "Roadmap",
    description: "Build strategic funnels that will convert",
    path: "roadmap",
    icon: faMap,
  },
];

const links = [
  {
    name: "About Us",
    path: "about-us",
  },
  {
    name: "News & Events",
    path: "news-events",
  },
  {
    name: "Careers",
    path: "careers",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
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
              className="size-6 text-gray-600 group-hover:text-indigo-600"
            />
          </button>
        </div>

        <DesktopLink products={products} links={links} />

        <MobileLink
          products={products}
          links={links}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="contact-us"
            className="rounded-md bg-primary hover:border-solid hover:border-2 hover:border-primary hover:bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-50 hover:text-slate-900 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-2 border-transparent transition-all duration-300 ease-in-out"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
