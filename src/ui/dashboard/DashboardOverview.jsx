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
        const res = await fetch(`${API_URL}/api/global-storer-status`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        const data = await res.json();
        // data.location_status should be array
        setLocationStatus(data.location_status ?? []);
      } catch (err) {
        console.error("Error fetching global location status:", err);
      }
    };

    if (token) {
      fetchLocationStatus();
    }
  }, [token, API_URL]);

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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[25%_1fr]">
        {/* Box 1: Total Running Storer */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900">
          <FontAwesomeIcon
            icon={faServer}
            className="w-5 h-5 p-4 rounded-full bg-primary text-stone-50"
          />
          <h2 className="mt-5 mb-2 text-md dark:text-stone-300">
            Total Running Storer
          </h2>
          <p className="text-5xl font-bold dark:text-white">
            {(locationStatus ?? []).reduce(
              (sum, city) => sum + (city.running || 0),
              0
            )}
          </p>
        </div>

        {/* Box 2: Filters and available slots */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-700 dark:border dark:border-stone-400/25">
          <h2 className="mb-5 text-lg font-bold text-gray-700 dark:text-white">
            Check storer status by location
          </h2>
          <div className="flex gap-4 mb-4">
            {/* Country select */}
            <div className="w-1/2">
              <label className="block mb-1 text-sm text-gray-700 dark:text-stone-100">
                Country
              </label>
              <select
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
            {/* City select */}
            <div className="w-1/2">
              <label className="block mb-1 text-sm text-gray-700 dark:text-stone-100">
                City
              </label>
              <select
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

          {selectedCity && (
            <div className="flex flex-col justify-between gap-5 mt-5 lg:flex-row">
              <div className="w-full p-5 text-center rounded-md shadow text-stone-900 dark:bg-zinc-600 dark:border dark:border-stone-400/30">
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
              <div className="w-full p-5 text-center rounded-md shadow text-stone-900 dark:bg-zinc-600 dark:border dark:border-stone-400/30">
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

      {/* Box 3 + Box 4 */}
      <div className="mt-4 grid grid-cols-1 2xl:grid-cols-[25%_1fr] gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-md shadow dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900">
            <FontAwesomeIcon
              icon={faBolt}
              className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
            />
            <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
              Activity Points
            </h2>
            <p className="text-2xl font-bold dark:text-white">
              {statistics.activity_points ?? "--"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-md shadow dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900">
            <FontAwesomeIcon
              icon={faBolt}
              className="w-4 h-4 p-2 rounded-full bg-primary text-stone-50"
            />
            <h2 className="mt-2 mb-1 text-sm font-medium dark:text-white">
              PXL Points
            </h2>
            <p className="text-2xl font-bold dark:text-white">
              {statistics.pxl_points ?? "--"} PXL
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 bg-white rounded-md shadow dark:bg-zinc-700 dark:border dark:border-stone-400/25 text-stone-900">
          <OnlineHoursLineChart data={statistics.online_hours_per_month} />
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
