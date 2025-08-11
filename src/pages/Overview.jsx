import Hero from "../ui/hero/Hero";
import NewsUpdates from "../ui/news/NewsUpdates";
import Newsletter from "../features/newsletter/Newsletter";
import Product from "../ui/product/Product";
import SEOHelmet from "../ui/SEOHelmet";
import StorerEngine from "../ui/storer/StorerEngine";

import AnimatedSection from "../animations/AnimatedSection";

function Overview() {
  return (
    <>
      <SEOHelmet
        title="Overview | Pixelmine Japan OPC"
        description="Discover Pixelmine Japan OPC — empowering decentralized social networking with transparency, fairness, and user control."
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <Hero />
      <StorerEngine />
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
