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
    <div className="p-6 mx-auto ">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500 ">
        <div className=" px-4 py-2  rounded-full bg-white/40 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] inline ">
          <NavLink to="/dashboard/documentation" className="text-gray-700 ">
            Home
          </NavLink>{" "}
          -{" "}
          <span className="font-semibold text-primary">
            {breadcrumbMap[location.pathname] || "Docs"}
          </span>
        </div>
        {/* Main content */}
        <main className="mt-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
