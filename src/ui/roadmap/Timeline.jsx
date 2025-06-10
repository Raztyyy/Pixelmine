import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRocket,
  faGlobe,
  faWandMagicSparkles,
} from "@fortawesome/pro-solid-svg-icons";

const roadmapData = [
  {
    title: "Q3 2024 – Foundation Phase",
    description:
      "Company incorporation in Japan, team onboarding, and development of Pixelmine v1 — the platform MVP focusing on creative tooling and project launching.",
    icon: faGear,
  },
  {
    title: "Q1 2025 – Creator Portal Launch",
    description:
      "Launch of the Pixelmine Creator Portal. Onboarding of initial creators, rollout of monetization tools, NFT integration, and secure digital asset storage.",
    icon: faRocket,
  },
  {
    title: "Q3 2025 – Global Expansion",
    description:
      "Expansion into Southeast Asia and Europe. Localization features, multi-language support, and strategic partnerships with creator communities.",
    icon: faGlobe,
  },
  {
    title: "2026 – AI-Powered Creative Tools",
    description:
      "Integration of AI-generated assets, automatic localization, smart licensing tools, and cross-platform publishing APIs for maximum creator efficiency.",
    icon: faWandMagicSparkles,
  },
];

function Timeline() {
  return (
    <ol className="relative border-gray-200 border-s ">
      {roadmapData.map((item, index) => (
        <li
          key={index}
          className={`ms-6 ${index !== roadmapData.length - 1 ? "mb-10" : ""}`}
        >
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary -start-3 ring-8 ring-white ">
            <FontAwesomeIcon icon={item.icon} className="text-white size-3 " />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
            {item.title}
          </h3>
          <p className="lg:max-w-[30rem] text-sm sm:text-base text-gray-600 ">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
