import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnalytics,
  faArrowLeft,
  faBars,
  faGear,
  faHome,
  faX,
} from "@fortawesome/pro-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth(); // from context
  const { user } = useAuth();

  const handleLogout = () => {
    logout(); // context handles localStorage and state
    navigate("/login"); // redirect
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-stone-900">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-stone-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 text-xl font-bold border-b text-primary dark:text-stone-50">
          Dashboard
        </div>
        <nav className="p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-stone-700 dark:text-white"
          >
            <FontAwesomeIcon
              icon={faHome}
              className="size-4 dark:text-stone-50"
            />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-stone-700 dark:text-white"
          >
            <FontAwesomeIcon
              icon={faAnalytics}
              className="size-4 dark:text-stone-50"
            />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-stone-700 dark:text-white"
          >
            <FontAwesomeIcon
              icon={faGear}
              className="size-4 dark:text-stone-50"
            />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b shadow-sm dark:bg-stone-800 dark:border-stone-700">
          <button
            className="text-gray-600 lg:hidden dark:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon
              icon={sidebarOpen ? faX : faBars}
              className="size-4 dark:text-stone-50"
            />
          </button>

          <h1 className="text-lg font-medium text-gray-800 dark:text-stone-50">
            Welcome to your Dashboard
          </h1>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="size-4 dark:text-stone-50"
            />
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-stone-700">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-stone-50">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome to Pixelmine! {user?.firstName}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
