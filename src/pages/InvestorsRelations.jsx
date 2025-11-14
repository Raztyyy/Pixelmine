import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import Button from "../ui/Button";
import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";

function InvestorsRelations() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Investor Relations | Pixelmine Japan OPC"
            : "投資家向け情報 | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Meet our strategic investor D・R・M and learn about our corporate governance and investment opportunities."
            : "戦略的投資家D・R・Mをご紹介し、コーポレートガバナンスと投資機会についてご説明します。"
        }
        url="https://www.pixelmine.org/investors"
        image="/social-sharing.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-[9rem] overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute rounded-full top-10 left-1/3 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 p-6 mx-auto max-w-7xl">
          <FadeSlideUp className="flex flex-col items-center gap-2 text-center">
            <div className="relative p-4 mb-3 ">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-100 to-emerald-500 opacity-30 blur-2xl -z-10" />
              <img
                src="/drm-icon.png"
                alt="D・R・M Logo"
                className="relative object-contain h-16 md:h-18"
              />
            </div>

            <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
              Dream Real Estate Manufacture
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
              {isEN
                ? "Our strategic partner in creating new real estate value and building sustainable communities for the future."
                : "新しい不動産価値の創造と、未来の持続可能なコミュニティ構築における戦略的パートナー。"}
            </p>

            <a
              href="https://www.drm-drm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 group border rounded-lg text-sm text-center items-center transition-all duration-300 ease-in-out justify-center px-6 py-3.5  bg-emerald-500 hover:bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 font-semibold"
            >
              <span>{isEN ? "Visit Website" : "ウェブサイトを訪問"}</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-4 h-4"
              />
            </a>
          </FadeSlideUp>
        </div>
      </section>

      {/* Philosophy Section - President's Message */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="overflow-hidden">
            <div className="mb-8">
              <span className="inline-flex items-center px-5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-full text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg">
                {isEN ? "Message from the President" : "代表からのメッセージ"}
              </span>
            </div>

            {isEN ? (
              <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                <p className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  We are a group of professionals who create new real estate
                  value.
                </p>

                <p>
                  Our goal is to create new real estate value that can
                  contribute to society and people. This idea means "not just
                  demolishing and renovating a building, but creating and
                  renovating the optimal way to make the city and its people
                  happy, with that building at the center."
                </p>

                <p>
                  It's not that difficult to demolish what has been there and
                  simply build something new. However, our goal is to seek out
                  "new real estate value" and, through real estate, plant "food
                  that will make people happy - good fortune" for the future.
                </p>

                <p>
                  Now then, what are these blessings? They are the three
                  blessings that serve as our company's guiding principle.
                </p>

                {/* Three Fortunes - Grid Layout */}
                <div className="grid gap-6 my-8 md:grid-cols-3">
                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      惜
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      惜福 (Sekifuku)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Not using up or taking all of the good fortune that has
                      been given to you.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      分
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      分福 (Bunpuku)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Not monopolizing the good fortune that has come to you,
                      but sharing some with others.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      植
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      植福 (Shokufuku)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Looking to the future and becoming the source of good
                      fortune, even if you yourself will not receive the
                      benefits.
                    </p>
                  </div>
                </div>

                <p>
                  These three blessings form the basis of D・R・M's philosophy,
                  and we want to contribute to society and people through the
                  real estate business. Based on the methods and knowledge we
                  have cultivated to date, as well as our outstanding creativity
                  and imagination, we want to give real estate new value and
                  potential from the perspective of creating and regenerating
                  for the future, without being bound by existing thinking.
                </p>

                <div className="p-6 mt-8 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Now is the time for us at D・R・M, as a group of real estate
                    professionals, to "regenerate" this town, this city, and
                    people's lives in a way that brings happiness.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                <p className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  私たちは、
                  <br />
                  新しい不動産価値を
                  <br />
                  創造するプロ集団である。
                </p>

                <p>
                  私たちが目指すものは、社会や人々に貢献できる新しい不動産価値の創造です。その考えとはつまり「建物を壊し再生するだけではなく、その建物を中心として街や人々が幸せになるためには、どうしたら最適なのかを創造し、そして再生すること」。
                </p>

                <p>
                  今まであったものを壊し、ただ新しいものを造るというのはそう難しいことではありません。しかし、私たちは「不動産の新しい価値」を模索し、そして不動産を通して未来に「人々が幸せになれる糧＝福」を植えていくことが目的です。
                </p>

                <p>
                  では、その福とはどのようなものか。私たちの社想にもなっている3つの福・・・・・
                </p>

                {/* Three Fortunes - Grid Layout */}
                <div className="grid gap-6 my-8 md:grid-cols-3">
                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      惜
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      「惜福」
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      自分に与えられた福を使い尽くしたり、取り尽くさないこと。
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      分
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      「分福」
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      自分に巡ってきた福を独り占めすることなく、一部を人々に分け与えること。
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-white rounded-2xl dark:from-emerald-900/20 dark:to-stone-800 dark:border-gray-700">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold text-white rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                      植
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      「植福」
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      自分自身がその恩恵を受けることがなくとも、将来を見通して福を生み出す元になること。
                    </p>
                  </div>
                </div>

                <p>
                  これら3つの福をD・R・Mの姿勢論とし、私たちは不動産業という事業を通して社会や人々に貢献したいのです。今まで培ってきた手法や知識、そして抜群の創造力と発想力を元に、既存の考えに囚われることなく、未来への創造と再生という見地から不動産に新しい価値と将来性を持たせたいのです。
                </p>

                <div className="p-6 mt-8 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    今こそ、私たちD・R・Mは不動産のプロ集団として、この街を、この都市を、そして人々の暮らしを幸せのカタチに「創生」することをお約束いたします。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default InvestorsRelations;
