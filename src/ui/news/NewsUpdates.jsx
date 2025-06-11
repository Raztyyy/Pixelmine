import Featured from "./Featured";
import NewsCard from "./NewsCard";
import Button from "../Button";

import { newsData } from "../../data/news/newsData";

function NewsUpdates() {
  const otherNews = newsData.filter((news) => news.isFeatured !== true);

  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem] dark:bg-stone-800">
      <div className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem] dark:text-stone-50">
          News and Events
        </h2>
        <p className="pt-5 pb-8 text-gray-600 text-sm/6 dark:text-stone-50">
          Updates, news and trends in Pixelmine research and developements.
        </p>
        <div className="flex flex-col gap-7 lg:flex-row">
          <Featured />
          <div className="w-full lg:flex-1">
            <div className="flex flex-col space-y-5 divide-y">
              {otherNews.map((item, idx) => (
                <NewsCard news={item} key={item.title} idx={idx} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10 md:justify-end">
          <Button variant="primary" path="news-events">
            More Articles <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;
