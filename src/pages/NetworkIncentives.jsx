import SEOHelmet from "../ui/SEOHelmet";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";
import EarnPointsTable from "../data/networkincentives/earnPointsTable";
import HowPxlWorks from "../data/networkincentives/howPxlWorks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn, faPlay } from "@fortawesome/pro-solid-svg-icons";

export default function NetworkIncentives() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Network Incentives | Pixelmine"
            : "ネットワークインセンティブ | Pixelmine"
        }
        description={
          isEN
            ? "Your engagement has value. Earn points through participation and convert them into PXL — your share of the network's value."
            : "あなたの貢献には価値があります。参加によってポイントを獲得し、PXLに変換してネットワークにおけるあなたのシェアを手に入れましょう。"
        }
        url="https://pixelmine.org/network-incentives"
        image="/social-sharing.jpg"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <FadeSlideUp className="relative z-10 flex flex-col items-center gap-4 p-6 mx-auto text-center max-w-7xl">
          {/* Heading */}
          <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isEN
              ? "Your Engagement Has Value"
              : "あなたの貢献には価値があります"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mb-6 text-base leading-relaxed md:text-lg text-emerald-50 drop-shadow-md">
            {isEN
              ? "On traditional social networks, your content builds their platform. On Pixelmine, your contributions build something you're part of."
              : "従来のソーシャルネットワークでは、あなたのコンテンツがプラットフォームを支えます。Pixelmineでは、あなたの貢献が、あなたも参加できる価値あるものを築きます。"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-800 dark:to-stone-900">
        <div className="p-6 mx-auto space-y-12 max-w-7xl">
          {/* Community Rewards */}
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 mb-10 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
              <FontAwesomeIcon
                icon={faLightbulbOn}
                className="text-white size-7"
              />
            </div>
            <h2 className="mb-4 text-xl font-semibold leading-snug lg:mb-8 sm:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN
                ? "A Network That Rewards Its Community"
                : "コミュニティに還元するネットワーク"}
            </h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? `Pixelmine is a decentralized social network where users aren’t just participants — they’re stakeholders. Every month, we allocate an incentive pool and distribute it to the people who make our communities thrive.`
                : "Pixelmineは分散型ソーシャルネットワークです。ユーザーは単なる参加者ではなく、利害関係者です。毎月インセンティブプールを割り当て、コミュニティを活性化させる人々に分配します。"}
            </p>
          </div>

          {/* Earn Points */}
          <div>
            <h2 className="mb-4 text-xl font-semibold leading-snug lg:mb-8 sm:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN
                ? "Earn Points Through Engagement"
                : "活動に応じてポイントを獲得"}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? `Your activity earns points. Points convert to PXL — your share of the network’s value.`
                : "あなたの活動によってポイントが獲得されます。ポイントはPXLに換算され、ネットワークにおけるあなたのシェアになります。"}
            </p>
            <EarnPointsTable isEN={isEN} />
          </div>

          {/* How PXL Works */}
          <div>
            <h2 className="mb-4 text-xl font-semibold leading-snug lg:mb-8 sm:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN ? "How PXL Works" : "PXLの仕組み"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? "Your PXL represents your contribution to the network:"
                : "あなたのPXLはネットワークへの貢献度を示します："}
            </p>

            <div className="p-6 font-mono text-center text-emerald-700 bg-emerald-50 rounded-xl dark:bg-stone-800 dark:text-emerald-400">
              {isEN
                ? "Your PXL = Your Points ÷ Total Network Points × 100"
                : "あなたのPXL = あなたのポイント ÷ ネットワーク全体のポイント × 100"}
            </div>

            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? "The more you contribute, the greater your stake."
                : "貢献が大きいほど、あなたの持分も大きくなります。"}
            </p>
            <p className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {isEN ? "Example:" : "例："}
            </p>

            <HowPxlWorks isEN={isEN} />

            <p className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {isEN
                ? "If you earn 10 points this month:"
                : "今月10ポイントを獲得した場合："}
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-700 list-disc list-inside dark:text-gray-300">
              {isEN ? (
                <>
                  <li>Your PXL: 15.6 PXL</li>
                  <li>Your share: ¥1,218,750</li>
                </>
              ) : (
                <>
                  <li>あなたのPXL: 15.6 PXL</li>
                  <li>あなたのシェア: ¥1,218,750</li>
                </>
              )}
            </ul>
          </div>

          {/* Own Your Social Experience */}
          <div>
            <h2 className="mb-4 text-xl font-semibold leading-snug lg:mb-8 sm:text-2xl lg:text-3xl dark:text-stone-50">
              {isEN
                ? "Own Your Social Experience"
                : "自分のソーシャル体験を自分のものにする"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
              {isEN
                ? "No algorithms deciding your worth. No middlemen taking your value. Just a transparent, community-driven network where your presence matters."
                : "アルゴリズムがあなたの価値を決めることはありません。仲介者が価値を取ることもありません。透明でコミュニティ主導のネットワークで、あなたの存在が重要です。"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
