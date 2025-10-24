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
    // bg-green-50/50
    <section className="pt-[4rem] pb-[4rem]  dark:bg-stone-800">
      <FadeSlideUp className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Concept */}
          <div className="relative lg:row-span-2">
            <div className="absolute bg-white rounded-lg lg:rounded-l-[2rem] inset-1 dark:bg-stone-500/20"></div>

            <div className="relative  flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem] shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faLightbulbOn}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    {isEN ? "Concept" : "コンセプト"}
                  </p>
                </div>
                <p className="mt-5 mb-2 text-base/6 text-stone-900 max-lg:text-center dark:text-stone-50 leading-[1.5rem]">
                  {isEN
                    ? `The idea behind Pixelmine is to create a platform that empowers users by removing the need for a central authority or server to control user data and interactions. Instead, these platforms distribute information across interconnected nodes, allowing users to communicate directly with one another without intermediaries. The following are essential factors to consider in order to fully comprehend the concept of the system.`
                    : `Pixelmineの背後にあるアイデアは、中央の権限やサーバーによってユーザーデータや操作が制御される必要を排除することで、ユーザーに力を与えるプラットフォームを作ることです。代わりに、これらのプラットフォームは情報を相互接続されたノードに分散させ、ユーザー同士が仲介者なしで直接コミュニケーションできるようにします。システムのコンセプトを完全に理解するためには、以下の要点を考慮することが重要です。`}
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="concept"
                    className="font-medium transition-all duration-300 ease-in-out text-base/6 text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    {isEN ? "Read More" : "続きを読む"}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full px-5 py-5 lg:mt-10">
                <div className="overflow-hidden ">
                  {/* <img
                    className="object-cover object-top w-full h-full rounded-xl"
                    src={conceptImg}
                    alt="Concept Img"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Design & Implementation */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute bg-white rounded-lg inset-1 max-lg:rounded-t-3xl dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow max-lg:rounded-t-3xl ring-1 ring-black/5 dark:ring-stone-600 ">
              <div className="px-8 py-8 text-center lg:text-start sm:px-10 sm:pt-10">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faPuzzle}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    {isEN ? "Design & Implementation" : "設計と実装"}
                  </p>
                </div>
                <p className="mt-5 mb-2 text-base/6 text-stone-900 max-lg:text-center dark:text-stone-50 leading-[1.5rem]">
                  {isEN
                    ? `The network is built around three primary components: the User, the Storer, and the PXL Server. The User is any individual who interacts with the SNS mobile application, engaging with content, sharing media, and participating in the platform’s social features. The Storer serves as a decentralized node tasked with securely storing encrypted data, such as user-generated content and metadata...`
                    : `ネットワークは、ユーザー、ストアラー、およびPXLサーバーという3つの主要コンポーネントを中心に構築されています。ユーザーとは、SNSモバイルアプリとやり取りし、コンテンツに参加し、メディアを共有し、プラットフォームのソーシャル機能に参加する個人を指します。ストアラーは、ユーザー生成コンテンツやメタデータなどの暗号化されたデータを安全に保存する分散型ノードとして機能します...`}
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="design-implementation"
                    className="font-medium transition-all duration-300 ease-in-out text-base/6 text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    {isEN ? "Read More" : "続きを読む"}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-1 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={designImplementation}
                  alt="Design and Implementation Image"
                />
              </div> */}
            </div>
          </div>

          {/* Network Incentives */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    {isEN ? "Network Incentives" : "ネットワークインセンティブ"}
                  </p>
                </div>
                <p className="mt-5 mb-2 text-base/6 text-stone-900 max-lg:text-center dark:text-stone-50 leading-[1.5rem]">
                  {isEN
                    ? `Activity Points represent the overall activity of a user, which includes actions such as posting content, commenting on posts, messaging, and reacting to content. PXL Points, on the other hand, reflect the quality of a user’s activity. While Activity Points increase with every interaction within the app, PXL Points assess the quality of those interactions.`
                    : `アクティビティポイントは、投稿、コメント、メッセージ、リアクションなど、ユーザーの全体的な活動を表します。一方、PXLポイントは、ユーザーの活動の質を反映します。アクティビティポイントはアプリ内のすべての操作で増加しますが、PXLポイントはその操作の質を評価します。`}
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="network-incentives"
                    className="font-medium transition-all duration-300 ease-in-out text-base/6 text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    {isEN ? "Read More" : "続きを読む"}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Democratic System */}
          <div className="relative max-lg:row-start-4 lg:col-start-3 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20 dark:text-stone-50"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faHandshakeSimple}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    {isEN ? "Democratic System" : "民主的システム"}
                  </p>
                </div>
                <p className="mt-5 mb-2 text-base/6 text-stone-900 max-lg:text-center dark:text-stone-50 leading-[1.5rem]">
                  {isEN
                    ? `Pixelmine focuses on user participation, transparency, and the fair distribution of information. By empowering users to express their opinions, Pixelmine facilitates meaningful discussions around social, political, and cultural issues. A key feature of Pixelmine is its commitment to inclusivity. The platform employs algorithms that promote diverse viewpoints instead of just trending content...`
                    : `Pixelmineは、ユーザー参加、透明性、情報の公正な分配に重点を置いています。ユーザーが意見を表現できるようにすることで、Pixelmineは社会的、政治的、文化的な問題についての意味のある議論を促進します。Pixelmineの重要な特徴は、包括性への取り組みです。プラットフォームは、単にトレンドコンテンツに頼るのではなく、多様な視点を促進するアルゴリズムを採用しています...`}
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="democratic-system"
                    className="font-medium transition-all duration-300 ease-in-out text-base/6 text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    {isEN ? "Read More" : "続きを読む"}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="relative max-lg:row-start-2 lg:col-start-3 lg:row-start-1">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faMap}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    {isEN ? "Roadmap" : "ロードマップ"}
                  </p>
                </div>
                <p className="mt-5 mb-2 text-base/6 text-stone-900 max-lg:text-center dark:text-stone-50 leading-[1.5rem]">
                  {isEN
                    ? `Our strategic roadmap charts the future development of Pixelmine OPC Japan, emphasizing a commitment to cutting-edge technology, meaningful creator empowerment, and a vision for global expansion. This plan highlights our dedication to building advanced solutions that not only push the boundaries of innovation but also provide creators with the tools, support, and opportunities they need...`
                    : `私たちの戦略的ロードマップは、Pixelmine OPC Japanの将来の開発を示し、最先端技術への取り組み、クリエイターの力を引き出す意義、そしてグローバル展開のビジョンを強調しています。この計画は、革新の限界を押し広げるだけでなく、クリエイターに必要なツール、サポート、機会を提供する高度なソリューションを構築することへの私たちの献身を示しています...`}
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="roadmap"
                    className="font-medium transition-all duration-300 ease-in-out text-base/6 text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    {isEN ? "Read More" : "続きを読む"}{" "}
                    <span aria-hidden="true">&rarr;</span>
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
