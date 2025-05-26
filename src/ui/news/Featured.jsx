import { Link } from "react-router-dom";
import featuredNews from "../../assets/featured-news.png";

function Featured() {
  return (
    <div className="w-full group lg:flex-1">
      <div>
        <Link to="news-events/id">
          <img
            className="object-cover object-left w-full h-48 transition-all duration-300 ease-in-out rounded md:h-auto group-hover:brightness-75"
            src={featuredNews}
            alt="Featured Image"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 py-3 text-sl">
        <Link
          to="news-events/id"
          className="transition-all duration-300 ease-in-out group-hover:text-primary"
        >
          <h2 className="font-medium">
            世界を驚かす次代のエンジニア常識をつくり変える分散型SNS「Pixelmine」を開発
          </h2>
        </Link>

        <div className="flex items-center gap-3">
          <p className="text-gray-400 text-sm/6">April 7, 2025</p>
          <Link
            to="news-events/category"
            className="relative z-10 px-3 py-1 text-gray-600 transition-all duration-300 ease-in-out rounded-full bg-gray-50 hover:bg-gray-100 text-sm/6"
          >
            Event
          </Link>
        </div>
        <p className="mt-2 mb-2 text-gray-500 max-w-auto text-sm/6">
          「社長の名は」立ち上げから3年、出演者100名超。
          社長が感じた悔しさや葛藤を超えていく挑戦ストーリーを伝え、働く人に勇気を与えてきました。
          その挑戦の想いは広がり、舞台は、TikTokから東京ビッグサイトへ。
          Climbers2025への出場権を手にする社長は誰だ...。
        </p>
      </div>
    </div>
  );
}

export default Featured;
