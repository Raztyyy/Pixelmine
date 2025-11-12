import democraticSystem from "../assets/placeholder.png";
import democraticSystem2 from "../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faUsers,
  faVoteYea,
  faComments,
} from "@fortawesome/pro-solid-svg-icons";

import SEOHelmet from "../ui/SEOHelmet";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";

function DemocraticSystem() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Democratic System | Pixelmine Japan OPC"
            : "民主的システム | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Explore how Pixelmine's democratic governance empowers users to shape the platform through decentralized decision-making and transparent voting mechanisms."
            : "Pixelmineの民主的ガバナンスが、ユーザーに分散型の意思決定と透明な投票メカニズムを通じてプラットフォームの形成を促す方法を探ります。"
        }
        url="https://www.pixelmine.org/democratic-system"
        image="/social-sharing.jpg"
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

        <FadeSlideUp className="relative z-10 px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            {/* Heading */}
            <h1 className="max-w-4xl mx-auto mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
              {isEN ? "Democratic System" : "民主的システム"}
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
              {isEN
                ? "Enhance user participation and engagement through transparent governance"
                : "透明なガバナンスを通じてユーザーの参加と関与を促進"}
            </p>
          </div>
        </FadeSlideUp>
      </section>

      {/* Content Section - Clean White Background */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <FadeSlideUp className="p-6 mx-auto max-w-7xl">
          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="p-8 bg-white shadow-lg rounded-2xl dark:bg-stone-800 ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon
                    icon={faHandshakeSimple}
                    className="text-white size-6"
                  />
                </div>
                <h3 className="pt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {isEN ? "Participation & Transparency" : "参加と透明性"}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {isEN
                  ? "Pixelmine focuses on user participation, transparency, and the fair distribution of information. By empowering users to express their opinions, Pixelmine facilitates meaningful discussions around social, political, and cultural issues."
                  : "Pixelmineは、ユーザーの参加、透明性、および情報の公平な分配に重点を置いています。ユーザーが意見を表明できるようにすることで、社会的、政治的、文化的な問題について有意義な議論を促進します。"}
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-8 bg-white shadow-lg rounded-2xl dark:bg-stone-800 ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-white size-6"
                  />
                </div>
                <h3 className="pt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {isEN ? "Commitment to Inclusivity" : "包括性への取り組み"}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {isEN
                  ? "A key feature of Pixelmine is its commitment to inclusivity. The platform employs algorithms that promote diverse viewpoints instead of just trending content, creating a richer dialogue. Users can engage in discussions, organize community initiatives, and amplify marginalized voices, contributing to a more informed and active citizenry."
                  : "Pixelmineの重要な特徴は、包括性への取り組みです。プラットフォームは、トレンドコンテンツだけでなく、多様な視点を促進するアルゴリズムを採用しており、より豊かな対話を生み出します。ユーザーは議論に参加し、コミュニティの取り組みを組織し、周縁化された声を増幅することで、より情報に基づいた積極的な市民社会に貢献できます。"}
              </p>
            </div>

            {/* Section 3 */}
            <div className="p-8 bg-white shadow-lg rounded-2xl dark:bg-stone-800 ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon
                    icon={faVoteYea}
                    className="text-white size-6"
                  />
                </div>
                <h3 className="pt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {isEN
                    ? "Tool for Participatory Democracy"
                    : "参加型民主主義のツール"}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {isEN
                  ? "Ultimately, Pixelmine serves as a powerful tool for participatory democracy, enabling individuals to connect, collaborate, and advocate for change on a larger scale. However, its success depends on ongoing efforts to keep the platform free from manipulation and to promote genuine dialogue among users."
                  : "最終的に、Pixelmineは参加型民主主義のための強力なツールとして機能し、個人がつながり、協力し、より大規模な変革を推進することを可能にします。しかし、その成功は、プラットフォームを操作から守り、ユーザー間の真の対話を促進する継続的な努力に依存します。"}
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="p-8 mt-12 text-center shadow-2xl rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600">
            <div
              className="absolute inset-0 opacity-10 rounded-3xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold text-white">
                {isEN ? "Join the Movement" : "ムーブメントに参加"}
              </h3>
              <p className="mb-6 text-lg text-emerald-100">
                {isEN
                  ? "Be part of a truly democratic social network where your voice matters"
                  : "あなたの声が重要な、真に民主的なソーシャルネットワークの一部になりましょう"}
              </p>
              <button className="px-8 py-4 text-base font-bold transition-all bg-white shadow-xl text-emerald-700 rounded-2xl hover:bg-gray-50 hover:scale-105">
                {isEN ? "Learn More" : "詳細を見る"}
              </button>
            </div>
          </div> */}
        </FadeSlideUp>
      </section>
    </>
  );
}

export default DemocraticSystem;
