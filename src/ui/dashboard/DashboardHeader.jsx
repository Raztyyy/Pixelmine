import { faArrowLeft, faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
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
    if (location.pathname === "/dashboard/buy") return "Buy";
    if (location.pathname === "/dashboard/history") return "History";
    if (location.pathname === "/dashboard/payment-method")
      return "Payment Method";
    return "Page";
  };

  return (
    <header className="flex items-center justify-between px-4 py-[12px] lg:px-8 lg:py-[20px] bg-white dark:bg-zinc-800 border-b border-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-stone-400/50">
      {/* Sidebar toggle button */}
      <button
        className="lg:hidden dark:text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon
          icon={sidebarOpen ? faArrowLeft : faBars}
          className="w-5 h-5"
        />
      </button>

      {/* Page title */}
      <h1 className="text-xl text-stone-900 dark:text-white">
        {getPageTitle()}
      </h1>

      {/* Profile Dropdown */}
      <div className="flex items-center gap-3">
        <div className="flex-col items-end hidden text-sm lg:flex">
          <div className="text-stone-900 dark:text-white">
            {user?.first_name} {user?.last_name}
          </div>
          <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-300">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full dark:bg-green-400"></span>
            Online
          </div>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default DashboardHeader;
