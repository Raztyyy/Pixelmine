// DashboardOverview.jsx - REPLACE YOUR EXISTING FILE
// This keeps ALL your logic, only improves the layout for better visual hierarchy

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faBolt,
  faBoxOpen,
  faFilter,
} from "@fortawesome/pro-solid-svg-icons";
import SEOHelmet from "../SEOHelmet";
import OnlineHoursLineChart from "./statistics/OnlineHoursLineChart";
import { useAuth } from "../../context/AuthContext";

function DashboardOverview() {
  const [statistics, setStatistics] = useState({
    activity_points: 0,
    pxl_points: 0,
    online_hours_per_month: [],
  });

  const [locationStatus, setLocationStatus] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const { token } = useAuth();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_URL}/api/storer-statistics/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        const data = await res.json();
        setStatistics(data);
      } catch (err) {
        console.error("Error fetching statistics:", err);
      }
    };

    if (token) {
      fetchStats();
    }
  }, [token, API_URL]);

  useEffect(() => {
    const fetchLocationStatus = async () => {
      try {
        const res = await fetch(`${API_URL}/api/global-storer-status`);
        const data = await res.json();

        const raw = data.location_status?.[0]?.location_status;

        // raw should be a JSON string; parse it
        let parsed = [];
        if (typeof raw === "string") {
          parsed = JSON.parse(raw);
        } else if (Array.isArray(raw)) {
          // just in case backend auto-parses in future
          parsed = raw;
        }

        setLocationStatus(parsed);
      } catch (err) {
        console.error("Error fetching global location status:", err);
      }
    };

    fetchLocationStatus();
  }, [API_URL]);

  const countryNames = Object.keys(
    locationStatus.reduce((acc, city) => {
      const country = city.country || "Unknown";
      acc[country] = true;
      return acc;
    }, {})
  );

  const cityOptions = selectedCountry
    ? locationStatus.filter((city) => city.country === selectedCountry)
    : [];

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

      {/* Metrics Overview - 4 equal cards in a row */}
      <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Running Storer */}
        <div className="p-6 bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <FontAwesomeIcon icon={faServer} className="w-6 h-6 text-white" />
          </div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Running Storer
          </p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">
            {(locationStatus ?? []).reduce(
              (sum, city) => sum + (city.running || 0),
              0
            )}
          </p>
        </div>

        {/* Activity Points */}
        <div className="p-6 bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <FontAwesomeIcon icon={faBolt} className="w-6 h-6 text-white" />
          </div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Activity Points
          </p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">
            {statistics.activity_points ?? "--"}
          </p>
        </div>

        {/* PXL Points */}
        <div className="p-6 bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <FontAwesomeIcon icon={faBolt} className="w-6 h-6 text-white" />
          </div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            PXL Points
          </p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">
            {statistics.pxl_points ?? "--"}
          </p>
        </div>
      </div>

      {/* Location Status Section */}
      <div className="mb-6 bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Check storer status by location
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
            {/* Country select */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Country
              </label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-stone-800 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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

            {/* City select */}
            {selectedCountry && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  City
                </label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-stone-800 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cityOptions.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* City Stats - Only show when city is selected */}
          {selectedCity && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Storer Running */}
              <div className="p-6 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500">
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Storer Running
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedCityData.running ?? "--"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Available Storer Slot */}
              <div className="p-6 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500">
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Available Storer Slot
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedCityData.available ?? "--"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chart Section - Full Width */}
      <div className="bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Online Hours per Month
          </h2>
        </div>
        <div className="p-6">
          <OnlineHoursLineChart data={statistics.online_hours_per_month} />
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
