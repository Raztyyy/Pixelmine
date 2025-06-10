import placeholderImg from "../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";

import SEOHelmet from "../ui/SEOHelmet";
import AnimatedSection from "../animations/AnimatedSection";

function DemocraticSystem() {
  return (
    <>
      <SEOHelmet
        title="Democratic System | Pixelmine Japan OPC"
        description="Explore how Pixelmine’s democratic governance empowers users to shape the platform through decentralized decision-making and transparent voting mechanisms."
        url="https://www.pixelmine.org/democratic-system"
        image="/social-sharing.jpg"
      />

      <AnimatedSection
        element="section"
        className="pt-16 pb-16 sm:pt-28 sm:pb-28 bg-green-50/50"
      >
        <div className="flex flex-col items-start gap-10 p-6 mx-auto md:flex-row sm:items-start lg:items-center max-w-7xl md:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem]">
              Democratic System
            </h1>
            <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-gray-600">
              Enhance user participation and engagement.
            </p>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            <img
              src={placeholderImg}
              alt="Placeholder Image"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        element="section"
        className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]"
      >
        <div className="flex flex-col-reverse gap-10 p-6 mx-auto lg:flex-row max-w-7xl">
          <div className="flex-1">
            <img src={placeholderImg} alt="Placeholder Image" />
          </div>
          <div className="flex-1">
            <FontAwesomeIcon
              icon={faLightbulbOn}
              className="p-2 mt-4 mb-4 rounded bg-primary/80 text-slate-100 size-5"
            />
            <p className="mb-2 text-sm text-gray-600 sm:text-base">
              Pixelmine focuses on user participation, transparency, and the
              fair distribution of information. By empowering users to express
              their opinions, Pixelmine facilitates meaningful discussions
              around social, political, and cultural issues.
            </p>
            <p className="mb-2 text-sm text-gray-600 sm:text-base">
              A key feature of Pixelmine is its commitment to inclusivity. The
              platform employs algorithms that promote diverse viewpoints
              instead of just trending content, creating a richer dialogue.
              Users can engage in discussions, organize community initiatives,
              and amplify marginalized voices, contributing to a more informed
              and active citizenry.
            </p>
            <p className="mb-2 text-sm text-gray-600 sm:text-base">
              Ultimately, Pixelmine serves as a powerful tool for participatory
              democracy, enabling individuals to connect, collaborate, and
              advocate for change on a larger scale. However, its success
              depends on ongoing efforts to keep the platform free from
              manipulation and to promote genuine dialogue among users.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default DemocraticSystem;
