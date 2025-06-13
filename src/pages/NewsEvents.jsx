import SEOHelmet from "../ui/SEOHelmet";
import { useState } from "react";
import { truncateWords } from "../utils/truncateWords";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";

import { newsData } from "../data/news/newsData";
import { socialData } from "../data/socials/socialData";

function NewsEvents() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = () => {
    setSearchTerm(searchInput);
    console.log(searchInput);
  };

  const categories = ["All", ...new Set(newsData.map((news) => news.category))];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Limit the posts by changing the slice count
  const recentPosts = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <SEOHelmet
        title="News & Events | Pixelmine Japan OPC"
        description="Stay updated with the latest news and events from Pixelmine Japan OPC. Learn about announcements, product updates, and industry insights."
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]">
        <div className="flex flex-col-reverse gap-10 p-6 mx-auto max-w-7xl lg:flex-row ">
          <div className="flex-[2]">
            <h1 className="mb-5 text-3xl font-bold leading-tight lg:text-4xl dark:text-stone-50">
              Pixelmine News & Events
            </h1>
            {/* News & Events */}
            <div className="flex flex-col gap-10 mt-6">
              {filteredNews.length > 0 ? (
                filteredNews.map((news) => (
                  <Link key={news.slug} to={`/news-events/${news.slug}`}>
                    <div className="group">
                      <img
                        src={news.img}
                        alt={`${news.title} Image`}
                        className="object-cover object-center w-full transition-all duration-300 ease-in-out rounded-lg h-72 md:h-96 group-hover:brightness-75"
                      />
                      <div className="flex flex-col items-start">
                        <h2 className="mt-3 text-xl font-semibold transition-all duration-300 ease-in-out group-hover:text-primary dark:text-stone-50 dark:group-hover:text-green-400">
                          {news.title}
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-stone-50">
                          By {news.author} - {news.date}
                        </p>
                        <p className="my-3 text-sm font-normal rounded-lg  bg-green-100 text-green-800 px-2.5 py-0.5">
                          {news.category}
                        </p>
                        <p className="text-gray-600 text-sm/6 dark:text-stone-50">
                          {truncateWords(news.preview, 250)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 dark:text-stone-50 ">
                  No results found.
                </p>
              )}
            </div>
          </div>
          <div className="flex-1 lg:mt-16">
            {/* Search */}
            <div>
              <h2 className="mb-4 text-xl leading-tight dark:text-stone-50">
                Search
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex max-w-md mt-3"
              >
                <label htmlFor="search" className="sr-only">
                  Search
                </label>

                <input
                  id="search"
                  name="search"
                  required
                  placeholder="Search for any news & events"
                  autoComplete="search"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-600 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 dark:placeholder:text-stone-900 dark:bg-stone-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary dark:focus:outline-green-400 sm:text-sm/6 border border-b-2 rounded-r-none"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />

                <button
                  type="submit"
                  className="flex-none rounded-md rounded-l-none bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white size-4"
                  />
                  <span className="sr-only">Search</span>
                </button>
              </form>

              {/* Clear Search Button */}

              {(searchInput !== "" || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearchTerm("");
                    setSelectedCategory("All"); // Reset category filter
                  }}
                  className="flex items-center gap-2 px-3 py-1 mt-5 text-xs text-gray-800 bg-gray-100 rounded-full group hover:text-gray-900"
                  aria-label="Reset search and category filters"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-gray-700 group-hover:text-gray-900 size-3"
                  />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl leading-tight dark:text-stone-50">
                Category
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="hidden mt-8 lg:block">
              <h2 className="mb-4 text-xl leading-tight dark:text-stone-50">
                Follow Us
              </h2>
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
              <h2 className="mb-4 text-xl leading-tight dark:text-stone-50">
                Recent Posts
              </h2>
              <div className="flex flex-col gap-4">
                {recentPosts.map((news) => {
                  const postContent = (
                    <div className="flex flex-row gap-2 group" key={news.id}>
                      <img
                        src={news.img}
                        alt={`${news.title} Image`}
                        className="object-cover w-32 h-24 transition-all duration-300 ease-in-out rounded-md group-hover:brightness-75"
                      />
                      <div>
                        <p className="text-xs font-semibold transition-all duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-green-400 dark:text-stone-50">
                          {news.title}
                        </p>
                        <p className="mt-2 text-xs text-gray-600 dark:text-stone-50">
                          {truncateWords(news.preview, 90)}
                        </p>
                      </div>
                    </div>
                  );

                  return news.slug ? (
                    <Link to={news.slug} key={news.id}>
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

export default NewsEvents;
