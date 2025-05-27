import Hero from "../ui/hero/Hero";
import NewsUpdates from "../ui/news/NewsUpdates";
import Newsletter from "../ui/newsletter/Newsletter";
import Product from "../ui/product/Product";
import StorerEngine from "../ui/storer/StorerEngine";

function Overview() {
  return (
    <>
      <Hero />
      <StorerEngine />
      <Product />
      <NewsUpdates />
      <Newsletter />
    </>
  );
}

export default Overview;
