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
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]">
      <div className="flex gap-10 items-center mx-auto  max-w-7xl p-6 flex-col sm:flex-row ">
        <div className="flex-1">
          <img src={StorerImg} alt="Storer Image" className="h-md" />
        </div>
        <div className="flex-1 ">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem]">
            Run and host user data in our Storer Engine{" "}
          </h2>
          <p className="pt-5 pb-8 text-sm/6 text-gray-600">
            Storer engine is a command line interface configuration-less
            application that serves as the host of public data from the
            Pixelmine mobile application
          </p>
          {/* Buttons */}
          <div className="flex gap-3">
            <LoginModal variant="outline">
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="size-4 text-gray-900 xs transition-all duration-300 ease-in-out"
              />
              Login
            </LoginModal>

            <Button variant="primary" size="md" path="sign-up">
              <FontAwesomeIcon
                icon={faUserCheck}
                className="size-4 text-white  transition-all duration-300 ease-in-out"
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
