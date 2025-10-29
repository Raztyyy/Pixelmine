import Accordion from "../ui/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import SEOHelmet from "../ui/SEOHelmet";
import "katex/dist/katex.min.css";
import { designImplementationItems } from "../data/designimplementation/designImplementationData";
import { useLanguage } from "../context/LanguageContext"; // language context

function DesignImplementation() {
  const { language } = useLanguage(); // "en" or "jp"

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Design & Implementation | Pixelmine Japan OPC"
            : "設計と実装 | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
            : "ビザンチン障害耐性を備えたデータ伝播による分散型ソーシャルネットワーク"
        }
        url="https://pixelmine.org/design-implementation"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] dark:text-stone-50 bg-green-50/50 dark:bg-stone-900">
        <FadeSlideUp className="flex flex-col items-start gap-10 p-6 mx-auto md:flex-row sm:items-start lg:items-center max-w-7xl md:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[50rem]">
              {language === "en" ? "Design & Implementation" : "設計と実装"}
            </h1>
            <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
                : "ビザンチン障害耐性データ伝播を備えた分散型ソーシャルネットワーク"}
            </p>
          </div>
          {/* Right Column */}
          <div className="flex-1 "></div>
        </FadeSlideUp>
      </section>

      <section className="pt-[2rem] pb-[2rem] overflow-x-hidden">
        <div className="items-center gap-10 p-6 mx-auto max-w-7xl sm:flex-row">
          <div className="mt-10 space-y-10">
            {designImplementationItems.map((item, index) => (
              <section key={index}>
                <h2 className="mb-4 text-xl font-medium sm:text-2xl dark:text-white">
                  {language === "jp" ? item.titleJP || item.title : item.title}
                </h2>
                <div className="leading-relaxed">
                  {language === "jp"
                    ? item.contentJP || item.content
                    : item.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DesignImplementation;
