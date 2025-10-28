import { StaggerContainer, StaggerItem } from "../animations/AnimatedWrappers";
import SEOHelmet from "../ui/SEOHelmet";

import Timeline from "../ui/roadmap/Timeline";
import { useLanguage } from "../context/LanguageContext"; // your language context

function Roadmap() {
  const { language } = useLanguage(); // "en" or "jp"

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Roadmap | Pixelmine Japan OPC"
            : "ロードマップ | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Explore the future of Pixelmine Japan OPC. Discover upcoming features, creator tools, and our vision for empowering digital innovation across Japan and beyond."
            : "Pixelmine Japan OPC の将来の展望を示す戦略的ロードマップです。革新的な技術、クリエイター支援、グローバル展開に焦点を当てています。"
        }
        url="https://www.pixelmine.org/roadmap"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:bg-stone-800">
        <StaggerContainer className="flex flex-col items-start gap-10 p-6 mx-auto lg:flex-row sm:items-start max-w-7xl">
          {/* Left Column - Text */}
          <StaggerItem className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
              {language === "jp" ? "ロードマップ" : "Roadmap"}
            </h1>
            <p className="pt-5 pb-5 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              {language === "jp"
                ? "Pixelmine OPC Japan の進化を概説し、革新的な技術、クリエイター支援、そしてグローバル展開に焦点を当てた戦略的ロードマップです。"
                : "Our strategic roadmap outlines the evolution of Pixelmine OPC Japan, focusing on innovative technology, creator empowerment, and global expansion."}
            </p>
          </StaggerItem>

          {/* Right Column - Cards */}
          <div className="flex-1 w-full">
            <Timeline />
          </div>
        </StaggerContainer>
      </section>
    </>
  );
}

export default Roadmap;
