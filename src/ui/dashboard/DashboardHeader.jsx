import { faArrowLeft, faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../../context/AuthContext";

function DashboardHeader({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;

    // Top-level dashboard routes
    if (path === "/dashboard") return "Dashboard";
    if (path === "/dashboard/analytics") return "Analytics";
    if (path === "/dashboard/settings") return "Settings";
    if (path === "/dashboard/profile") return "Profile";
    if (path === "/dashboard/buy") return "Buy";
    if (path === "/dashboard/history") return "History";
    if (path === "/dashboard/payment-method") return "Payment Method";

    // Documentation routes
    if (path === "/dashboard/documentation") return "Documentation";
    if (path === "/dashboard/documentation/getting-started")
      return "Getting Started";
    if (path === "/dashboard/documentation/concepts") return "Core Concepts";
    if (path === "/dashboard/documentation/api-reference")
      return "API Reference";
    if (path === "/dashboard/documentation/storer-download")
      return "Storer Download";
    if (path === "/dashboard/documentation/guides") return "Guides";
    if (path === "/dashboard/documentation/faq") return "FAQ";
    if (path === "/dashboard/documentation/support") return "Support";

    return "Page";
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200 shadow-sm lg:px-8 lg:py-5 dark:bg-stone-900 dark:border-gray-700 backdrop-blur-md">
      {/* Sidebar toggle button */}
      <button
        className="p-2 text-gray-600 transition-colors rounded-lg lg:hidden dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-800"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon
          icon={sidebarOpen ? faArrowLeft : faBars}
          className="w-5 h-5"
        />
      </button>

      {/* Page title */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {getPageTitle()}
      </h1>

      {/* Profile Dropdown */}
      <div className="flex items-center gap-4">
        <div className="flex-col items-end hidden text-sm lg:flex">
          <div className="font-semibold text-gray-900 dark:text-white">
            {user?.first_name} {user?.last_name}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-emerald-400 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
            </span>
            Online
          </div>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default DashboardHeader;
