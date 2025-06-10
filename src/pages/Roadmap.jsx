import AnimatedSection from "../animations/AnimatedSection";
import SEOHelmet from "../ui/SEOHelmet";

import placeholderImg from "../assets/placeholder.png";
import Timeline from "../ui/roadmap/Timeline";

function Roadmap() {
  return (
    <>
      <SEOHelmet
        title="Page Under Construction | Pixelmine Japan OPC"
        description="This page is currently under construction. Please check back soon for updates from Pixelmine Japan OPC."
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <AnimatedSection
        element="section"
        className="pt-16 pb-16 sm:pt-28 sm:pb-28 bg-green-50/50"
      >
        <div className="flex flex-col items-start gap-10 p-6 mx-auto lg:flex-row sm:items-start max-w-7xl">
          {/* Left Column - Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem]">
              Roadmap
            </h1>
            <p className="pt-5 pb-5 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-gray-600">
              Our strategic roadmap outlines the evolution of Pixelmine OPC
              Japan, focusing on innovative technology, creator empowerment, and
              global expansion.
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="flex-1 w-full">
            <Timeline></Timeline>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Roadmap;
