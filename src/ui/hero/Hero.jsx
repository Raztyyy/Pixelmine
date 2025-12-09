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
        {/* Top Highlight Section */}
        <div className="relative z-10 px-6 mx-auto mb-12 text-center max-w-7xl text-emerald-50">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-4xl drop-shadow-lg">
            {isEN
              ? "A decentralized social network architecture without a central server"
              : "中央サーバーを持たない分散型ソーシャルネットワークアーキテクチャ。"}
          </h1>

          <p className="mt-4 text-base leading-relaxed md:text-lg">
            {isEN
              ? "Pixelmine distributes your data across a network of independent nodes rather than confining it to a corporate data center. There is no single point of failure and no centralized control. Your posts and your connections remain distributed and resilient."
              : "Pixelmineは、あなたのデータを企業のデータセンターに閉じ込めるのではなく、独立したノードのネットワーク全体に分散させます。単一障害点も中央集権的な管理も存在しません。あなたの投稿やつながりは分散され、耐障害性を持ち続けます。"}
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-0 md:flex-row">
          {/* Left Column - Mobile Application */}
          <div className="flex flex-col justify-between flex-1 text-center md:text-end lg:pr-8">
            {/* Badge */}
            <div className="flex justify-center mb-3 md:justify-end md:mb-4">
              <span className="inline-flex items-center px-4 py-1.5 text-base font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                {isEN ? "Mobile Application" : "モバイルアプリケーション"}
              </span>
            </div>

            {/* Description */}
            <p className="pt-6 pb-6 text-base leading-relaxed md:pt-2 md:pb-7 text-emerald-50 drop-shadow-md lg:text-lg">
              {isEN
                ? "The mobile application serves as a gateway to the network, enabling users to create accounts, post content, and connect with others. User data is distributed across multiple independent nodes rather than being confined to a single company's servers. As a result, if one node fails, content remains accessible throughout the network, thereby enhancing reliability."
                : "モバイルアプリケーションはネットワークへのゲートウェイとして機能し、ユーザーがアカウントを作成し、コンテンツを投稿し、他のユーザーとつながることを可能にします。ユーザーデータは単一企業のサーバーに閉じ込められるのではなく、複数の独立したノードに分散されます。その結果、1つのノードに障害が発生しても、コンテンツはネットワーク全体でアクセス可能なままとなり、信頼性が向上します。"}
            </p>

            {/* Download Buttons */}
            <div className="flex items-end justify-center mt-auto md:justify-end">
              <DownloadButtons />
            </div>
          </div>

          {/* Right Column - Storer Engine */}
          <div className="flex flex-col justify-between flex-1 gap-0 text-center lg:pl-8 lg:border-l lg:border-white/20 md:text-start">
            {/* Badge */}
            <div className="flex justify-center mb-3 md:justify-start md:mb-4">
              <span className="inline-flex items-center px-4 py-1.5 text-base font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                {isEN ? "The Storer Engine" : "Storerエンジン"}
              </span>
            </div>

            {/* Description */}
            <p className="pt-6 pb-6 text-base leading-relaxed md:pt-2 md:pb-7 text-emerald-50 drop-shadow-md lg:text-lg">
              {isEN
                ? "This lightweight command-line interface (CLI) enables any machine to function as a network node. Storer synchronizes and serves public data from Pixelmine users without requiring configuration. By operating Storer, users contribute bandwidth and storage resources to support network sustainability."
                : "この軽量なコマンドラインインターフェース（CLI）により、あらゆるマシンがネットワークノードとして機能できます。Storerは設定不要でPixelmineユーザーの公開データを同期・配信します。Storerを運用することで、ユーザーは帯域幅とストレージリソースを提供し、ネットワークの持続可能性に貢献します。"}
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
