import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocketLaunch,
  faBrainCircuit,
  faKey,
  faBook,
  faQuestionCircle,
  faHeadset,
  faServer,
} from "@fortawesome/pro-solid-svg-icons";
import { NavLink } from "react-router-dom";

const documentationOverview = [
  {
    icon: faRocketLaunch,
    title: "Getting Started",
    description:
      "Step-by-step guide to set up your account and explore the dashboard.",
    path: "/dashboard/documentation/getting-started",
    link: "Read more →",
  },
  {
    icon: faBrainCircuit,
    title: "Core Concepts",
    description: "Understand how Pixelmine works, from ad points to analytics.",
    path: "/dashboard/documentation/concepts",
    link: "Explore →",
  },
  {
    icon: faKey,
    title: "API Reference",
    description:
      "Dive into endpoints and learn how to integrate with Pixelmine.",
    path: "/dashboard/documentation/api-reference",
    link: "View API →",
  },
  {
    icon: faServer,
    title: "Storer Download Guide",
    description:
      "Download Storer quickly and easily, with guides to help you get started and resolve common setup issues.",
    path: "/dashboard/documentation/storer-download",
    link: "Learn More →",
  },
  {
    icon: faServer,
    title: "Storer Installation Guide",
    description:
      "Detailed instructions for installing Storer, including system requirements and troubleshooting common issues.",
    path: "/dashboard/documentation/storer-installation",
    link: "Learn More →",
  },
  {
    icon: faServer,
    title: "Storer Ad Setup Guide",
    description:
      "Everything you need to set up Storer Ads, with easy guides and help for common ad setup problems.",
    path: "/dashboard/documentation/storer-ad-setup",
    link: "Learn More →",
  },
  {
    icon: faBook,
    title: "Guides",
    description:
      "Hands-on tutorials to help you customize and expand your dashboard.",
    path: "/dashboard/documentation/guides",
    link: "Explore →",
  },
  {
    icon: faQuestionCircle,
    title: "FAQ",
    description:
      "Find answers to the most common issues and tips to troubleshoot problems.",
    path: "/dashboard/documentation/faq",
    link: "Learn More →",
  },
  {
    icon: faHeadset,
    title: "Support",
    description:
      "Need help? Get in touch with our support team or check community forums.",
    path: "/dashboard/documentation/support",
    link: "Learn More →",
  },
];

function DocumentationOverview() {
  return (
    <div className="text-center">
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
        Welcome to Pixelmine Docs
      </h2>
      <p className="max-w-5xl mx-auto mt-6 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        This is the central hub for learning how to use the Pixelmine Dashboard.
        Whether you're new or experienced, you'll find everything you need to
        get started, explore features, and integrate with our APIs.
      </p>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
        {documentationOverview.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white border border-gray-200 shadow-lg group md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 min-h-[280px]"
          >
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-white size-7"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
            <NavLink
              to={item.path}
              className="font-semibold transition-colors text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 hover:underline"
            >
              {item.link}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentationOverview;
