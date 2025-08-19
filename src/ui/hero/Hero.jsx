import { Link } from "react-router-dom";
import heroImg from "../../assets/placeholder.png";
import DownloadButtons from "./DownloadButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/pro-solid-svg-icons";

// Import animation wrapper
import {
  FadeSlideUp,
  StaggerContainer,
  StaggerItem,
} from "../../animations/AnimatedWrappers";

function Hero() {
  return (
    <section className="pt-[3rem] pb-[3rem] sm:pt-[11rem] sm:pb-[11rem] bg-green-50/50 dark:bg-stone-900">
      <StaggerContainer className="flex flex-col gap-0 px-6 mx-auto md:gap-10 max-w-7xl sm:flex-row ">
        <div className="flex-1">
          <Link
            className="inline-flex items-center gap-3 pr-3 mb-5 group"
            to="/concept"
          >
            <StaggerItem className="relative inline-flex items-center gap-2 py-1 pl-1 pr-6 overflow-hidden transition-colors duration-300 ease-in-out bg-white border rounded-full before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full group-hover:text-white">
              <FontAwesomeIcon
                icon={faPlay}
                className="relative z-10 p-2 text-white rounded-full size-3 bg-primary"
              />
              <div className="relative z-10 flex items-center gap-2">
                <p className="text-xs font-bold transition-all duration-300 ease-in-out">
                  Watch:
                </p>
                <p className="text-xs transition-all duration-300 ease-in-out">
                  The Concept behind Pixelmine
                </p>
              </div>
            </StaggerItem>
          </Link>

          <StaggerItem>
            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight max-w-auto sm:max-w-[35rem] dark:text-stone-50">
              Free to use for everyone always
            </h1>
            <p className="pt-5 pb-5 max-w-[30rem] text-sm/6 text-gray-600 dark:text-stone-50">
              Pixelmine is a social networking system that enhances user
              empowerment by decentralizing control and governance across
              multiple nodes or servers.
            </p>
            <DownloadButtons />
          </StaggerItem>
        </div>
        <FadeSlideUp className="flex-1 ">
          {/* <img
            src={heroImg}
            alt="Hero Image"
            className="object-contain w-full rounded-xl"
          /> */}
        </FadeSlideUp>
      </StaggerContainer>
    </section>
  );
}

export default Hero;
