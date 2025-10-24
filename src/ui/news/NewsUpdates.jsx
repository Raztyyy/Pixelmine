import Featured from "./Featured";
import NewsCard from "./NewsCard";
import Button from "../Button";

import { newsData } from "../../data/news/newsData";

// Import animation wrapper
import { FadeSlideUp } from "../../animations/AnimatedWrappers";
import { useLanguage } from "../../context/LanguageContext";

function NewsUpdates() {
  const { language } = useLanguage();
  const isEN = language === "en"; // helper

  const otherNews = newsData.filter((news) => news.isFeatured !== true);

  return (
    <section className="pt-[2rem] pb-[2rem] dark:bg-stone-800">
      <FadeSlideUp className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem] dark:text-stone-50">
          {isEN ? "News and Events" : "ニュースとイベント"}
        </h2>
        <p className="pt-5 pb-8 text-base/6 text-stone-900 dark:text-stone-50">
          {isEN
            ? "Updates, news and trends in Pixelmine research and developements."
            : "Pixelmineの研究開発に関する更新、ニュース、トレンド情報。"}
        </p>
        <div className="flex flex-col gap-7 lg:flex-row">
          <Featured />
          {otherNews.length > 0 && (
            <div className="w-full lg:flex-1">
              <div className="flex flex-col space-y-5 divide-y">
                {otherNews.map((item, idx) => (
                  <NewsCard news={item} key={item.title} idx={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center pt-10 md:justify-end">
          <Button variant="primary" path="news-events">
            {isEN ? "More Articles" : "さらに記事を見る"}{" "}
            <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </FadeSlideUp>
    </section>
  );
}

export default NewsUpdates;
