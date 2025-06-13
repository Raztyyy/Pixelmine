// import StackedAvatars from "./StackedAvatars";
import { Link } from "react-router-dom";
import heroImg from "../../assets/placeholder.png";
import DownloadButtons from "./DownloadButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/pro-solid-svg-icons";

function Hero() {
  return (
    <section className="pt-[3rem] pb-[3rem] sm:pt-[11rem] sm:pb-[11rem] bg-green-50/50 dark:bg-stone-900">
      <div className="flex flex-col items-center gap-10 p-6 mx-auto max-w-7xl sm:flex-row ">
        <div className="flex-1">
          <Link
            className="inline-flex items-center gap-3 pr-3 mb-5 rounded bg-white/70 group"
            to="/concept"
          >
            <div className="inline-flex items-center gap-2 px-2 py-1 transition-all duration-300 ease-in-out rounded bg-primary group-hover:bg-primary/85">
              <FontAwesomeIcon icon={faPlay} className="text-white size-3 " />
              <p className="text-xs text-white">Watch</p>
            </div>

            <p className="text-xs font-semibold transition-all duration-300 ease-in-out group-hover:text-primary/85">
              The Concept behind Pixelmine
            </p>
          </Link>

          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-auto sm:max-w-[30rem] dark:text-stone-50">
            Free to use for everyone always
          </h1>
          <p className="pt-5 pb-5 max-w-[30rem] text-sm/6 text-gray-600 dark:text-stone-50">
            Pixelmine is a social networking system that enhances user
            empowerment by decentralizing control and governance across multiple
            nodes or servers.
          </p>
          <DownloadButtons />
        </div>
        <div className="flex-1 ">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
