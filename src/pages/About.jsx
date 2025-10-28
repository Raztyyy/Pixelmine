import BioCard from "../ui/about/BioCard";
import SEOHelmet from "../ui/SEOHelmet";
import { FadeSlideUp, StaggerContainer } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";

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

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "About Us | Pixelmine Japan OPC"
            : "会社概要 | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Learn more about Pixelmine Japan OPC — our mission, team, and commitment to building a transparent, fair, and decentralized social network."
            : "Pixelmine Japan OPCの使命、チーム、そして透明性・公平性・分散型ソーシャルネットワーク構築への取り組みについてご紹介します。"
        }
        url="https://www.pixelmine.org/about-us"
        image="/social-sharing.jpg"
      />

      <section className="pt-[3rem] pb-[6rem] sm:pb-[4rem]">
        {/* Hero Section */}
        <FadeSlideUp className="flex flex-col items-center p-6 mx-auto text-center max-w-7xl">
          <h1 className="text-lg font-medium uppercase dark:text-stone-50">
            {language === "en" ? "About Us" : "会社概要"}
          </h1>
          <hr className="mx-auto mt-2 mb-4 border-b-4 w-14 border-primary dark:border-green-400" />
        </FadeSlideUp>

        {/* Content */}
        <div className="flex flex-col gap-10 p-6 mx-auto max-w-7xl">
          <FadeSlideUp className="flex-1 text-center lg:text-start">
            <h2 className="text-3xl font-medium dark:text-stone-50">
              {language === "en"
                ? "About Pixelmine Japan"
                : "Pixelmine Japanについて"}
            </h2>

            <p className="mt-4 text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "Pixelmine Japan was established in 2021 with the objective of transforming social networking through decentralization. In response to the increasing concerns surrounding data privacy and centralized control, the founders sought to develop a platform that enables users to retain ownership of their data while engaging in a transparent and secure environment."
                : "Pixelmine Japanは2021年に設立され、分散化を通じてソーシャルネットワーキングを変革することを目的としています。データプライバシーや中央集権的な管理への懸念が高まる中、創業者たちはユーザーが自らのデータを所有し、透明かつ安全な環境で交流できるプラットフォームの開発を目指しました。"}
            </p>

            <p className="mt-4 text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "The company broadened its offerings to encompass a variety of tools for creators, including customizable profiles and enhanced engagement metrics. Embracing a community-driven approach, Pixelmine consistently solicits feedback from users and implements modifications based on their suggestions. The platform is dedicated to the principles of user empowerment, privacy, and transparency, thereby establishing new benchmarks for the operation of social networks in the digital era."
                : "同社は、クリエイター向けのカスタマイズ可能なプロフィールや高度なエンゲージメント分析ツールなど、幅広い機能を提供しています。コミュニティ主導のアプローチを採用し、常にユーザーからのフィードバックを反映させています。ユーザー主導・プライバシー尊重・透明性を重視することで、デジタル時代の新たなソーシャルネットワークの基準を確立しています。"}
            </p>

            <p className="mt-4 text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "Through its unwavering commitment to innovation and community engagement, Pixelmine aspires to redefine the social media landscape for the foreseeable future."
                : "Pixelmineは、革新とコミュニティとの協働を通じて、これからのソーシャルメディアのあり方を再定義することを目指しています。"}
            </p>
          </FadeSlideUp>

          {/* Team Section */}
          <div className="flex-1">
            <StaggerContainer className="flex flex-col gap-16 mt-10 lg:gap-28 lg:flex-row">
              {teamMember.map((member) => (
                <BioCard
                  key={member.name}
                  memberDetails={{
                    ...member,
                    title: language === "en" ? member.title : member.title_jp,
                    bio: language === "en" ? member.bio : member.bio_jp,
                  }}
                />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
