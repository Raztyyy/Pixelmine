import { Link } from "react-router-dom";
import { newsData } from "../../data/news/newsData";

function Featured() {
  const featuredNews = newsData.find((news) => news.isFeatured === true);

  if (!featuredNews) {
    return null;
  }

  const isInternal = !!featuredNews.slug;
  const url = isInternal
    ? `/news-events/${featuredNews.slug}`
    : featuredNews.link;

  const Wrapper = ({ children }) =>
    isInternal ? (
      <Link to={url}>{children}</Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );

  return (
    <div className="w-full group lg:flex-1">
      <div>
        <Wrapper>
          <img
            className="object-cover object-left w-full h-48 transition-all duration-300 ease-in-out rounded md:h-auto group-hover:brightness-75"
            src={featuredNews.img}
            alt="Featured Image"
          />
        </Wrapper>
      </div>
      <div className="flex flex-col gap-2 py-3 text-sl">
        <Wrapper>
          <h2 className="font-medium transition-all duration-300 ease-in-out group-hover:text-primary">
            {featuredNews.title}
          </h2>
        </Wrapper>

        <div className="flex items-center gap-3">
          <p className="text-gray-600 text-sm/6">{featuredNews.date}</p>
          <Link
            to={`/news-events/${featuredNews.category}`}
            className="relative z-10 px-3 py-1 text-gray-600 transition-all duration-300 ease-in-out rounded-full bg-gray-50 hover:bg-gray-100 text-sm/6"
          >
            {featuredNews.category}
          </Link>
        </div>

        <p className="mt-2 mb-2 text-gray-500 max-w-auto text-sm/6">
          {featuredNews.preview}
        </p>
      </div>
    </div>
  );
}

export default Featured;
