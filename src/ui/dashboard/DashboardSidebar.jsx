import {
  faTableColumns,
  faGear,
  faAnalytics,
  faX,
  faArrowRightFromBracket,
} from "@fortawesome/pro-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Logo from "../header/Logo";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: faTableColumns },
  { name: "Analytics", path: "/dashboard/analytics", icon: faAnalytics },
  { name: "Settings", path: "/dashboard/settings", icon: faGear },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-zinc-950/95 border-r dark:border-r-stone-400/50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transform backdrop-blur-md ${
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
            end={item.path === "/dashboard"} // 👈 Only use `end` for exact matches
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-primary/10 dark:bg-zinc-500/30 dark:text-white  text-stone-900"
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
      </nav>
      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4 ">
        <button
          onClick={() => {
            // 🧠 Clear token or auth state here
            localStorage.removeItem("token");
            window.location.href = "/login"; // or use navigate("/login")
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
