import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { formatDate } from "../utils/formatDate";
import { formatCurrencyWithSymbol } from "../utils/formatCurrencyWithSymbol";
import { formatCurrency } from "../utils/formatCurrency";

import cardBg from "../assets/incentives-card-bg.jpg";
import placeholderImg from "../assets/placeholder.png";

import Dropdown from "../ui/networkIncentives/Dropdown";
import AccordionIncentives from "../ui/networkIncentives/AccordionIncentives";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulbOn } from "@fortawesome/pro-solid-svg-icons";

function NetworkIncentives() {
  const [{ converted_incentives, activity_points, pixelpoint, updated_at }] =
    useLoaderData();

  const initialSelected = converted_incentives.find(
    (item) => item.currency === "JPY"
  );
  const [selected, setSelected] = useState(initialSelected);

  return (
    <>
      <section className="pt-16 pb-16 sm:pt-28 sm:pb-28 bg-green-50/50">
        <div className="flex flex-col items-start gap-10 p-6 mx-auto lg:flex-row sm:items-start lg:items-center max-w-7xl">
          {/* Left Column - Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem]">
              Network Incentives
            </h1>
            <p className="pt-5 pb-5 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-gray-600">
              Allocation of incentives based on performance and Pixelmine.
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Top Full Width Card */}
              <div
                className="h-64 col-span-1 p-5 md:p-10 text-white rounded-lg bg-green-950 sm:col-span-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center sm:gap-0 ">
                  <h2 className="inline-flex flex-col text-base font-semibold md:text-lg">
                    Total Distributable Incentive
                    <span className="w-fit bg-slate-50 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md  dark:text-green-400 border border-green-400 mt-2">
                      Last updated: {formatDate(updated_at)}
                    </span>
                  </h2>
                  <Dropdown
                    selected={selected}
                    setSelected={setSelected}
                    options={converted_incentives}
                  />
                </div>

                <p className="flex mt-5 md:mt-16 lg:mt-16 text-4xl gap-x-1.5 font-light">
                  {formatCurrencyWithSymbol(selected.value, selected.currency)}
                </p>
              </div>

              {/* Other Cards */}
              <div
                className="flex flex-col px-5 py-4 md:px-10  md:py-4 text-white rounded-lg bg-green-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-base font-semibold md:text-lg">
                  Activity Points
                </h2>
                <p className="mt-4 text-xl font-light">
                  {formatCurrency(activity_points)}
                </p>
              </div>
              <div
                className="flex flex-col px-5 py-4 md:px-10  md:py-4 text-white rounded-lg bg-green-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-base font-semibold md:text-lg">
                  PXL Points
                </h2>
                <p className="mt-4 text-xl font-light">
                  {formatCurrency(pixelpoint)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion for Network Incentive Page */}
      <section className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]">
        <div className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-start gap-10 md:items-center md:flex-row">
            <div className="flex-1">
              <img src={placeholderImg} alt="Placeholder Image" />
            </div>
            <div className="flex-1">
              <FontAwesomeIcon
                icon={faLightbulbOn}
                className="p-2 mt-4 rounded bg-primary/80 text-slate-100 size-5"
              />

              <p className="mt-5 mb-2 text-sm text-gray-600 sm:text-base">
                In Pixelmine, two factors contribute to the total incentive a
                user can receive: Activity Points and PXL Points.
              </p>
              <AccordionIncentives />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NetworkIncentives;
