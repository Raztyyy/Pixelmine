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
import { useLanguage } from "../../context/LanguageContext"; // import your language context

function Timeline() {
  const { language } = useLanguage(); // "en" or "jp"

  const roadmapData = [
    {
      title:
        language === "jp"
          ? "2024年第3四半期 – 基盤フェーズ"
          : "Q3 2024 – Foundation Phase",
      description:
        language === "jp"
          ? "日本での会社設立、チームのオンボーディング、Pixelmine v1の開発 — クリエイティブツールとプロジェクト立ち上げに焦点を当てたプラットフォームMVP。"
          : "Company incorporation in Japan, team onboarding, and development of Pixelmine v1 — the platform MVP focusing on creative tooling and project launching.",
      icon: faGear,
    },
    {
      title:
        language === "jp"
          ? "2025年第1四半期 – クリエイターポータル公開"
          : "Q1 2025 – Creator Portal Launch",
      description:
        language === "jp"
          ? "Pixelmineクリエイターポータル公開。初期クリエイターのオンボーディング、収益化ツールの展開、NFT統合、セキュアなデジタル資産管理。"
          : "Launch of the Pixelmine Creator Portal. Onboarding of initial creators, rollout of monetization tools, NFT integration, and secure digital asset storage.",
      icon: faRocket,
    },
    {
      title:
        language === "jp"
          ? "2025年第3四半期 – グローバル展開"
          : "Q3 2025 – Global Expansion",
      description:
        language === "jp"
          ? "東南アジアとヨーロッパへの拡張。ローカリゼーション機能、多言語サポート、クリエイターコミュニティとの戦略的パートナーシップ。"
          : "Expansion into Southeast Asia and Europe. Localization features, multi-language support, and strategic partnerships with creator communities.",
      icon: faGlobe,
    },
    {
      title:
        language === "jp"
          ? "2026年 – AI搭載クリエイティブツール"
          : "2026 – AI-Powered Creative Tools",
      description:
        language === "jp"
          ? "AI生成アセットの統合、自動ローカリゼーション、スマートライセンスツール、クロスプラットフォーム公開APIにより、クリエイターの効率を最大化。"
          : "Integration of AI-generated assets, automatic localization, smart licensing tools, and cross-platform publishing APIs for maximum creator efficiency.",
      icon: faWandMagicSparkles,
    },
  ];

  return (
    <StaggerContainer
      element="ol"
      className="relative border-gray-200 border-s"
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
            <FontAwesomeIcon icon={item.icon} className="text-white size-3" />
          </motion.span>

          {/* Animate the text content with stagger */}
          <motion.div variants={staggerItemVariants} className="ml-10">
            <h3 className="mb-1 text-lg font-semibold text-stone-900 dark:text-stone-50">
              {item.title}
            </h3>
            <p className="lg:max-w-[30rem] text-sm sm:text-base text-stone-800 dark:text-stone-50">
              {item.description}
            </p>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default Timeline;
