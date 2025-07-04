import Button from "../Button";
import StorerImg from "../../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-regular-svg-icons";
import { useAuth } from "../../context/AuthContext";

function StorerEngine() {
  const { isAuthenticated } = useAuth();
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem] dark:bg-stone-800">
      <div className="flex flex-col-reverse items-center gap-0 px-6 mx-auto md:gap-10 max-w-7xl sm:flex-row ">
        <div className="items-center justify-center flex-1">
          {/* <img
            src={StorerImg}
            alt="Storer Image"
            className="h-md w-[80%] mx-auto rounded-xl"
          /> */}
        </div>
        <div className="flex-1 ">
          <h2 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl max-w-auto dark:text-stone-50">
            Run and host user data in our Storer Engine
          </h2>
          <p className="pt-5 pb-8 text-gray-600 text-sm/6 dark:text-stone-50">
            Storer engine is a command line interface configuration-less
            application that serves as the host of public data from the
            Pixelmine mobile application
          </p>
          {/* Buttons */}
          <div className="flex gap-3 ">
            {isAuthenticated ? (
              <Button
                variant="primary"
                className="dark:hover:bg-primary"
                path="/dashboard"
              >
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
                  className="dark:hover:bg-primary"
                  path="/login"
                >
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="text-gray-900 transition-all duration-300 ease-in-out size-4 dark:text-stone-50"
                  />
                  <span className="dark:text-stone-50">Login</span>
                </Button>

                <Button
                  variant="primary"
                  className="dark:hover:bg-primary"
                  path="/signup"
                >
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
    </section>
  );
}

export default StorerEngine;
