import BioCard from "../ui/about/BioCard";
import SEOHelmet from "../ui/SEOHelmet";
import { FadeSlideUp, StaggerContainer } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faRocket,
} from "@fortawesome/pro-solid-svg-icons";

const teamMember = [
  {
    name: "Yutaro Sodei",
    image: "/team/yutaro-sodei-img.jpg",
    title: "Engineer / CEO / Lead Developer of Pixelmine",
    title_jp: "エンジニア / 代表取締役 / Pixelmineリード開発者",
    bio: "Born in 1995. Yutaro Sodei is the lead developer of Pixelmine SNS, a decentralized social platform built on the principle of data freedom. The project aims to eliminate dependence on personal information and make big data openly accessible to everyone. He holds an international PCT patent for a peer-to-peer communication protocol and a real-world-integrated advertising system that returns over 90% of ad revenue directly to users. In addition to Pixelmine SNS, he is also developing various applications—including those that enable matching across different industries and apps with built-in tipping features—exploring new, user-driven economic ecosystems. Leveraging blockchain technology, he is working to build a transparent and sustainable digital infrastructure through cross-sector innovation. Previously, he supported the digital transformation and e-commerce strategy of a publicly listed apparel brand, contributing through both technical execution and business insight. From full-stack development to business design and team management, Sodei is committed to creating next-generation services centered around freedom, transparency, and efficiency.",
    bio_jp:
      "1995年生まれ。Pixelmine SNSのリード開発者として、データの自由を理念とした分散型ソーシャルプラットフォームを構築。個人情報への依存を排除し、ビッグデータを誰もが利用できる環境を目指す。ピアツーピア通信技術および広告収益の90%以上をユーザーに還元する実社会連動型広告システムに関して国際PCT特許を保有。Pixelmine SNSのほか、異業種マッチングや投げ銭機能を備えたアプリなど、ユーザー主導の新しい経済圏を創出するためのアプリ開発を進めている。ブロックチェーン技術を活用し、透明で持続可能なデジタル基盤を構築。上場アパレル企業にてDXおよびEC戦略を支援した経験を持ち、技術・ビジネスの両面から貢献。フルスタック開発からビジネス設計、チーム運営まで、自由・透明性・効率性を中心とした次世代サービスの創出に尽力している。",
  },
  {
    name: "Kai Sumiya",
    image: "/team/kai-sumiya-img.jpg",
    title: "Entrepreneur / Investor / Co-Founder of Pixelmine",
    title_jp: "起業家 / 投資家 / Pixelmine共同創設者",
    bio: "Born in 1995. Questioning the conventional structures of advertising and data, Kai co-founded the decentralized social platform Pixelmine SNS with developer Yutaro Sodei. Kai has led various ventures including real estate, IT consulting, custom system development, nano-coating technologies, the management of a group of four restaurants, and licensing businesses. He excels in team building and oversees internal operations at Pixelmine, leveraging his broad expertise in finance and legal affairs. Through Pixelmine, Kai is taking on the challenge of redefining the internet society.",
    bio_jp:
      "1995年生まれ。広告とデータの既存構造に疑問を抱き、開発者の曽根優太郎とともに分散型ソーシャルプラットフォーム「Pixelmine SNS」を共同設立。不動産事業、ITコンサルティング、システム開発、ナノコーティング技術、4店舗の飲食店経営、ライセンス事業など多岐にわたる事業を展開。チームビルディングに優れ、Pixelmineでは財務・法務を中心に社内統括を担当。幅広い経営経験を生かし、インターネット社会の再定義に挑戦している。",
  },
];

function About() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "About Us | Pixelmine Japan OPC"
            : "会社概要 | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Learn more about Pixelmine Japan OPC — our mission, team, and commitment to building a transparent, fair, and decentralized social network."
            : "Pixelmine Japan OPCの使命、チーム、そして透明性・公平性・分散型ソーシャルネットワーク構築への取り組みについてご紹介します。"
        }
        url="https://www.pixelmine.org/about-us"
        image="/social-sharing.jpg"
      />

      {/* Hero Section - Matching Hero Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
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
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <FadeSlideUp className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              {isEN ? "About Us" : "会社概要"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isEN ? "Pixelmine Japan" : "Pixelmine Japan"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
            {isEN
              ? "Transforming social networking through decentralization since 2021"
              : "2021年より分散化を通じてソーシャルネットワーキングを変革"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section - White Background */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="p-6 mx-auto max-w-7xl">
          {/* Company Story */}
          <FadeSlideUp>
            <div className="mb-16">
              {/* Icon Header */}

              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="text-white size-7"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {isEN ? "Our Story" : "私たちのストーリー"}
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-center text-gray-700 dark:text-gray-300">
                <p>
                  {isEN
                    ? "Pixelmine Japan was established in 2021 with the objective of transforming social networking through decentralization. In response to the increasing concerns surrounding data privacy and centralized control, the founders sought to develop a platform that enables users to retain ownership of their data while engaging in a transparent and secure environment."
                    : "Pixelmine Japanは2021年に設立され、分散化を通じてソーシャルネットワーキングを変革することを目的としています。データプライバシーや中央集権的な管理への懸念が高まる中、創業者たちはユーザーが自らのデータを所有し、透明かつ安全な環境で交流できるプラットフォームの開発を目指しました。"}
                </p>

                <p>
                  {isEN
                    ? "The company broadened its offerings to encompass a variety of tools for creators, including customizable profiles and enhanced engagement metrics. Embracing a community-driven approach, Pixelmine consistently solicits feedback from users and implements modifications based on their suggestions. The platform is dedicated to the principles of user empowerment, privacy, and transparency, thereby establishing new benchmarks for the operation of social networks in the digital era."
                    : "同社は、クリエイター向けのカスタマイズ可能なプロフィールや高度なエンゲージメント分析ツールなど、幅広い機能を提供しています。コミュニティ主導のアプローチを採用し、常にユーザーからのフィードバックを反映させています。ユーザー主導・プライバシー尊重・透明性を重視することで、デジタル時代の新たなソーシャルネットワークの基準を確立しています。"}
                </p>

                <p className="font-medium">
                  {isEN
                    ? "Through its unwavering commitment to innovation and community engagement, Pixelmine aspires to redefine the social media landscape for the foreseeable future."
                    : "Pixelmineは、革新とコミュニティとの協働を通じて、これからのソーシャルメディアのあり方を再定義することを目指しています。"}
                </p>
              </div>
            </div>
          </FadeSlideUp>

          {/* Team Section Divider */}
          <div className="mb-16">
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center justify-center shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
                <FontAwesomeIcon icon={faUsers} className="text-white size-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isEN ? "Meet Our Team" : "チームメンバー"}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards - Full Width Container */}
        <div className="px-6 mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {teamMember.map((member) => (
              <BioCard
                key={member.name}
                memberDetails={{
                  ...member,
                  title: isEN ? member.title : member.title_jp,
                  bio: isEN ? member.bio : member.bio_jp,
                }}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

export default About;
