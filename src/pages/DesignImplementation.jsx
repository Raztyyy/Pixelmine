import Accordion from "../ui/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzle } from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import SEOHelmet from "../ui/SEOHelmet";
import "katex/dist/katex.min.css";
import { designImplementationItems } from "../data/designimplementation/designImplementationData";
import { useLanguage } from "../context/LanguageContext";

function DesignImplementation() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Design & Implementation | Pixelmine Japan OPC"
            : "設計と実装 | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
            : "ビザンチン障害耐性を備えたデータ伝播による分散型ソーシャルネットワーク"
        }
        url="https://pixelmine.org/design-implementation"
        image="/social-sharing.jpg"
      />

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

        <FadeSlideUp className="relative z-10 flex flex-col items-center gap-4 p-6 mx-auto text-center max-w-7xl ">
          {/* Heading */}
          <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isEN ? "Design & Implementation" : "設計と実装"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
            {isEN
              ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
              : "ビザンチン障害耐性データ伝播を備えた分散型ソーシャルネットワーク"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section - Clean White Background */}
      <section className="py-20 overflow-x-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <div className="p-6 mx-auto max-w-7xl">
          {/* Content Grid */}
          <div className="space-y-16">
            {designImplementationItems.map((item, index) => (
              <FadeSlideUp key={index}>
                <article className="relative">
                  {/* Section Number */}
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    {index + 1}
                  </div>

                  {/* Card Container */}
                  <div className="pl-0 md:pl-16">
                    {/* Title */}
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      {isEN ? item.title : item.titleJP || item.title}
                    </h2>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-code:bg-emerald-50 dark:prose-code:bg-emerald-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950">
                      {isEN ? item.content : item.contentJP || item.content}
                    </div>
                  </div>

                  {/* Divider (except last item) */}
                  {index < designImplementationItems.length - 1 && (
                    <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                  )}
                </article>
              </FadeSlideUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DesignImplementation;
