import { faArrowLeft, faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

function DashboardHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon
            icon={sidebarOpen ? faArrowLeft : faBars}
            className="w-5 h-5"
          />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>

      {/* Page content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardHeader;
