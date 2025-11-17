// ui/dashboard/DashboardDocumentationLayout.jsx
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function DashboardDocumentationLayout() {
  const location = useLocation();

  // Breadcrumb mapping
  const breadcrumbMap = {
    "/dashboard/documentation": "Overview",
    "/dashboard/documentation/getting-started": "Getting Started",
    "/dashboard/documentation/api-reference": "API Reference",
    "/dashboard/documentation/concepts": "Concept",
    "/dashboard/documentation/api-reference": "API Reference",
    "/dashboard/documentation/guides": "Guides",
    "/dashboard/documentation/faq": "FAQ",
    "/dashboard/documentation/support": "Support",
  };

  // const documentationLinks = [
  //   {
  //     name: "Overview",
  //     path: "/dashboard/documentation",
  //   },
  //   {
  //     name: "Getting Started",
  //     path: "/dashboard/documentation/getting-started",
  //   },
  //   ,
  //   {
  //     name: "Core Concepts",
  //     path: "/dashboard/documentation/concepts",
  //   },
  //   {
  //     name: "API Reference",
  //     path: "/dashboard/documentation/api-reference",
  //   },
  // ];

  return (
    <div className="mx-auto">
      {/* Breadcrumb */}
      <div className="mt-6 mb-6">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-white border border-gray-200 shadow-lg dark:bg-stone-800 dark:border-gray-700">
          <NavLink
            to="/dashboard/documentation"
            className="text-gray-700 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          >
            Home
          </NavLink>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {breadcrumbMap[location.pathname] || "Docs"}
          </span>
        </div>
      </div>

      {/* Main content */}
      <main className="mt-8">
        <Outlet />
      </main>
    </div>
  );
}
