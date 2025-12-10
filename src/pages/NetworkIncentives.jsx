import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";
import { formatCurrencyWithSymbol } from "../utils/formatCurrencyWithSymbol";
import { formatCurrency } from "../utils/formatCurrency";

import cardBg from "../assets/incentives-card-bg.jpg";
import Dropdown from "../ui/networkIncentives/Dropdown";
import Accordion from "../ui/Accordion";
import SEOHelmet from "../ui/SEOHelmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCalculator } from "@fortawesome/pro-solid-svg-icons";

import { items } from "../data/networkincentives/networkIncentivesData";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import AnimatedNumber from "../animations/AnimatedNumber";

import { useLanguage } from "../context/LanguageContext";

const API_URL = import.meta.env.VITE_API_URL;

function NetworkIncentives() {
  const { language } = useLanguage();
  const isEN = language === "en";
  const [summary, setSummary] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("JPY");
  const [userPoints, setUserPoints] = useState("");
  const [converted, setConverted] = useState({ usd: null, jpy: null });

  // Fetch incentive summary
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(`${API_URL}/api/incentive-summary`);
        if (!res.ok) throw new Error("Failed to fetch incentives summary data");
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSummary();
  }, []);

  // Handle point conversion to USD/JPY
  const handleConvert = () => {
    if (!userPoints || !summary) return;

    const usd =
      selectedCurrency === "USD"
        ? userPoints * summary.pxl_conversion_usd
        : userPoints * summary.pxl_conversion_jpy * summary.usd_rate;

    const jpy =
      selectedCurrency === "JPY"
        ? userPoints * summary.pxl_conversion_jpy
        : (userPoints * summary.pxl_conversion_usd) / summary.usd_rate;

    setConverted({ usd, jpy });
  };

  // Modern Loading screen
  if (!summary) {
    return (
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Animated Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 rounded-full border-white/20"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full border-t-white animate-spin"></div>
          </div>

          {/* Loading text */}
          <div className="text-center">
            <p className="text-lg font-semibold text-white drop-shadow-lg">
              {isEN
                ? "Loading network incentives..."
                : "ネットワークインセンティブを読み込み中..."}
            </p>
            <p className="mt-2 text-sm text-emerald-100">
              {isEN ? "Please wait a moment" : "少々お待ちください"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const dropdownOptions = [
    { currency: "JPY", value: summary.total_incentive_jpy },
    { currency: "USD", value: summary.total_incentive_usd },
  ];

  const pxlConversion = {
    JPY: summary.pxl_conversion_jpy,
    USD: summary.pxl_conversion_usd,
  };

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Network Incentives | Pixelmine Japan OPC"
            : "ネットワークインセンティブ | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Understand how Pixelmine rewards user participation and contribution through a decentralized incentive structure designed to promote fairness and engagement."
            : "Pixelmineがユーザーの参加と貢献にどのように報酬を与えるか、分散型インセンティブ構造を通じて公平性とエンゲージメントを促進する方法を理解できます。"
        }
        url="https://www.pixelmine.org/network-incentives"
        image="/social-sharing.jpg"
      />

      {/* Hero Section - Matching Hero Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
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

        <div className="relative z-10 px-6 mx-auto max-w-7xl">
          <FadeSlideUp className="flex flex-col gap-12 lg:flex-row lg:items-center">
            {/* Left Column */}
            <div className="flex-1 text-center lg:text-left">
              {/* Heading */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl drop-shadow-lg">
                {isEN ? "Network Incentives" : "ネットワークインセンティブ"}
              </h1>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed md:text-lg text-emerald-50 drop-shadow-md">
                {isEN
                  ? "Allocation of incentives based on performance and Pixelmine points system."
                  : "パフォーマンスとPixelmineポイントシステムに基づくインセンティブの配分。"}
              </p>
            </div>

            {/* Right Column - Incentive Cards */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Total Incentive Card */}
                <div className="col-span-1 p-6 md:p-8 text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl sm:col-span-2 min-h-[250px] flex flex-col justify-between">
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div>
                      <h2 className="mb-3 text-base font-semibold md:text-lg">
                        {isEN
                          ? "Total Distributable Incentive"
                          : "総配分インセンティブ"}
                      </h2>
                      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/30">
                        {isEN ? "Value as of" : "更新日時"}{" "}
                        {formatDate(summary.updated_at)}
                      </span>
                    </div>
                    <Dropdown
                      selected={{
                        currency: selectedCurrency,
                        value: dropdownOptions.find(
                          (d) => d.currency === selectedCurrency
                        ).value,
                      }}
                      setSelected={(item) => setSelectedCurrency(item.currency)}
                      options={dropdownOptions}
                    />
                  </div>

                  <p className="mt-auto text-4xl font-light md:text-5xl">
                    <AnimatedNumber
                      value={
                        dropdownOptions.find(
                          (d) => d.currency === selectedCurrency
                        ).value
                      }
                      currency={selectedCurrency}
                      formatter={formatCurrencyWithSymbol}
                      decimals={selectedCurrency === "JPY" ? 0 : 2}
                    />
                  </p>
                </div>

                {/* Activity Points Card */}
                <div className="flex flex-col p-6 text-white border shadow-xl rounded-2xl bg-white/10 backdrop-blur-md border-white/20">
                  <h2 className="mb-4 text-base font-semibold text-center lg:text-start">
                    {isEN
                      ? "Total User Activity Points"
                      : "総ユーザーアクティビティポイント"}
                  </h2>
                  <p className="mt-auto text-2xl font-light text-center">
                    <AnimatedNumber
                      value={summary.most_occurred_activity_point}
                      formatter={formatCurrency}
                    />
                  </p>
                </div>

                {/* PXL Points Conversion Card */}
                <div className="flex flex-col p-6 text-white border shadow-xl rounded-2xl bg-white/10 backdrop-blur-md border-white/20">
                  <h2 className="mb-4 text-base font-semibold text-center lg:text-start">
                    {isEN ? "PXL Points Conversion" : "PXLポイント換算"}
                  </h2>
                  <p className="mt-auto text-2xl font-light text-center">
                    {isEN ? "1 PXL =" : "1 PXL ="}{" "}
                    {pxlConversion[selectedCurrency] > 0
                      ? formatCurrencyWithSymbol(
                          pxlConversion[selectedCurrency],
                          selectedCurrency
                        )
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </FadeSlideUp>
        </div>
      </section>

      {/* Calculator & Content Section */}
      <FadeSlideUp
        element="section"
        className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Calculator */}
            <div>
              <div className="relative p-8 overflow-hidden shadow-2xl rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600">
                {/* Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md">
                      <FontAwesomeIcon
                        icon={faCalculator}
                        className="text-white size-6"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-white md:text-2xl">
                      {isEN ? "PXL Points Calculator" : "PXLポイント計算機"}
                    </h2>
                  </div>

                  {/* Input */}
                  <div className="mb-6">
                    <label className="block mb-3 text-sm font-semibold text-white">
                      {isEN
                        ? "Enter Your PXL Points"
                        : "PXLポイントを入力してください"}
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-6 py-4 text-lg font-medium text-gray-900 transition-all bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/50 focus:border-white"
                      value={userPoints}
                      onChange={(e) => setUserPoints(e.target.value)}
                    />
                  </div>

                  {/* Button */}
                  <button
                    onClick={handleConvert}
                    className="w-full px-6 py-4 text-base font-bold text-emerald-700 bg-white rounded-2xl shadow-xl hover:bg-gray-50 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    {isEN ? "Convert to Currency" : "通貨に換算"}
                  </button>

                  {/* Results */}
                  {converted.usd !== null ? (
                    <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
                      <div className="p-5 border rounded-2xl bg-white/10 backdrop-blur-md border-white/30">
                        <p className="mb-2 text-sm font-semibold text-white/80">
                          {isEN ? "USD Value" : "USD換算値"}
                        </p>
                        <p className="text-2xl font-light text-white">
                          {formatCurrencyWithSymbol(converted.usd, "USD")}
                        </p>
                      </div>

                      <div className="p-5 border rounded-2xl bg-white/10 backdrop-blur-md border-white/30">
                        <p className="mb-2 text-sm font-semibold text-white/80">
                          {isEN ? "JPY Value" : "JPY換算値"}
                        </p>
                        <p className="text-2xl font-light text-white">
                          {formatCurrencyWithSymbol(converted.jpy, "JPY")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-6 text-sm text-center text-white/80">
                      {isEN
                        ? "Enter your points and click convert to see the results"
                        : "ポイントを入力して「通貨に換算」をクリックすると結果が表示されます"}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              {/* Icon Header */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center mb-6 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="text-white size-7"
                  />
                </div>

                <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
                  {isEN
                    ? "In Pixelmine, two factors contribute to the total incentive a user can receive: Activity Points and PXL Points."
                    : "Pixelmineでは、ユーザーが受け取る総インセンティブには2つの要素が関与しています：アクティビティポイントとPXLポイント。"}
                </p>
              </div>

              {/* Accordion */}
              <Accordion items={items} language={language} />
            </div>
          </div>
        </div>
      </FadeSlideUp>
    </>
  );
}

export default NetworkIncentives;
