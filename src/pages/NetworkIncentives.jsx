import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";
import { formatCurrencyWithSymbol } from "../utils/formatCurrencyWithSymbol";
import { formatCurrency } from "../utils/formatCurrency";

import cardBg from "../assets/incentives-card-bg.jpg";
import Dropdown from "../ui/networkIncentives/Dropdown";
import Accordion from "../ui/Accordion";
import SEOHelmet from "../ui/SEOHelmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";

import { items } from "../data/networkincentives/networkIncentivesData";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import AnimatedNumber from "../animations/AnimatedNumber";

const API_URL = import.meta.env.VITE_API_URL;

function NetworkIncentives() {
  const [summary, setSummary] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("JPY");
  const [userPoints, setUserPoints] = useState("");
  const [converted, setConverted] = useState({ usd: null, jpy: null });

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

  if (!summary) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-primary animate-spin"></div>

          {/* Loading text */}
          <p className="text-sm font-medium text-gray-600 md:text-base">
            Loading network incentives...
          </p>
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
        title="Network Incentives | Pixelmine Japan OPC"
        description="Understand how Pixelmine rewards user participation and contribution through a decentralized incentive structure designed to promote fairness and engagement."
        url="https://www.pixelmine.org/network-incentives"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:bg-stone-900">
        <div className="flex flex-col items-start gap-10 p-6 mx-auto lg:flex-row sm:items-start lg:items-center max-w-7xl">
          {/* Left Column */}
          <FadeSlideUp className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
              Network Incentives
            </h1>
            <p className="pt-5 pb-5 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-stone-900 dark:text-stone-50">
              Allocation of incentives based on performance and Pixelmine.
            </p>
          </FadeSlideUp>

          {/* Right Column - Incentive Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Total Incentive */}
              <div
                className="h-64 col-span-1 p-5 md:p-10 text-white rounded-lg bg-green-950 sm:col-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center sm:gap-0 ">
                  <h2 className="inline-flex flex-col text-base font-semibold md:text-lg">
                    Total Distributable Incentive
                    <span className="w-fit bg-slate-50 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:text-green-400 border border-green-400 mt-2">
                      Value as of {formatDate(summary.updated_at)}
                    </span>
                  </h2>
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

                <p className="flex mt-5 md:mt-16 lg:mt-16 text-4xl gap-x-1.5 font-light">
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

              {/* Activity Points */}
              <div
                className="flex flex-col px-5 py-4 md:px-10 md:py-4 text-white rounded-lg bg-green-950 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-base font-semibold text-center lg:text-start">
                  Total User Activity Points
                </h2>
                <p className="mt-4 text-xl font-light text-center">
                  <AnimatedNumber
                    value={summary.most_occurred_activity_point}
                    formatter={formatCurrency}
                  />
                </p>
              </div>

              {/* Pixel Points Conversion */}
              <div
                className="flex flex-col px-5 py-4 md:px-10 md:py-4 text-white rounded-lg bg-green-950 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-base font-semibold text-center lg:text-start">
                  PXL Points Conversion
                </h2>
                <p className="mt-4 text-xl font-light text-center">
                  1 PXL ={" "}
                  {formatCurrencyWithSymbol(
                    pxlConversion[selectedCurrency],
                    selectedCurrency
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Calculator */}
      <FadeSlideUp element="section" className="pt-[2rem] pb-[2rem]">
        <div className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-start gap-10 md:items-center lg:flex-row">
            <div className="flex-1 w-full">
              <div
                className="relative flex flex-col gap-6 p-6 md:p-10 text-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.15)] overflow-hidden"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#022c22",
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-base font-semibold md:text-lg">
                    PXL Points Calculator
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white/80">
                        Enter Your PXL Points
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full px-5 py-3 text-lg font-medium text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300/30 focus:border-green-400"
                        value={userPoints}
                        onChange={(e) => setUserPoints(e.target.value)}
                      />
                    </div>

                    <button
                      onClick={handleConvert}
                      className="w-full px-6 py-3 text-base font-medium text-green-900 transition-all duration-200 bg-green-100 rounded-xl shadow-lg hover:bg-green-50 hover:scale-[1.02] active:scale-95"
                    >
                      Convert to Currency
                    </button>
                  </div>

                  {converted.usd !== null && (
                    <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
                      <div className="p-5 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
                        <p className="mb-1 text-base font-semibold text-center lg:text-start text-white/80">
                          USD Value
                        </p>
                        <p className="text-xl font-light leading-tight text-center text-white break-words lg:text-start">
                          {formatCurrencyWithSymbol(converted.usd, "USD")}
                        </p>
                      </div>

                      <div className="p-5 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
                        <p className="mb-1 text-base font-semibold text-center lg:text-start text-white/80">
                          JPY Value
                        </p>
                        <p className="text-xl font-light leading-tight text-center text-white break-words lg:text-start">
                          {formatCurrencyWithSymbol(converted.jpy, "JPY")}
                        </p>
                      </div>
                    </div>
                  )}

                  {!converted.usd && (
                    <p className="mt-6 text-sm text-center text-white/70">
                      Enter your points and click convert to see the results
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <FontAwesomeIcon
                icon={faLightbulbOn}
                className="p-2 mt-4 rounded bg-primary/80 text-slate-100 size-5"
              />
              <p className="mt-5 mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
                In Pixelmine, two factors contribute to the total incentive a
                user can receive: Activity Points and PXL Points.
              </p>
              <Accordion items={items} />
            </div>
          </div>
        </div>
      </FadeSlideUp>
    </>
  );
}

export default NetworkIncentives;
