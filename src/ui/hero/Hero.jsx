import { Link } from "react-router-dom";
import DownloadButtons from "./DownloadButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-solid-svg-icons";

import { useAuth } from "../../context/AuthContext";

// Import animation wrapper
import { FadeSlideUp } from "../../animations/AnimatedWrappers";
import Button from "../Button";

function Hero() {
  const { isAuthenticated } = useAuth();

  return (
    <FadeSlideUp
      element="section"
      className="pt-[4rem] pb-[4rem]  dark:bg-stone-900 bg-primary/100"
    >
      <div className="flex flex-col px-6 mx-auto text-center sm:text-start max-w-7xl ">
        {/* <div className="flex justify-center w-full">
          <Link
            className="inline-flex items-center gap-3 pr-3 mb-7 group"
            to="/concept"
          >
            <div className="relative inline-flex items-center gap-2 py-1 pl-1 pr-6 overflow-hidden transition-colors duration-300 ease-in-out bg-white border rounded-full before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full group-hover:text-white">
              <FontAwesomeIcon
                icon={faPlay}
                className="relative z-10 p-2 text-white rounded-full size-3 bg-primary"
              />
              <div className="relative z-10 flex items-center gap-2">
                <p className="text-sm font-bold transition-all duration-300 ease-in-out">
                  Watch:
                </p>
                <p className="text-sm transition-all duration-300 ease-in-out">
                  The Concept behind Pixelmine
                </p>
              </div>
            </div>
          </Link>
        </div> */}
        <div className="flex flex-col gap-12 lg:gap-0 md:flex-row">
          <div className="flex flex-col justify-between text-center lg:pr-5 md:text-end">
            <p className="mb-1 text-sm font-medium tracking-widest text-white uppercase md:mb-3 dark:text-green-400 bg">
              Mobile Application
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-2xl lg:text-3xl dark:text-stone-50">
              Free to use for everyone, always
            </h1>
            <p className="pb-5 text-base pt-7 text-stone-50 dark:text-stone-50">
              Pixelmine is an innovative social networking system designed to
              empower users through the decentralization of control and
              governance. By operating across multiple nodes or servers, it
              ensures greater user autonomy and fosters a collaborative
              environment.
            </p>
            <div className="flex items-end justify-center mt-auto md:justify-end">
              <DownloadButtons />
            </div>
          </div>
          <div className="flex flex-col justify-between lg:pl-5 lg:border-l-[1px]  lg:border-gray-300   md:text-start text-center ">
            <p className="mb-1 text-sm font-medium tracking-widest text-white uppercase md:mb-3 dark:text-green-400">
              Storer Engine
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-2xl lg:text-3xl dark:text-stone-50">
              {/* Run and host user data in our Storer Engine */}
              Run and host user data
            </h2>
            <p className="pb-5 text-base pt-7 text-stone-50 dark:text-stone-50">
              The Storer engine is a command-line interface application that
              operates without the need for configuration settings. It acts as a
              host for a variety of public data sourced from the Pixelmine
              mobile application, enabling users to access and utilize that data
              efficiently.
            </p>
            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-3 md:mt-5 md:justify-start">
              {isAuthenticated ? (
                <Button variant="primary85" path="/dashboard">
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="text-white transition-all duration-300 ease-in-out size-4"
                  />
                  Go To Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="bg-white dark:hover:bg-primary "
                    path="/login"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="text-gray-900 transition-all duration-300 ease-in-out size-4 dark:text-stone-900 dark:group-hover:text-stone-50"
                    />
                    <span className="transition-all duration-300 ease-in-out dark:text-stone-900 dark:group-hover:text-stone-50">
                      Login
                    </span>
                  </Button>

                  <Button variant="primary85" path="/signup">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className="text-white transition-all duration-300 ease-in-out size-4"
                    />
                    Create Account
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeSlideUp>
  );
}

export default Hero;
