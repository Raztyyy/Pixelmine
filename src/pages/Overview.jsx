import Hero from "../ui/hero/Hero";
import NewsUpdates from "../ui/news/NewsUpdates";
import Newsletter from "../features/newsletter/Newsletter";
import Product from "../ui/product/Product";
import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";
// import StorerEngine from "../ui/storer/StorerEngine";

function Overview() {
  const { language } = useLanguage();
  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Overview | Pixelmine Japan OPC"
            : "概要 | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Discover Pixelmine Japan OPC — empowering decentralized social networking with transparency, fairness, and user control."
            : "ピクセルマインジャパンOPCについてご紹介します。透明性、公平性、ユーザーのコントロールを重視した分散型ソーシャルネットワークを推進しています。"
        }
        url="https://www.pixelmine.org/overview"
        image="/social-sharing.jpg"
      />

      <Hero />
      <Product />
      <NewsUpdates />
      <Newsletter />

      {/* <Hero />
      <StorerEngine />
      <Product />
      <NewsUpdates />
      <Newsletter /> */}
    </>
  );
}

export default Overview;
