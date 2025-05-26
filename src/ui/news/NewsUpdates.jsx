import Featured from "./Featured";
import placeholder from "../../assets/placeholder.png";
import NewsCard from "./NewsCard";
import Button from "../Button";

const news = [
  {
    id: "001",
    title: "Best conversion rate",
    date: "April 7, 2025",
    category: "Event",
    preview:
      "The fundamental idea is similar to that of other decentralized systems. It entails distributing authority, control, and decision-making among various nodes rather than concentrating them in a single central entity.",
    img: placeholder,
  },
  {
    id: "002",
    title: "Launch of Pixelmine 2.0",
    date: "May 20, 2025",
    category: "Announcement",
    preview:
      "Pixelmine 2.0 introduces a completely redesigned interface, new collaborative tools, and faster decentralized protocols, marking a major leap in our mission to build the next-generation social web.",
    img: placeholder,
  },
];

function NewsUpdates() {
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]">
      <div className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem]">
          News and Events
        </h2>
        <p className="pt-5 pb-8 text-gray-600 text-sm/6">
          Updates, news and trends in Pixelmine research and developements.
        </p>
        <div className="flex flex-col gap-7 lg:flex-row">
          <Featured />
          <div className="w-full lg:flex-1">
            <div className="flex flex-col space-y-5 divide-y">
              {news.map((item, idx) => (
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
