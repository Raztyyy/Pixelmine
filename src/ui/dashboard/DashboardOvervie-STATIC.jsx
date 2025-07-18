import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faBolt, faBoxOpen } from "@fortawesome/pro-solid-svg-icons"; // Example icon

import cardBg from "../../assets/incentives-card-bg.jpg";
import SEOHelmet from "../SEOHelmet";
import OnlineHoursLineChart from "./statistics/OnlineHoursLineChart";

const locationData = {
  Philippines: [
    { name: "Cebu", running: 3, available: 5 },
    { name: "Manila", running: 4, available: 2 },
    { name: "Davao", running: 2, available: 6 },
  ],
  "United States": [
    { name: "New York", running: 7, available: 1 },
    { name: "Los Angeles", running: 5, available: 3 },
    { name: "Chicago", running: 2, available: 4 },
  ],
  Japan: [
    { name: "Tokyo", running: 8, available: 0 },
    { name: "Osaka", running: 3, available: 2 },
    { name: "Kyoto", running: 1, available: 5 },
  ],
};

function DashboardOverview() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countryNames = Object.keys(locationData);
  const cityOptions = selectedCountry ? locationData[selectedCountry] : [];

  const selectedCityData =
    cityOptions.find((c) => c.name === selectedCity) || {};

  return (
    <>
      <SEOHelmet
        title="Dashboard | Pixelmine Japan OPC"
        description="Monitor real-time storer activity, available slots, and operational metrics with the Pixelmine OPC Dashboard. Stay updated and manage your network efficiently."
        url="https://www.pixelmine.org/dashboard"
        image="/social-sharing.jpg"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[25%_1fr]">
        {/* Box 1: Storer Running */}
        <div className="p-6 bg-white dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md flex items-center justify-center flex-col">
          <FontAwesomeIcon
            icon={faServer}
            className="w-5 h-5 p-4 rounded-full bg-primary text-stone-50"
          />

          <h2 className="mt-5 mb-2 text-md dark:text-stone-300">
            Total Running Storer
          </h2>

          <p className="text-5xl font-bold dark:text-white">
            {Object.values(locationData)
              .flat()
              .reduce((sum, city) => sum + city.running, 0)}
          </p>
        </div>

        {/* Box 2: Filters and Available Slot */}
        <div className="p-6 bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-zinc-700 dark:border dark:border-stone-400/25">
          <h2 className="mb-5 text-lg font-bold text-gray-700 dark:text-white">
            Check storer status by location
          </h2>
          {/* Dropdowns */}
          <div className="flex gap-4 mb-4">
            {/* Country */}
            <div className="w-1/2">
              <label
                htmlFor="country"
                className="block mb-1 text-sm text-gray-700 dark:text-stone-100"
              >
                Country
              </label>
              <select
                id="country"
                className="w-full p-2 text-sm border rounded-md bg-gray-50"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedCity("");
                }}
              >
                <option value="">Select Country</option>
                {countryNames.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="w-1/2">
              <label
                htmlFor="city"
                className="block mb-1 text-sm text-gray-700 dark:text-stone-100"
              >
                City
              </label>
              <select
                id="city"
                className="w-full p-2 text-sm border rounded-md bg-gray-50"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedCountry}
              >
                <option value="">Select City</option>
                {cityOptions.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Box 2: Available Slot Display */}

          {selectedCity && (
            <div className="flex flex-col justify-between gap-5 mt-5 lg:flex-row">
              <div className="w-full p-5 text-center rounded-md text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-zinc-600 dark:border dark:border-stone-400/30">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
                />
                <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
                  Storer Running
                </h2>
                <p className="text-2xl font-bold dark:text-white">
                  {selectedCityData.running ?? "--"}
                </p>
              </div>
              <div className="w-full p-5 text-center rounded-md text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-zinc-600 dark:border dark:border-stone-400/30">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
                />
                <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
                  Available Storer Slot
                </h2>
                <p className="text-2xl font-bold dark:text-white">
                  {selectedCityData.available ?? "--"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Box 3 + Box 4: Chart and Points side by side on large screens */}
      <div className="mt-4 grid grid-cols-1 2xl:grid-cols-[25%_1fr] gap-4">
        {/* Activity Points & PXL Points stacked vertically */}
        <div className="flex flex-col gap-4 ">
          <div className="p-6 bg-white dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md flex items-center justify-center flex-col h-full">
            <FontAwesomeIcon
              icon={faBolt}
              className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
            />
            <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
              Activity Points
            </h2>
            <p className="text-2xl font-bold dark:text-white">21.52</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md flex items-center justify-center flex-col h-full">
            <FontAwesomeIcon
              icon={faBolt}
              className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
            />
            <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
              PXL Points
            </h2>
            <p className="text-2xl font-bold dark:text-white">5 PXL</p>
          </div>
        </div>

        {/* Chart on the right */}
        <div className=" p-6 bg-white dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md flex items-center justify-center">
          <OnlineHoursLineChart />
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
