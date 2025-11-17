import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faBolt, faBoxOpen } from "@fortawesome/pro-solid-svg-icons";
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[25%_1fr]">
        {/* Box 1: Total Running Storer */}
        <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
          <div className="flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
            <FontAwesomeIcon icon={faServer} className="text-white size-7" />
          </div>
          <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
            Total Running Storer
          </h2>
          <p className="text-5xl font-bold text-gray-900 dark:text-white">
            {(locationStatus ?? []).reduce(
              (sum, city) => sum + (city.running || 0),
              0
            )}
          </p>
        </div>

        {/* Box 2: Filters and available slots */}
        <div className="p-8 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
            Check storer status by location
          </h2>
          <div className="flex flex-col gap-4 mb-6 md:flex-row">
            {/* Country select */}
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Country
              </label>
              <select
                className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
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
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  City
                </label>

                <select
                  className={`w-full p-3 text-sm transition-all duration-200 border border-gray-300 bg-gray-50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white`}
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

          {selectedCity && (
            <div className="flex flex-col justify-between gap-5 mt-6 lg:flex-row">
              <div className="flex flex-col items-center w-full p-6 text-center border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-gray-700 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-white size-5"
                  />
                </div>
                <h2 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Storer Running
                </h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedCityData.running ?? "--"}
                </p>
              </div>
              <div className="flex flex-col items-center w-full p-6 text-center border border-gray-200 shadow-md bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-gray-700 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="text-white size-5"
                  />
                </div>
                <h2 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Available Storer Slot
                </h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedCityData.available ?? "--"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Box 3 + Box 4 */}
      <div className="mt-6 grid grid-cols-1 2xl:grid-cols-[25%_1fr] gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center h-full p-8 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
              <FontAwesomeIcon icon={faBolt} className="text-white size-7" />
            </div>
            <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
              Activity Points
            </h2>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              {statistics.activity_points ?? "--"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-8 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
              <FontAwesomeIcon icon={faBolt} className="text-white size-7" />
            </div>
            <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
              PXL Points
            </h2>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              {statistics.pxl_points ?? "--"} PXL
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
          <OnlineHoursLineChart data={statistics.online_hours_per_month} />
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
