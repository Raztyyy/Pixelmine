import Accordion from "../ui/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import SEOHelmet from "../ui/SEOHelmet";

import { designImplementationItems } from "../data/designimplementation/designImplementationData";

function DesignImplementation() {
  return (
    <>
      <SEOHelmet
        title="Design & Implementation | Pixelmine Japan OPC"
        description="Decentralized Social Network with Byzantine Fault Tolerant Data
            Propagation"
        url="https://pixelmine.org/design-implementation"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem]  dark:text-stone-50 ">
        <FadeSlideUp className="flex flex-col items-start gap-10 p-6 mx-auto md:flex-row sm:items-start lg:items-center max-w-7xl md:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[50rem]">
              Design & Implementation
            </h1>
            {/* <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              Decentralized Social Network with Byzantine Fault Tolerant Data
              Propagation
            </p> */}
          </div>
          {/* Right Column */}
          <div className="flex-1 ">
            {/* <img
              src={democraticSystem}
              alt="Democratic System Image"
              className="object-cover w-full h-auto rounded-xl"
            /> */}
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
            Decentralized Social Network with Byzantine Fault Tolerant Data
            Propagation
          </p>
          <Accordion items={designImplementationItems} />
        </div>
      </FadeSlideUp>
    </>
  );
}

export default DesignImplementation;
