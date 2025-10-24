import { Link } from "react-router-dom";
import DownloadButtons from "./DownloadButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-solid-svg-icons";

import { useAuth } from "../../context/AuthContext";
import { FadeSlideUp } from "../../animations/AnimatedWrappers";
import Button from "../Button";
import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage(); // get current language
  const isEN = language === "en"; // helper

  return (
    <FadeSlideUp
      element="section"
      className="pt-[4rem] pb-[4rem]  dark:bg-stone-900 bg-primary/100"
    >
      <div className="flex flex-col px-6 mx-auto text-center sm:text-start max-w-7xl ">
        <div className="flex flex-col gap-12 lg:gap-0 md:flex-row">
          <div className="flex flex-col justify-between text-center lg:pr-5 md:text-end">
            <p className="mb-1 text-sm font-medium tracking-widest text-white uppercase md:mb-3 dark:text-green-400 bg">
              {isEN ? "Mobile Application" : "モバイルアプリケーション"}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN
                ? "Free to use for everyone, always"
                : "誰でも自由に、いつでも使える"}
            </h1>

            <p className="pb-5 text-base pt-7 text-stone-50 dark:text-stone-50">
              {isEN
                ? "Pixelmine is an innovative social networking system designed to empower users through the decentralization of control and governance. By operating across multiple nodes or servers, it ensures greater user autonomy and fosters a collaborative environment."
                : "Pixelmineは、制御とガバナンスの分散化を通じてユーザーの権限を強化する革新的なソーシャルネットワーキングシステムです。複数のノードやサーバーで動作することで、ユーザーの自律性を高め、協力的な環境を促進します。"}
            </p>

            <div className="flex items-end justify-center mt-auto md:justify-end">
              <DownloadButtons />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:pl-5 lg:border-l-[1px] lg:border-gray-300 md:text-start text-center">
            <p className="mb-1 text-sm font-medium tracking-widest text-white uppercase md:mb-3 dark:text-green-400">
              {isEN ? "Storer Engine" : "ストーラーエンジン"}
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN
                ? "Run and host user data"
                : "ユーザーデータの実行とホスティング"}
            </h2>

            <p className="pb-5 text-base pt-7 text-stone-50 dark:text-stone-50">
              {isEN
                ? "The Storer engine is a command-line interface application that operates without the need for configuration settings. It acts as a host for a variety of public data sourced from the Pixelmine mobile application, enabling users to access and utilize that data efficiently."
                : "ストーラーエンジンは、設定不要で動作するコマンドラインインターフェースアプリケーションです。Pixelmineモバイルアプリケーションから取得したさまざまな公開データをホストし、ユーザーが効率的にアクセス・活用できるようにします。"}
            </p>

            <div className="flex justify-center gap-3 mt-3 md:mt-5 md:justify-start">
              {isAuthenticated ? (
                <Button variant="primary85" path="/dashboard">
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="text-white transition-all duration-300 ease-in-out size-4"
                  />
                  {isEN ? "Go To Dashboard" : "ダッシュボードへ"}
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
                      {isEN ? "Login" : "ログイン"}
                    </span>
                  </Button>

                  <Button variant="primary85" path="/signup">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className="text-white transition-all duration-300 ease-in-out size-4"
                    />
                    {isEN ? "Create Account" : "アカウント作成"}
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
