import { faArrowLeft, faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, useLocation } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../../context/AuthContext";

function DashboardHeader({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/dashboard") return "Dashboard";
    if (location.pathname === "/dashboard/analytics") return "Analytics";
    if (location.pathname === "/dashboard/settings") return "Settings";
    if (location.pathname === "/dashboard/profile") return "Profile";
    return "Page";
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-[20px] ">
        {/* bg-white border-b shadow-sm */}
        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon
            icon={sidebarOpen ? faArrowLeft : faBars}
            className="w-5 h-5"
          />
        </button>
        <h1 className="text-xl font-semibold">{getPageTitle()}</h1>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex-col items-end hidden text-sm lg:flex ">
            <div className="text-stone-900">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="flex items-center gap-1 text-xs text-stone-500 ">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Online
            </div>
          </div>
          <ProfileDropdown />
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardHeader;
