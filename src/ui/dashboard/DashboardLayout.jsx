// src/components/Layout.jsx
import { useState } from "react";
import Sidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page content */}
        <main className="flex-1 p-4 overflow-y-auto lg:p-8 dark:bg-zinc-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
