import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OnlineHoursLineChart = ({ data }) => {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const labels = data.map((item) => item.month);
  const values = data.map((item) => item.hours);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Online Hours",
        data: values,
        fill: false,
        borderColor: isDark ? "#86efac" : "#22c55e", // Tailwind green-500 or green-800
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: isDark ? "#e5e7eb" : "#000000", // text-gray-200 or black
          font: { size: 14, weight: "500" },
          padding: 20,
          boxWidth: 12,
        },
      },
      title: { display: false },
    },
    scales: {
      x: {
        ticks: { color: isDark ? "#e5e7eb" : "#000000" },
        grid: { color: isDark ? "#6b7280" : "#d6d3d1" }, // gray-700 or gray-200
      },
      y: {
        beginAtZero: true,
        ticks: { color: isDark ? "#e5e7eb" : "#000000" },
        grid: { color: isDark ? "#6b7280" : "#d6d3d1" },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto max-w-7xl lg:p-8">
      <h2 className="mb-5 font-semibold text-gray-800 dark:text-gray-200">
        User Online Hours per Month
      </h2>
      <Line
        key={isDark ? "dark" : "light"}
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default OnlineHoursLineChart;
