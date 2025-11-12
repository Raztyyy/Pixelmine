import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CustomVideoPlayer from "../ui/concept/CustomVideoPlayer";
import Accordion from "../ui/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn, faPlay } from "@fortawesome/pro-solid-svg-icons";
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

      {/* Hero Section - Matching Hero Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dotted Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated Gradient Blobs */}
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <FadeSlideUp className="relative z-10 flex flex-col items-start gap-12 p-6 mx-auto md:flex-col max-w-7xl lg:gap-16">
          <div className="flex flex-col items-center gap-12 lg:gap-16 lg:flex-row">
            {/* Left Column */}
            <div className="flex-1 text-center md:text-left">
              {/* Badge */}
              {/* <div className="flex justify-center mb-6 md:justify-start">
                <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                  {isEN ? "Concept" : "コンセプト"}
                </span>
              </div> */}

              {/* Heading */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl drop-shadow-lg">
                {isEN ? "Concept" : "コンセプト"}
              </h1>

              {/* Description */}
              <p className="mb-6 text-base leading-relaxed md:text-lg text-emerald-50 drop-shadow-md">
                {isEN
                  ? "The abstract concept underlying Pixelmine that serves as a crucial foundation for the system's development."
                  : "Pixelmineの根底にある抽象的な概念で、システム開発の重要な基盤となります。"}
              </p>

              {/* Info Box */}
              <div className="p-5 border-l-4 rounded-r-xl border-white/50 bg-white/10 backdrop-blur-md">
                <p className="text-sm leading-relaxed text-white/90">
                  {isEN
                    ? "Watch the presentation by Yutaro Sodei, the CEO of Pixelmine Japan. He provides a comprehensive overview of the system and its potential impact on the SNS market."
                    : "Pixelmine JapanのCEO、曽根祐太郎によるプレゼンテーションをご覧ください。システムの全体像とSNS市場への潜在的な影響を紹介します。"}
                </p>
              </div>
            </div>

            {/* Right Column - Video Player */}
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
                      className="overflow-hidden shadow-2xl rounded-3xl shadow-gray-900/30"
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
          </div>

          {/* Video Switch Buttons */}
          <StaggerContainer className="flex flex-col w-full gap-3 lg:flex-row lg:w-auto">
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <button
                  onClick={() => handleSwitch(video.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group ${
                    video.id === activeVideoId
                      ? "bg-white text-gray-900 shadow-xl"
                      : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm transition-all ${
                        video.id === activeVideoId
                          ? "bg-emerald-600 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {video.id === activeVideoId ? (
                        <FontAwesomeIcon icon={faPlay} className="size-3" />
                      ) : (
                        video.id
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium leading-relaxed ${
                        video.id === activeVideoId
                          ? "text-gray-900"
                          : "text-white/90"
                      }`}
                    >
                      {video.title}
                    </span>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeSlideUp>
      </section>

      {/* Content Section - Clean White Background */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <div className="p-6 mx-auto max-w-7xl">
          {/* Icon & Introduction */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
              <FontAwesomeIcon
                icon={faLightbulbOn}
                className="text-white size-7"
              />
            </div>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? "The idea behind Pixelmine is to create a platform that empowers users by removing the need for a central authority or server to control user data and interactions. Instead, these platforms distribute information across interconnected nodes, allowing users to communicate directly with one another without intermediaries. The following are essential factors to consider in order to fully comprehend the concept of the system."
                : "Pixelmineの理念は、ユーザーデータややり取りを中央の管理者やサーバーに依存することなく、ユーザー自身が主体的に利用できるプラットフォームを構築することです。情報は相互に接続されたノードに分散され、ユーザー同士が仲介者なしで直接コミュニケーションできるようになります。以下は、本システムのコンセプトを正しく理解するために考慮すべき重要な要素です。"}
            </p>
          </div>

          {/* Accordion */}
          <div className="mb-12">
            <Accordion items={conceptItems} language={language} />
          </div>

          {/* Closing Statement */}
          <div className="p-8 border-l-4 rounded-r-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-600 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-600">
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? "We implement a series of substantial measures to ensure that the system effectively adapts to the continually evolving dynamics of the social networking landscape."
                : "私たちは、システムが急速に進化するソーシャルネットワーキング環境に適応できるよう、さまざまな施策を実施しています。"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Concept;
