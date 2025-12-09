import { Link } from "react-router-dom";
import conceptImg from "../../assets/placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzle,
  faMap,
  faCoins,
  faHandshakeSimple,
  faLightbulbOn,
} from "@fortawesome/pro-solid-svg-icons";
// import designImplementation from "../../assets/design-and-implementation.png";
// import networkIncentives from "../../assets/network-incentives.png";
// import roadmap from "../../assets/roadmap.png";

// Import animation wrapper
import { FadeSlideUp } from "../../animations/AnimatedWrappers";
import { useLanguage } from "../../context/LanguageContext";

export default function Product() {
  const { language } = useLanguage();
  const isEN = language === "en"; // helper

  return (
    <section className="pt-16 pb-16 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
      <FadeSlideUp className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Design & Implementation - Large Card */}

          <div className="relative lg:row-span-2 group">
            <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl dark:bg-stone-800 shadow-gray-900/5 ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="px-8 pt-10 pb-6 sm:px-10 sm:pt-12">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6 lg:justify-start lg:flex-row">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faPuzzle}
                      className="text-white size-5"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {isEN ? "Design & Implementation" : "設計と実装"}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Pixelmine is a distributed social network with no central server, consisting of a mobile app and the Storer engine running on independent nodes.`
                    : `Pixelmineは中央サーバーを持たない分散型ソーシャルネットワークであり、モバイルアプリと独立したノード上で動作するStorerエンジンで構成されています。`}
                </p>

                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `The system relies on four core mechanisms. Discovery allows nodes to find peers through seed nodes, peer exchange, and mDNS. Synchronization uses a gossip protocol to propagate data across the network in 2-3 seconds, with majority voting to resolve conflicts. Routing forwards requests to other peers when data isn't stored locally. Reputation tracking assigns trust scores to prioritize reliable nodes.`
                    : `このシステムは4つの中核メカニズムに依存しています。ディスカバリーにより、ノードはシードノード、ピア交換、mDNSを通じてピアを発見できます。同期はゴシッププロトコルを使用してデータをネットワーク全体に2～3秒で伝播させ、多数決で競合を解決します。ルーティングは、データがローカルに保存されていない場合にリクエストを他のピアに転送します。レピュテーショントラッキングは信頼スコアを割り当て、信頼性の高いノードを優先します`}
                </p>

                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Security is built on post-quantum cryptography including ML-DSA-87, Kyber-1024, and Falcon, with end-to-end encrypted messaging and forward secrecy.`
                    : `セキュリティはML-DSA-87、Kyber-1024、Falconを含む耐量子暗号に基づいて構築されており、エンドツーエンドの暗号化メッセージングと前方秘匿性を備えています。`}
                </p>

                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `The result is a network with no single point of failure that is censorship resistant and keeps data under user control.`
                    : `その結果、単一障害点がなく、検閲耐性があり、データがユーザーの管理下に置かれるネットワークが実現されます。`}
                </p>

                {/* Read More Link */}
                <div className="mt-6 max-lg:text-center">
                  <Link
                    to="design-implementation"
                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {isEN ? "Read More" : "続きを読む"}
                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Concept  */}
          <div className="relative max-lg:row-start-1 group">
            <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl dark:bg-stone-800 shadow-gray-900/5 ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="px-8 py-10 text-center lg:text-start sm:px-10">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6 lg:justify-start lg:flex-row">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faLightbulbOn}
                      className="text-white size-5"
                    />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                    {isEN ? "Concept" : "コンセプト"}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-7 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Traditional social networks operate under centralized control, where a single entity manages user data, establishes regulations, and may alter these parameters without prior notification. Pixelmine adopts an alternative model.`
                    : `従来のソーシャルネットワークは中央集権的な管理の下で運営されており、単一の組織がユーザーデータを管理し、規則を定め、事前通知なしにこれらのパラメータを変更する可能性があります。Pixelmineは代替モデルを採用しています。`}
                </p>
                <p className="text-base leading-7 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `In this system, data is distributed across independent nodes instead of being stored on a central server. Users interact directly, eliminating intermediaries. This design removes single points of failure and centralized control.`
                    : `このシステムでは、データは中央サーバーに保存されるのではなく、独立したノードに分散されます。ユーザーは仲介者を排除して直接やり取りします。この設計により、単一障害点と中央集権的な管理が排除されます。`}
                </p>

                {/* Read More Link */}
                <div className="mt-6 max-lg:text-center">
                  <Link
                    to="concept"
                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {isEN ? "Read More" : "続きを読む"}
                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="relative max-lg:row-start-2 lg:col-start-3 lg:row-start-1 group">
            <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl dark:bg-stone-800 shadow-gray-900/5 ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="px-8 py-10 text-center sm:px-10 lg:text-start">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6 lg:justify-start lg:flex-row">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faMap}
                      className="text-white size-5"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {isEN ? "Roadmap" : "ロードマップ"}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Our strategic roadmap charts the future development of Pixelmine OPC Japan, emphasizing a commitment to cutting-edge technology, meaningful creator empowerment, and a vision for global expansion. This plan highlights our dedication to building advanced solutions that not only push the boundaries of innovation but also provide creators with the tools, support, and opportunities they need...`
                    : `私たちの戦略的ロードマップは、Pixelmine OPC Japanの将来の開発を示し、最先端技術への取り組み、クリエイターの力を引き出す意義、そしてグローバル展開のビジョンを強調しています。この計画は、革新の限界を押し広げるだけでなく、クリエイターに必要なツール、サポート、機会を提供する高度なソリューションを構築することへの私たちの献身を示しています...`}
                </p>

                {/* Read More Link */}
                <div className="mt-6 max-lg:text-center">
                  <Link
                    to="roadmap"
                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {isEN ? "Read More" : "続きを読む"}
                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Network Incentives */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group">
            <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl dark:bg-stone-800 shadow-gray-900/5 ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="px-8 py-10 text-center sm:px-10 lg:text-start">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6 lg:justify-start lg:flex-row">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faCoins}
                      className="text-white size-5"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {isEN ? "Network Incentives" : "ネットワークインセンティブ"}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Activity Points represent the overall activity of a user, which includes actions such as posting content, commenting on posts, messaging, and reacting to content. PXL Points, on the other hand, reflect the quality of a user's activity. While Activity Points increase with every interaction within the app, PXL Points assess the quality of those interactions.`
                    : `アクティビティポイントは、投稿、コメント、メッセージ、リアクションなど、ユーザーの全体的な活動を表します。一方、PXLポイントは、ユーザーの活動の質を反映します。アクティビティポイントはアプリ内のすべての操作で増加しますが、PXLポイントはその操作の質を評価します。`}
                </p>

                {/* Read More Link */}
                <div className="mt-6 max-lg:text-center">
                  <Link
                    to="network-incentives"
                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {isEN ? "Read More" : "続きを読む"}
                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Democratic System */}
          <div className="relative max-lg:row-start-4 lg:col-start-3 lg:row-start-2 group">
            <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl dark:bg-stone-800 shadow-gray-900/5 ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="px-8 py-10 text-center sm:px-10 lg:text-start">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6 lg:justify-start lg:flex-row">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faHandshakeSimple}
                      className="text-white size-5"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {isEN ? "Democratic System" : "民主的システム"}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-6 text-stone-900 dark:text-gray-300 max-lg:text-center">
                  {isEN
                    ? `Pixelmine focuses on user participation, transparency, and the fair distribution of information. By empowering users to express their opinions, Pixelmine facilitates meaningful discussions around social, political, and cultural issues. A key feature of Pixelmine is its commitment to inclusivity. The platform employs algorithms that promote diverse viewpoints instead of just trending content...`
                    : `Pixelmineは、ユーザー参加、透明性、情報の公正な分配に重点を置いています。ユーザーが意見を表現できるようにすることで、Pixelmineは社会的、政治的、文化的な問題についての意味のある議論を促進します。Pixelmineの重要な特徴は、包括性への取り組みです。プラットフォームは、単にトレンドコンテンツに頼るのではなく、多様な視点を促進するアルゴリズムを採用しています...`}
                </p>

                {/* Read More Link */}
                <div className="mt-6 max-lg:text-center">
                  <Link
                    to="democratic-system"
                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {isEN ? "Read More" : "続きを読む"}
                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeSlideUp>
    </section>
  );
}
