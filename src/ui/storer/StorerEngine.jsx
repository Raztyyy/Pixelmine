import Button from "../Button";
import StorerImg from "../../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-regular-svg-icons";
import LoginModal from "./LoginModal";

function StorerEngine() {
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem] dark:bg-stone-800">
      <div className="flex flex-col-reverse items-center gap-10 p-6 mx-auto max-w-7xl sm:flex-row ">
        <div className="items-center justify-center flex-1">
          {/* <img
            src={StorerImg}
            alt="Storer Image"
            className="h-md w-[80%] mx-auto rounded-xl"
          /> */}
        </div>
        <div className="flex-1 ">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem] dark:text-stone-50">
            Run and host user data in our Storer Engine{" "}
          </h2>
          <p className="pt-5 pb-8 text-gray-600 text-sm/6 dark:text-stone-50">
            Storer engine is a command line interface configuration-less
            application that serves as the host of public data from the
            Pixelmine mobile application
          </p>
          {/* Buttons */}
          <div className="flex gap-3 ">
            <LoginModal variant="outline">
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-gray-900 transition-all duration-300 ease-in-out size-4 dark:text-stone-50 "
              />
              <span className="dark:text-stone-50">Login</span>
            </LoginModal>

            <Button variant="primary" size="md" path="sign-up">
              <FontAwesomeIcon
                icon={faUserCheck}
                className="text-white transition-all duration-300 ease-in-out size-4"
              />
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorerEngine;
