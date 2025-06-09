import { Link, useParams } from "react-router-dom";
import SEOHelmet from "../ui/SEOHelmet";

import { truncateWords } from "../utils/truncateWords";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

import { newsData } from "../data/news/newsData";
import { socialData } from "../data/socials/socialData";
import { useMoveBack } from "../hooks/useMoveBack";

function NewsDetails() {
  const { news_slug } = useParams();
  const selectedNews = newsData.find((news) => news.slug === news_slug);

  // Limit the posts by changing the slice count
  const recentPosts = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <SEOHelmet
        title={`${selectedNews.title} | Pixelmine Japan OPC`}
        description={selectedNews.preview}
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]">
        <div className="flex flex-col-reverse gap-10 p-6 mx-auto max-w-7xl lg:flex-row ">
          <div className="flex-[2]">
            <button
              className="flex items-center justify-center text-lg text-gray-500 transition-all duration-300 ease-in-out group hover:text-primary"
              onClick={useMoveBack()}
            >
              <span className="flex items-center justify-center mr-1">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="text-gray-500 transition-all duration-300 ease-in-out size-5 group-hover:text-primary"
                />
              </span>
              Go Back
            </button>
            <h1 className="mt-5 mb-5 text-3xl font-bold leading-tight lg:text-4xl">
              Pixelmine News & Events
            </h1>
            {/* News & Events */}
            <div className="group">
              <img
                src={selectedNews.img}
                alt={`${selectedNews.title} Image`}
                className="object-cover object-center w-full rounded-lg h-72 md:h-96"
              />
              <div className="flex flex-col items-start">
                <h2 className="mt-3 text-xl font-semibold ">
                  {selectedNews.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  By {selectedNews.author} - {selectedNews.date}
                </p>
                <p className="my-3 text-sm font-normal rounded-lg  bg-green-100 text-green-800 px-2.5 py-0.5">
                  {selectedNews.category}
                </p>
                <p className="text-gray-600 text-sm/6">
                  {selectedNews.content}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:mt-16 lg:block">
            {/* Follow Us */}
            <div className="hidden mt-8 lg:block">
              <h2 className="mb-4 text-xl leading-tight">Follow Us</h2>
              <div className="flex gap-4">
                {socialData.map((social) => {
                  return (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social.social_platform}
                      className="flex items-center justify-center w-8 h-8 transition-all duration-300 ease-in-out rounded-full bg-primary hover:bg-primary/80"
                    >
                      <FontAwesomeIcon
                        icon={social.icons}
                        className="text-white size-4"
                      />
                      <span className="sr-only">{social.social_platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="hidden mt-8 lg:block">
              <h2 className="mb-4 text-xl leading-tight">Recent Posts</h2>
              <div className="flex flex-col gap-4">
                {recentPosts.map((news) => {
                  if (selectedNews.id === news.id) return null;

                  const postContent = (
                    <div className="flex flex-row gap-2 group" key={news.id}>
                      <img
                        src={news.img}
                        alt={`${news.title} Image`}
                        className="object-cover w-32 h-24 rounded-md"
                      />
                      <div>
                        <p className="text-xs font-semibold transition-all duration-300 ease-in-out group-hover:text-primary">
                          {news.title}
                        </p>
                        <p className="mt-2 text-xs text-gray-600">
                          {truncateWords(news.preview, 90)}
                        </p>
                      </div>
                    </div>
                  );

                  return news.slug ? (
                    <Link to={`/news-events/${news.slug}`} key={news.id}>
                      {postContent}
                    </Link>
                  ) : news.link ? (
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={news.id}
                    >
                      {postContent}
                    </a>
                  ) : (
                    <div key={news.id}>{postContent}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsDetails;
