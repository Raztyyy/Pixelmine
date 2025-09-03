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

// 👇 Example collapsible section
const documentationAdPointsMenu = [
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

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-zinc-950/95 border-r dark:border-r-stone-400/50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transform backdrop-blur-md ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none`}
    >
      <div className="flex items-center justify-between px-4 py-[30px]">
        {/* Logo */}
        <Logo paddingX={"3rem"} mode="dark" />
        <button
          className="lg:hidden dark:text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <FontAwesomeIcon icon={faX} className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/dashboard"} // exact match for dashboard
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-primary/10 dark:bg-zinc-500/30 dark:text-white text-stone-900"
                  : "text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-500/30"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-5 h-5 ${
                    isActive
                      ? "dark:text-green-500 text-primary"
                      : "dark:text-zinc-500"
                  }`}
                />
                <span>{item.name}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* Collapsible Section */}
        <div>
          <button
            onClick={() => setIsReportsOpen(!isReportsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-500/30"
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faHundredPoints}
                className="w-5 h-5 dark:text-zinc-500"
              />
              <span>Documentation Ad Points</span>
            </div>
            <FontAwesomeIcon
              icon={isReportsOpen ? faChevronUp : faChevronDown}
            />
          </button>
          <AnimatePresence>
            {isReportsOpen && (
              <Collapse className="mt-1 space-y-1 pl-9">
                {documentationAdPointsMenu.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 dark:bg-zinc-500/30 text-primary dark:text-green-500"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-500/30"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <FontAwesomeIcon
                          icon={sub.icon}
                          className={`w-4 h-4 ${
                            isActive
                              ? "text-primary dark:text-green-500"
                              : "dark:text-zinc-500"
                          }`}
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
      <div className="absolute bottom-0 w-full p-4 ">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="flex items-center w-full gap-3 px-3 py-2 text-red-600 transition-colors rounded-md dark:text-red-400 hover:bg-red-50 dark:hover:bg-zinc-500/30"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
