import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocketLaunch,
  faBrainCircuit,
  faKey,
  faBook,
  faQuestionCircle,
  faHeadset,
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
      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
        Welcome to Pixelmine Docs
      </h2>
      <p className="max-w-5xl mx-auto mt-5 text-sm text-gray-500 md:text-lg">
        This is the central hub for learning how to use the Pixelmine Dashboard.
        Whether you’re new or experienced, you’ll find everything you need to
        get started, explore features, and integrate with our APIs.
      </p>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {documentationOverview.map((item) => (
          <div
            key={item.title}
            className="p-5 transition bg-white border shadow-sm rounded-xl hover:shadow-md min-h-[280px] justify-center items-center flex flex-col"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <FontAwesomeIcon
                icon={item.icon}
                className="w-5 h-5 p-4 rounded-full bg-primary text-stone-50 ring-4 ring-green-200/45"
              />
              <h3 className="mb-2 text-lg font-semibold text-stone-900">
                {item.title}
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-600">{item.description}</p>
            <NavLink
              to={item.path}
              className="font-medium text-primary hover:underline"
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
