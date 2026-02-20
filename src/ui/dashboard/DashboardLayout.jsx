// DashboardLayout.jsx - Ad Points Dropdown Fixed with Portal
import { useState, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
  faUser,
  faGear,
  faChevronDown,
} from "@fortawesome/pro-solid-svg-icons";
import Logo from "../header/Logo";
import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

// Menu items
const mainNavItems = [
  { name: "Overview", path: "/dashboard" },
  { name: "Analytics", path: "/dashboard/analytics" },
  { name: "Documentation", path: "/dashboard/documentation" },
  {
    name: "Ad Points",
    hasSubmenu: true,
    submenu: [
      { name: "Buy", path: "/dashboard/buy" },
      { name: "History", path: "/dashboard/history" },
      { name: "Payment Method", path: "/dashboard/payment-method" },
    ],
  },
  { name: "Settings", path: "/dashboard/settings" },
];

// Dropdown portal component
function DropdownPortal({ children, parentRef }) {
  if (!parentRef?.current) return null;

  const rect = parentRef.current.getBoundingClientRect();
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
}

function DashboardLayout() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAdPointsMenu, setShowAdPointsMenu] = useState(false);
  const adPointsButtonRef = useRef(null);
  const { user } = useAuth();
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Overview";
    if (path === "/dashboard/analytics") return "Analytics";
    if (path === "/dashboard/settings") return "Settings";
    if (path === "/dashboard/profile") return "Profile";
    if (path === "/dashboard/buy") return "Buy Ad Points";
    if (path === "/dashboard/history") return "History";
    if (path === "/dashboard/payment-method") return "Payment Method";
    if (path === "/dashboard/documentation") return "Documentation";
    if (path === "/dashboard/documentation/getting-started")
      return "Getting Started";
    if (path === "/dashboard/documentation/concepts") return "Core Concepts";
    if (path === "/dashboard/documentation/api-reference")
      return "API Reference";
    if (path === "/dashboard/documentation/storer-download")
      return "Storer Download Guide";
    if (path === "/dashboard/documentation/storer-ad-setup")
      return "Storer Ad Setup Guide";
    if (path === "/dashboard/documentation/storer-installation")
      return "Storer Installation Guide";
    if (path === "/dashboard/documentation/guides") return "Guides";
    if (path === "/dashboard/documentation/faq") return "FAQ";
    if (path === "/dashboard/documentation/support") return "Support";
    return "Page";
  };

  const getPageCaption = () => {
    const path = location.pathname;

    if (path === "/dashboard")
      return "View your overall performance, activity, and key metrics at a glance.";

    if (path === "/dashboard/analytics")
      return "Analyze engagement, trends, and performance insights in detail.";

    if (path === "/dashboard/settings")
      return "Manage your account preferences and system configurations.";

    if (path === "/dashboard/profile")
      return "Update your personal information and account details.";

    if (path === "/dashboard/buy")
      return "Purchase ad points to boost visibility and reach more users.";

    if (path === "/dashboard/history")
      return "Review your past transactions and activity records.";

    if (path === "/dashboard/payment-method")
      return "Add or manage your saved payment options securely.";

    if (path === "/dashboard/documentation")
      return "Explore detailed guides and resources to help you get started.";

    if (path === "/dashboard/documentation/getting-started")
      return "Learn the basics and set up your account step by step.";

    if (path === "/dashboard/documentation/concepts")
      return "Understand the core ideas and how the platform works.";

    if (path === "/dashboard/documentation/api-reference")
      return "Browse available endpoints and technical integration details.";

    if (path === "/dashboard/documentation/storer-download")
      return "Follow instructions to download and access the Storer app.";

    if (path === "/dashboard/documentation/storer-ad-setup")
      return "Step-by-step guide to setting up and launching your ads.";

    if (path === "/dashboard/documentation/storer-installation")
      return "Instructions for properly installing and configuring Storer.";

    if (path === "/dashboard/documentation/guides")
      return "Detailed walkthroughs for specific features and workflows.";

    if (path === "/dashboard/documentation/faq")
      return "Find answers to commonly asked questions.";

    if (path === "/dashboard/documentation/support")
      return "Get help and contact support for further assistance.";

    return "Manage and navigate your dashboard features here.";
  };

  const isAdPointsActive = () => {
    return (
      location.pathname === "/dashboard/buy" ||
      location.pathname === "/dashboard/history" ||
      location.pathname === "/dashboard/payment-method"
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Header */}
      <header className="px-4 bg-white border-b border-gray-200 dark:bg-stone-900 dark:border-gray-700 sm:px-6 md:px-16 lg:px-12 xl:px-24 2xl:px-60 ">
        <div className="py-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                className="py-2 transition-colors rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-stone-800"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                />
              </button>
              <Logo paddingX="0" mode="dark" />
            </div>

            {/* Right side - Profile */}
            <div className="flex items-center gap-3">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 mx-auto sm:px-6 md:px-16 lg:px-12 xl:px-24 2xl:px-60">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {getPageTitle()}
          </h1>

          <p className="text-gray-600 dark:text-gray-400">{getPageCaption()}</p>
        </div>

        {/* Horizontal Nav */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-700 ">
          <nav className="flex gap-8 -mb-px overflow-x-auto">
            {mainNavItems.map((item) => {
              if (item.hasSubmenu) {
                const active = isAdPointsActive();

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowAdPointsMenu(true)}
                    onMouseLeave={() => setShowAdPointsMenu(false)}
                  >
                    <button
                      ref={adPointsButtonRef}
                      className={`pb-3 px-1 font-medium text-sm flex items-center gap-1 border-b-2 transition-colors border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 whitespace-nowrap flex-shrink-0`}
                    >
                      Ad Points
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-3 h-3"
                      />
                    </button>

                    {showAdPointsMenu && (
                      <DropdownPortal parentRef={adPointsButtonRef}>
                        <div className="w-48 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-stone-800 dark:border-gray-700">
                          {item.submenu.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setShowAdPointsMenu(false)}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm ${
                                  isActive
                                    ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-stone-700"
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      </DropdownPortal>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `pb-3 px-1 font-medium text-sm border-b-2 ${
                      isActive
                        ? "border-emerald-500 text-emerald-500"
                        : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <Outlet />
      </main>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 z-40 px-4 bg-black/50 lg:hidden sm:px-6 md:px-16 lg:px-12 xl:px-24 2xl:px-60"
            onClick={() => setShowMobileMenu(false)}
          ></div>

          <div
            className="fixed top-0 bottom-0 left-0 z-50 w-64 p-6 bg-white dark:bg-stone-900 lg:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8">
              <Logo paddingX="0" mode="dark" />
            </div>

            <nav className="space-y-2">
              {mainNavItems.map((item) => {
                if (item.hasSubmenu) {
                  return (
                    <div key={item.name}>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                        {item.name}
                      </div>

                      {item.submenu.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setShowMobileMenu(false)}
                          className={({ isActive }) =>
                            `block px-4 py-3 pl-8 rounded-lg font-medium ${
                              isActive
                                ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-800"
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setShowMobileMenu(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium ${
                        isActive
                          ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-800"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardLayout;
