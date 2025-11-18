import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import Button from "../ui/Button";
import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";

// Investors data
const investorsData = [
  {
    id: 1,
    name: "Dream Real Estate Manufacture",
    abbreviation: "D・R・M",
    description: {
      en: "Our goal is to create new real estate value that can contribute to society and people. This idea means 'not just demolishing and renovating a building, but creating and renovating the optimal way to make the city and its people happy, with that building at the center.' It's not that difficult to demolish what has been there and simply build something new. However, our goal is to seek out 'new real estate value' and, through real estate, plant 'food that will make people happy - good fortune' for the future.",
      ja: "私たちの目標は、社会や人々に貢献できる新たな不動産価値を創造することです。この考え方は、『単に建物を解体したり改修したりするのではなく、建物を中心に据えながら、街とそこに暮らす人々を幸せにするための最適な形をつくり、再生していく』という意味を持っています。そこにあるものを壊して新しいものを建てるだけなら、それほど難しいことではありません。しかし私たちは、『新しい不動産価値』を追求し、不動産を通じて『人々を幸せにする未来の“福”の種をまく』ことを目指しています。",
    },
    website: "https://www.drm-drm.com/",
  },

  // {
  //   id: 2,
  //   name: "Global Innovation Partners",
  //   abbreviation: "GIP",
  //   description: {
  //     en: "Leading venture capital firm investing in transformative technologies and sustainable infrastructure.",
  //     ja: "変革的な技術と持続可能なインフラに投資する大手ベンチャーキャピタル企業。",
  //   },
  //   website: "https://www.drm-drm.com/",
  // },
  // {
  //   id: 3,
  //   name: "Future Capital Holdings",
  //   abbreviation: "FCH",
  //   description: {
  //     en: "Strategic investor supporting next-generation infrastructure and blockchain innovations.",
  //     ja: "次世代インフラとブロックチェーンイノベーションを支援する戦略的投資家。",
  //   },
  //   website: "https://www.drm-drm.com/",
  // },
  // Add more investors here
];

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
            <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
              {isEN ? "Investors Relations" : "投資家向け情報"}
            </h1>
          </FadeSlideUp>
        </div>
      </section>

      {/* Strategic Investors Section */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {/* Investors Grid */}
          <div className="grid grid-cols-1 gap-8">
            {investorsData.map((investor) => (
              <div
                key={investor.id}
                className="relative p-8 transition-all duration-300 bg-white border border-gray-200 shadow-lg group rounded-2xl dark:bg-stone-800 dark:border-gray-700 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-700"
              >
                <div className="mb-4">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {investor.name}
                  </h3>
                  <p className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    {investor.abbreviation}
                  </p>
                </div>

                <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {isEN ? investor.description.en : investor.description.ja}
                </p>

                <a
                  href={investor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border border-transparent shadow-lg rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105"
                >
                  <span>{isEN ? "Visit Website" : "ウェブサイトを訪問"}</span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="w-4 h-4"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dotted Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated Gradient Blobs */}
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 mx-auto max-w-7xl lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              {isEN ? "Investor Updates" : "投資家向け最新情報"}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold leading-tight text-center text-white md:text-4xl lg:text-4xl drop-shadow-lg">
            {isEN
              ? "Stay informed about our latest developments"
              : "最新の開発情報を受け取りましょう"}
          </h2>

          {/* Description */}
          <p className="max-w-2xl mb-10 text-base leading-relaxed text-center md:text-lg text-emerald-50 drop-shadow-md">
            {isEN
              ? "Get exclusive updates on our strategic partnerships, financial reports, and investment opportunities."
              : "戦略的パートナーシップ、財務報告、投資機会に関する限定情報を入手できます。"}
          </p>

          {/* Form */}
          <div className="flex flex-col items-center w-full max-w-xl gap-4 md:flex-row">
            <label htmlFor="email" className="sr-only">
              {isEN ? "Email address" : "メールアドレス"}
            </label>

            {/* Input with Glass Effect */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder={isEN ? "Enter your email" : "メールアドレスを入力"}
              required
              className="w-full p-3.5 text-sm text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg md:flex-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />

            {/* Submit Button */}
            <button
              type="button"
              className="flex gap-2 group border rounded-lg px-6 py-3.5 text-sm text-center items-center transition-all duration-300 ease-in-out justify-center bg-emerald-500 hover:bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 font-semibold w-full md:w-auto"
            >
              {isEN ? "Subscribe now" : "今すぐ登録"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default InvestorsRelations;
