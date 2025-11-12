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
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <section className="relative pt-[9rem] pb-[9rem] md:pt-[12rem] md:pb-[12rem]  bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dotted Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <FadeSlideUp className="relative z-10 flex flex-col px-6 mx-auto text-center sm:text-start max-w-7xl">
        <div className="flex flex-col gap-12 lg:gap-0 md:flex-row">
          {/* Left Column - Mobile Application */}
          <div className="flex flex-col justify-between text-center md:text-end lg:pr-8">
            {/* Badge */}
            <div className="flex justify-center mb-3 md:justify-end md:mb-4">
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                {isEN ? "Mobile Application" : "モバイルアプリケーション"}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-4xl drop-shadow-lg">
              {isEN
                ? "Free to use for everyone, always"
                : "誰でも自由に、いつでも使える"}
            </h1>

            {/* Description */}
            <p className="pt-6 pb-6 text-base leading-relaxed md:pt-7 md:pb-7 text-emerald-50 drop-shadow-md lg:text-lg">
              {isEN
                ? "Pixelmine is an innovative social networking system designed to empower users through the decentralization of control and governance. By operating across multiple nodes or servers, it ensures greater user autonomy and fosters a collaborative environment."
                : "Pixelmineは、制御とガバナンスの分散化を通じてユーザーの権限を強化する革新的なソーシャルネットワーキングシステムです。複数のノードやサーバーで動作することで、ユーザーの自律性を高め、協力的な環境を促進します。"}
            </p>

            {/* Download Buttons */}
            <div className="flex items-end justify-center mt-auto md:justify-end">
              <DownloadButtons />
            </div>
          </div>

          {/* Right Column - Storer Engine */}
          <div className="flex flex-col justify-between text-center lg:pl-8 lg:border-l lg:border-white/20 md:text-start">
            {/* Badge */}
            <div className="flex justify-center mb-3 md:justify-start md:mb-4">
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                {isEN ? "Storer Engine" : "ストーラーエンジン"}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-4xl drop-shadow-lg">
              {isEN
                ? "Run and host user data"
                : "ユーザーデータの実行とホスティング"}
            </h2>

            {/* Description */}
            <p className="pt-6 pb-6 text-base leading-relaxed md:pt-7 md:pb-7 text-emerald-50 drop-shadow-md lg:text-lg">
              {isEN
                ? "The Storer engine is a command-line interface application that operates without the need for configuration settings. It acts as a host for a variety of public data sourced from the Pixelmine mobile application, enabling users to access and utilize that data efficiently."
                : "ストーラーエンジンは、設定不要で動作するコマンドラインインターフェースアプリケーションです。Pixelmineモバイルアプリケーションから取得したさまざまな公開データをホストし、ユーザーが効率的にアクセス・活用できるようにします。"}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-3 mt-3 md:flex-row md:mt-5 md:justify-start">
              {isAuthenticated ? (
                <Button variant="modernEmeraldLight" path="/dashboard">
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
                    className="transition-all duration-300 bg-white shadow-xl hover:bg-gray-50 dark:bg-white dark:hover:bg-gray-50 hover:shadow-2xl hover:scale-105"
                    path="/login"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="text-gray-900 transition-all duration-300 ease-in-out size-4"
                    />
                    <span className="text-gray-900 transition-all duration-300 ease-in-out">
                      {isEN ? "Login" : "ログイン"}
                    </span>
                  </Button>

                  <Button
                    variant="modernEmeraldLight"
                    path="/signup"
                    className="text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
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
      </FadeSlideUp>
    </section>
  );
}

export default Hero;
