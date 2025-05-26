import { Link } from "react-router-dom";
import { truncateWords } from "../../utils/truncateWords";

function NewsCard({ news, idx }) {
  return (
    <div className={`${idx === 0 ? "" : "pt-5"}`}>
      <div className="flex flex-col gap-4 md:flex-row">
        <Link
          to={`news/events/${news.id}`}
          className="w-full md:w-48 lg:w-48 shrink-0"
        >
          <img
            src={news.img}
            alt={`Preview image for ${news.title}`}
            className="object-cover w-full h-48 rounded md:h-auto"
          />
        </Link>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-gray-400 text-sm/6">{news.date}</p>
            <Link
              to={`news-events/${news.category}`}
              className="relative z-10 px-3 py-1 text-gray-600 transition-all duration-300 ease-in-out rounded-full bg-gray-50 hover:bg-gray-100 text-sm/6"
            >
              {news.category}
            </Link>
          </div>
          <h2 className="py-2 font-medium">{news.title}</h2>
          <p className="text-gray-500 text-sm/6">
            {truncateWords(news.preview, 20)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
