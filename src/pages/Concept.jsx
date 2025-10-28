import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CustomVideoPlayer from "../ui/concept/CustomVideoPlayer";
import Accordion from "../ui/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";
import SEOHelmet from "../ui/SEOHelmet";

import { items as conceptItems } from "../data/concept/conceptData";
import { useLanguage } from "../context/LanguageContext";

import {
  FadeSlideUp,
  StaggerContainer,
  StaggerItem,
} from "../animations/AnimatedWrappers";

// Slide-up animation variants
const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

function Concept() {
  const [playingId, setPlayingId] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(1);
  const { language } = useLanguage();
  const isEN = language === "en";

  const videos = [
    {
      id: 1,
      src: "/videos/concept-video-2.mp4",
      title: isEN
        ? "Quietly Shaking the World!? The Birth of Pixelmine, a True Decentralized SNS"
        : "【静かに世界を揺るがす！？】20代若き挑戦-真の分散型SNSピクセルマインの爆誕！",
    },
    {
      id: 2,
      src: "/videos/concept-video-1.mp4",
      title: isEN
        ? "The Sad Fate of WEB3 Believers 01: Misled by First-Mover Advantage"
        : "【WEB3信者の悲しい末路０１】先行者利益という言葉に騙された人たち",
    },
    {
      id: 3,
      src: "/videos/concept-video-3.mp4",
      title: isEN
        ? "The Sad Fate of WEB3 Believers 02: Collapse of Data Business"
        : "【WEB3信者の悲しい末路０２】データビジネス崩壊のお知らせ・・・",
    },
  ];

  const handlePlay = (id) => setPlayingId(id);
  const handleSwitch = (id) => {
    setActiveVideoId(id);
    setPlayingId(null);
  };

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Concept | Pixelmine Japan OPC"
            : "コンセプト | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Explore the core concept behind Pixelmine — a decentralized social network focused on transparency, fairness, and empowering users."
            : "Pixelmineの核心概念を探求します — 透明性、公平性、ユーザーのエンパワーメントに焦点を当てた分散型SNSです。"
        }
        url="https://www.pixelmine.org/concept"
        image="/concept-social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:bg-stone-900">
        <FadeSlideUp className="flex flex-col items-start gap-10 p-6 mx-auto md:flex-row sm:items-start lg:items-center max-w-7xl md:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
              {isEN ? "Concept" : "コンセプト"}
            </h1>
            <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              {isEN
                ? "The abstract concept underlying Pixelmine that serves as a crucial foundation for the system's development."
                : "Pixelmineの根底にある抽象的な概念で、システム開発の重要な基盤となります。"}
            </p>

            <p className="mt-2 mb-5 pt-2 pb-2 max-w-full sm:max-w-[30rem] text-xs sm:text-xs text-stone-900 border-l-4 border-primary pl-5 font-light dark:text-stone-50 dark:border-green-400">
              {isEN
                ? "Watch the presentation by Yutaro Sodei, the CEO of Pixelmine Japan. He provides a comprehensive overview of the system and its potential impact on the SNS market."
                : "Pixelmine JapanのCEO、曽根祐太郎によるプレゼンテーションをご覧ください。システムの全体像とSNS市場への潜在的な影響を紹介します。"}
            </p>

            {/* Switch Buttons */}
            <StaggerContainer className="flex flex-col gap-5">
              {videos.map((video) => (
                <StaggerItem key={video.id}>
                  <button
                    onClick={() => handleSwitch(video.id)}
                    className={`inline-flex transition-all duration-300 ease-in-out text-xs text-start ${
                      video.id === activeVideoId
                        ? "text-primary font-semibold dark:text-green-400"
                        : "text-gray-900 dark:text-stone-50"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center ${
                        video.id === activeVideoId
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      } text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}
                    >
                      {video.id}
                    </span>
                    {video.title}
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column with sliding animation */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {videos
                .filter((video) => video.id === activeVideoId)
                .map((video) => (
                  <motion.div
                    key={video.id}
                    variants={slideUpVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full lg:w-fit h-auto"
                  >
                    <CustomVideoPlayer
                      id={video.id}
                      src={video.src}
                      isPlaying={playingId === video.id}
                      onPlay={() => handlePlay(video.id)}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </FadeSlideUp>
      </section>

      <FadeSlideUp element="section" className="pt-[2rem] pb-[2rem]">
        <div className="items-center gap-10 p-6 mx-auto max-w-7xl sm:flex-row">
          <FontAwesomeIcon
            icon={faLightbulbOn}
            className="p-2 mt-4 rounded bg-primary/80 text-slate-100 size-5"
          />
          <p className="mt-5 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            {isEN
              ? "The idea behind Pixelmine is to create a platform that empowers users by removing the need for a central authority or server to control user data and interactions..."
              : "Pixelmineの理念は、ユーザーのデータややり取りを中央の管理者やサーバーに依存せずに、ユーザーが主体的に活用できるプラットフォームを作ることです..."}
          </p>
          <Accordion items={conceptItems} language={language} />
          <p className="mt-5 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            {isEN
              ? "We implement a series of substantial measures to ensure that the system effectively adapts to the continually evolving dynamics of the social networking landscape."
              : "私たちは、システムが急速に進化するソーシャルネットワーキング環境に適応できるよう、さまざまな施策を実施しています。"}
          </p>
        </div>
      </FadeSlideUp>
    </>
  );
}

export default Concept;
