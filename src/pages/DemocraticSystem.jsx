import democraticSystem from "../assets/placeholder.png";
import democraticSystem2 from "../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";

import SEOHelmet from "../ui/SEOHelmet";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";

function DemocraticSystem() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Democratic System | Pixelmine Japan OPC"
            : "民主的システム | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Explore how Pixelmine’s democratic governance empowers users to shape the platform through decentralized decision-making and transparent voting mechanisms."
            : "Pixelmineの民主的ガバナンスが、ユーザーに分散型の意思決定と透明な投票メカニズムを通じてプラットフォームの形成を促す方法を探ります。"
        }
        url="https://www.pixelmine.org/democratic-system"
        image="/social-sharing.jpg"
      />

      {/* Hero Section */}
      <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:text-stone-50 dark:bg-stone-900">
        <FadeSlideUp className="flex flex-col items-start gap-10 p-6 mx-auto md:flex-row sm:items-start lg:items-center max-w-7xl md:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem]">
              {language === "en" ? "Democratic System" : "民主的システム"}
            </h1>
            <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "Enhance user participation and engagement."
                : "ユーザーの参加と関与を促進します。"}
            </p>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            {/* <img
              src={democraticSystem}
              alt="Democratic System Image"
              className="object-cover w-full h-auto rounded-xl"
            /> */}
          </div>
        </FadeSlideUp>
      </section>

      {/* Content Section */}
      <section className="pt-[2rem] pb-[2rem]">
        <FadeSlideUp className="flex flex-col-reverse gap-10 p-6 mx-auto lg:flex-row max-w-7xl">
          <div className="flex-1">
            {/* <img
              src={democraticSystem2}
              alt="Democratic System Image"
              className="w-full h-auto rounded-xl"
            /> */}
          </div>
          <div className="flex-1">
            <FontAwesomeIcon
              icon={faLightbulbOn}
              className="p-2 mt-4 mb-4 rounded bg-primary/80 text-slate-100 size-5"
            />
            <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
              {language === "en"
                ? "Pixelmine focuses on user participation, transparency, and the fair distribution of information. By empowering users to express their opinions, Pixelmine facilitates meaningful discussions around social, political, and cultural issues."
                : "Pixelmineは、ユーザーの参加、透明性、および情報の公平な分配に重点を置いています。ユーザーが意見を表明できるようにすることで、社会的、政治的、文化的な問題について有意義な議論を促進します。"}
            </p>
            <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
              {language === "en"
                ? "A key feature of Pixelmine is its commitment to inclusivity. The platform employs algorithms that promote diverse viewpoints instead of just trending content, creating a richer dialogue. Users can engage in discussions, organize community initiatives, and amplify marginalized voices, contributing to a more informed and active citizenry."
                : "Pixelmineの重要な特徴は、包括性への取り組みです。プラットフォームは、トレンドコンテンツだけでなく、多様な視点を促進するアルゴリズムを採用しており、より豊かな対話を生み出します。ユーザーは議論に参加し、コミュニティの取り組みを組織し、周縁化された声を増幅することで、より情報に基づいた積極的な市民社会に貢献できます。"}
            </p>
            <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
              {language === "en"
                ? "Ultimately, Pixelmine serves as a powerful tool for participatory democracy, enabling individuals to connect, collaborate, and advocate for change on a larger scale. However, its success depends on ongoing efforts to keep the platform free from manipulation and to promote genuine dialogue among users."
                : "最終的に、Pixelmineは参加型民主主義のための強力なツールとして機能し、個人がつながり、協力し、より大規模な変革を推進することを可能にします。しかし、その成功は、プラットフォームを操作から守り、ユーザー間の真の対話を促進する継続的な努力に依存します。"}
            </p>
          </div>
        </FadeSlideUp>
      </section>
    </>
  );
}

export default DemocraticSystem;
