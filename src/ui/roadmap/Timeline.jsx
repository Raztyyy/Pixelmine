import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRocket,
  faGlobe,
  faWandMagicSparkles,
} from "@fortawesome/pro-solid-svg-icons";
import {
  StaggerContainer,
  StaggerItem,
  staggerItemVariants,
} from "../../animations/AnimatedWrappers";
import { motion } from "framer-motion";

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
    <StaggerContainer
      element="ol"
      className="relative border-gray-200 border-s "
    >
      {roadmapData.map((item, index) => (
        <StaggerItem
          element="li"
          key={index}
          className={`relative ms-6 ${
            index !== roadmapData.length - 1 ? "mb-10" : ""
          }`}
        >
          {/* Animate the icon separately */}
          <motion.span
            className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary -start-9 ring-2 ring-white dark:ring-stone-200"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <FontAwesomeIcon icon={item.icon} className="text-white size-3 " />
          </motion.span>

          {/* Animate the text content with stagger */}
          <motion.div variants={staggerItemVariants} className="ml-10">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-stone-50">
              {item.title}
            </h3>
            <p className="lg:max-w-[30rem] text-sm sm:text-base text-gray-600 dark:text-stone-50">
              {item.description}
            </p>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default Timeline;
