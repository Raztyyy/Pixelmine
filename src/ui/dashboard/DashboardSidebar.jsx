import {
  faTableColumns,
  faGear,
  faAnalytics,
  faX,
  faArrowRightFromBracket,
  faChevronDown,
  faChevronUp,
  faHundredPoints,
  faCartShopping,
  faClockRotateLeft,
  faCreditCard,
  faFolder,
} from "@fortawesome/pro-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../header/Logo";
import { Collapse } from "../../animations/AnimatedWrappers";
import { AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: faTableColumns },
  { name: "Analytics", path: "/dashboard/analytics", icon: faAnalytics },
  { name: "Settings", path: "/dashboard/settings", icon: faGear },
];

// 👇 Documentation collapsible section
const DocumentationMenu = [
  { name: "Overview", path: "/dashboard/documentation" },
  { name: "Getting Started", path: "/dashboard/documentation/getting-started" },
  { name: "Core Concepts", path: "/dashboard/documentation/concepts" },
  { name: "API Reference", path: "/dashboard/documentation/api-reference" },
  { name: "Storer Download", path: "/dashboard/documentation/storer-download" },
  { name: "Guides", path: "/dashboard/documentation/guides" },
  { name: "FAQ", path: "/dashboard/documentation/faq" },
  { name: "Support", path: "/dashboard/documentation/support" },
];

// 👇 Ad Points collapsible section
const AdPointsMenu = [
  { name: "Buy", path: "/dashboard/buy", icon: faCartShopping },
  {
    name: "History",
    path: "/dashboard/history",
    icon: faClockRotateLeft,
  },
  {
    name: "Payment Method",
    path: "/dashboard/payment-method",
    icon: faCreditCard,
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-stone-900 border-r border-gray-200 dark:border-gray-700 shadow-xl backdrop-blur-md transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-lg`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-8 ">
          {/* Logo */}
          <Logo paddingX={"3rem"} mode="dark" />
          <button
            className="text-gray-600 transition-colors lg:hidden dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faX} className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col justify-between overflow-y-auto">
          {/* Menu Items 1 Section */}

          <nav className="flex flex-col p-4 gap-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"} // exact match for dashboard
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Separator */}
            <hr className="my-4 border-0 border-t border-gray-200 dark:border-gray-700" />

            {/* Menu Items 2 Section */}
            {/* Documentation Collapsible Section */}
            <div>
              <button
                onClick={() => setIsDocsOpen(!isDocsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-800"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faFolder}
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  <span>Documentation</span>
                </div>
                <FontAwesomeIcon
                  icon={isDocsOpen ? faChevronUp : faChevronDown}
                  className="w-4 h-4 text-gray-400"
                />
              </button>

              <AnimatePresence>
                {isDocsOpen && (
                  <Collapse
                    element="ul"
                    className="mt-2 space-y-1 pl-9"
                    id="docs-menu"
                  >
                    {DocumentationMenu.map((sub) => (
                      <li key={sub.name}>
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          end={sub.path === "/dashboard/documentation"} // exact for Overview
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? "bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-900/20 dark:text-emerald-400"
                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-stone-800/50"
                            }`
                          }
                        >
                          <span>{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </Collapse>
                )}
              </AnimatePresence>
            </div>

            {/* Collapsible Section */}
            <div className="mt-1">
              <button
                onClick={() => setIsReportsOpen(!isReportsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-800"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faHundredPoints}
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  <span>Ad Points</span>
                </div>
                <FontAwesomeIcon
                  icon={isReportsOpen ? faChevronUp : faChevronDown}
                  className="w-4 h-4 text-gray-400"
                />
              </button>
              <AnimatePresence>
                {isReportsOpen && (
                  <Collapse className="mt-2 space-y-1 pl-9">
                    {AdPointsMenu.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                            isActive
                              ? "bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-900/20 dark:text-emerald-400"
                              : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-stone-800/50"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <FontAwesomeIcon
                              icon={sub.icon}
                              className="w-4 h-4"
                            />
                            <span>{sub.name}</span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </Collapse>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Logout Button */}
          <div className="w-full p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="flex items-center w-full gap-3 px-4 py-3 font-medium text-red-600 transition-all duration-200 rounded-xl dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="w-5 h-5"
              />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
