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
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-md transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none`}
    >
      <div className="flex items-center justify-between px-4 py-[30px]">
        {/* Logo */}
        <Logo paddingX={"3rem"} />
        <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
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
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
            <span>{item.name}</span>
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
          className="flex items-center w-full gap-3 px-3 py-2 text-red-600 transition-colors rounded-md hover:bg-red-50"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
