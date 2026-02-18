import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faBolt } from "@fortawesome/pro-solid-svg-icons";
import SEOHelmet from "../SEOHelmet";
import OnlineHoursLineChart from "./statistics/OnlineHoursLineChart";
import { useAuth } from "../../context/AuthContext";
import countries from "../../utils/countries";

function DashboardOverview() {
  const [statistics, setStatistics] = useState({
    activity_points: 0,
    pxl_points: 0,
    online_hours_per_month: [],
  });

  const [storers, setStorers] = useState([]);
  const { token } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch user statistics
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

    if (token) fetchStats();
  }, [token, API_URL]);

  // Fetch all storers
  useEffect(() => {
    const fetchStorers = async () => {
      try {
        const res = await fetch(`${API_URL}/api/storer`);
        const data = await res.json();
        setStorers(data.storers || []);
      } catch (err) {
        console.error("Error fetching storers:", err);
      }
    };

    fetchStorers();
  }, [API_URL]);

  // Unique country list
  const countryNames = Array.from(
    new Set(storers.map((s) => s.country || "Unknown"))
  );

  // Cities for selected country (deduplicated)
  const cityOptions = selectedCountry
    ? Array.from(
        new Map(
          storers
            .filter((s) => s.country === selectedCountry)
            .map((s) => [s.city, s])
        ).values()
      )
    : [];

  // Count of storers in selected country
  const totalStorersInCountry = selectedCountry
    ? storers.filter((s) => s.country === selectedCountry).length
    : 0;

  // Count of storers in selected city
  const totalStorersInCity = selectedCity
    ? storers.filter(
        (s) => s.country === selectedCountry && s.city === selectedCity
      ).length
    : 0;

  return (
    <>
      <SEOHelmet
        title="Dashboard | Pixelmine Japan OPC"
        description="Monitor real-time storer activity, available slots, and operational metrics with the Pixelmine OPC Dashboard. Stay updated and manage your network efficiently."
        url="https://www.pixelmine.org/dashboard"
        image="/social-sharing.jpg"
      />

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border border-gray-200 dark:bg-stone-900 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <FontAwesomeIcon icon={faServer} className="w-6 h-6 text-white" />
          </div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Running Storer
          </p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">
            {storers.length}
          </p>
        </div>

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
            Check storer count by location
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
                {countryNames.map((countryCode) => (
                  <option key={countryCode} value={countryCode}>
                    {countries[countryCode] || countryCode}
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
                  {cityOptions.map((storer) => (
                    <option key={storer.id} value={storer.city}>
                      {storer.city}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {selectedCountry && (
              <div className="p-6 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Total Storers in{" "}
                      {countries[selectedCountry] || selectedCountry}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {totalStorersInCountry}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedCity && (
              <div className="p-6 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Total Storers in {selectedCity}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {totalStorersInCity}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chart Section */}
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
