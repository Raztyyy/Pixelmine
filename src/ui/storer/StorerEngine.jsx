import Button from "../Button";
import StorerImg from "../../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-regular-svg-icons";
import LoginModal from "./LoginModal";
import SignupModal from "../../features/signup/SignupModal";
import { useState } from "react";

function StorerEngine() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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
            <LoginModal
              variant="outline"
              isOpen={isLoginOpen}
              setIsOpen={setIsLoginOpen}
              switchToLogin={() => {
                setIsSignupOpen(true); // Open Signup
                setIsLoginOpen(false); // Close Login
              }}
            >
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-gray-900 transition-all duration-300 ease-in-out size-4 dark:text-stone-50 "
              />
              <span className="dark:text-stone-50">Login</span>
            </LoginModal>

            <SignupModal
              variant="primary"
              size="md"
              isOpen={isSignupOpen}
              setIsOpen={setIsSignupOpen}
              switchToLogin={() => {
                setIsSignupOpen(false); // Close Signup
                setIsLoginOpen(true); // Open Login
              }}
            >
              <FontAwesomeIcon
                icon={faUserCheck}
                className="text-white transition-all duration-300 ease-in-out size-4"
              />
              Create Account
            </SignupModal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorerEngine;
