import { Link } from "react-router-dom";
import { truncateWords } from "../../utils/truncateWords";

function NewsCard({ news, idx }) {
  const isInternal = !!news.slug;
  const url = isInternal ? `/news-events/${news.slug}` : news.link;

  // A wrapper to conditionally use Link or <a>
  const Wrapper = ({ children, className }) =>
    isInternal ? (
      <Link to={url} className={className}>
        {children}
      </Link>
    ) : (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );

  return (
    <div className={`${idx === 0 ? "" : "pt-5"}`}>
      <div className="flex flex-col gap-4 group md:flex-row">
        <Wrapper className="w-full md:w-48 lg:w-48 shrink-0">
          <img
            src={news.img}
            alt={`Preview image for ${news.title}`}
            className="object-cover w-full h-48 transition-all duration-300 ease-in-out rounded md:h-auto group-hover:brightness-75"
          />
        </Wrapper>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-gray-600 text-sm/6 dark:text-stone-50">
              {news.date}
            </p>

            {/* Category usually links internally, so we assume it's always internal */}
            <Link
              to={`/news-events`}
              className="relative z-10 px-3 py-1 text-gray-600 transition-all duration-300 ease-in-out rounded-full bg-gray-50 hover:bg-gray-100 text-sm/6"
            >
              {news.category}
            </Link>
          </div>

          <Wrapper>
            <h2 className="py-2 font-medium transition-all duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-green-400 dark:text-stone-50">
              {news.title}
            </h2>
            <p className="text-gray-500 text-sm/6 dark:text-stone-50">
              {truncateWords(news.preview, 150)}
            </p>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
