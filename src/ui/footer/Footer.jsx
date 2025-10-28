import { Link } from "react-router-dom";
import DownloadButtons from "../hero/DownloadButtons";
import { useLanguage } from "../../context/LanguageContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/pro-solid-svg-icons";

const company = [
  { name: "About Us", translatedName: "会社概要", path: "about-us" },
  { name: "Contact Us", translatedName: "お問い合わせ", path: "contact-us" },
  { name: "Careers", translatedName: "採用情報", path: "careers" },
  {
    name: "News & Events",
    translatedName: "ニュース・イベント",
    path: "news-events",
  },
];

const products = [
  { name: "Concept", translatedName: "コンセプト", path: "concept" },
  {
    name: "Design & Implementation",
    translatedName: "設計と実装",
    path: "design-implementation",
  },
  {
    name: "Network Incentives",
    translatedName: "ネットワークインセンティブ",
    path: "network-incentives",
  },
  {
    name: "Democratic System",
    translatedName: "民主的システム",
    path: "democratic-system",
  },
  { name: "Roadmap", translatedName: "ロードマップ", path: "roadmap" },
];

function Footer() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <footer className="px-0 py-10 bg-white border-t border-gray-150 dark:bg-stone-900 dark:border-none">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:max-w-7xl lg:px-8">
        {/* Column 1: Brand & Description */}
        <div className="sm:col-span-4 xl:col-span-2">
          <h3 className="mb-4 text-xl font-bold">
            <img className="w-40" src="/logo.png" alt="Pixelmine Logo" />
          </h3>
          <p className="text-stone-900 text-base/6 w-auto lg:w-[30rem] dark:text-stone-50">
            {isEN
              ? "Pixelmine is a social networking system that enhances user empowerment by decentralizing control and governance across multiple nodes or servers."
              : "Pixelmineは、複数のノードやサーバーにおける制御とガバナンスを分散化することで、ユーザーのエンパワーメントを向上させるソーシャルネットワーキングシステムです。"}
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-stone-900 size-4 dark:text-stone-50"
              />
              <p className="text-base leading-loose text-stone-900 dark:text-stone-50">
                1-27-8 Higashi-Azabu, Minato-ku, Tokyo 106-0044, Japan
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-stone-900 size-4 dark:text-stone-50"
              />
              <p className="text-base text-stone-900 dark:text-stone-50">
                pixie@pixelmine.org
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-stone-900 size-4 dark:text-stone-50"
              />
              <p className="text-base text-stone-900 dark:text-stone-50">
                +81-3-6401-4100
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            {isEN ? "Company" : "会社"}
          </h4>
          <ul className="space-y-2 text-base text-stone-900">
            {company.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-base transition-all duration-300 ease-in-out text-stone-900 hover:text-primary dark:text-stone-50 dark:hover:text-green-400"
                >
                  {isEN ? item.name : item.translatedName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Product */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            {isEN ? "Product" : "製品"}
          </h4>
          <ul className="space-y-2 text-base text-stone-900">
            {products.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-base transition-all duration-300 ease-in-out text-stone-900 hover:text-primary dark:text-stone-50 dark:hover:text-green-400"
                >
                  {isEN ? item.name : item.translatedName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social / Downloads */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            {isEN ? "Download Now" : "今すぐダウンロード"}
          </h4>
          <div className="flex space-x-4">
            <DownloadButtons direction="col" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col justify-between gap-3 px-6 mx-auto mt-10 text-base text-gray-500 lg:px-8 lg:flex-row max-w-7xl dark:text-stone-50">
        <div>
          &copy; {new Date().getFullYear()} Pixelmine.{" "}
          {isEN ? "All rights reserved." : "全著作権所有。"}
        </div>

        <ul className="flex flex-col gap-3 lg:divide-x md:flex-row">
          <li className="pr-3 ">
            <a
              href="/sitemap.xml"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              {isEN ? "Sitemap" : "サイトマップ"}
            </a>
          </li>
          <li className="lg:px-3">
            <Link
              to="terms-and-conditions"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              {isEN ? "Terms of Service" : "利用規約"}
            </Link>
          </li>
          <li className="lg:px-3">
            <Link
              to="child-sexual-abuse-policy"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              {isEN ? "Child Sexual Abuse Policy" : "児童性的虐待ポリシー"}
            </Link>
          </li>
          <li className="lg:px-3">
            <Link
              to="privacy-policy"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              {isEN ? "Privacy Policy" : "プライバシーポリシー"}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
