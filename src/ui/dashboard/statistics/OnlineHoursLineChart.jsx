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
        fill: true,
        backgroundColor: isDark
          ? "rgba(16, 185, 129, 0.1)"
          : "rgba(16, 185, 129, 0.05)",
        borderColor: isDark ? "#34d399" : "#10b981",
        borderWidth: 3,
        pointBackgroundColor: isDark ? "#34d399" : "#10b981",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: isDark ? "#6ee7b7" : "#059669",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: isDark ? "#d1d5db" : "#374151",
          font: { size: 14, weight: "600" },
          padding: 20,
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: { display: false },
      tooltip: {
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#f3f4f6" : "#111827",
        bodyColor: isDark ? "#d1d5db" : "#374151",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            return ` ${context.dataset.label}: ${context.parsed.y} hours`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: { size: 12, weight: "500" },
          padding: 8,
        },
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
          lineWidth: 1,
        },
        border: {
          color: isDark ? "#4b5563" : "#e5e7eb",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: { size: 12, weight: "500" },
          padding: 8,
        },
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
          lineWidth: 1,
        },
        border: {
          color: isDark ? "#4b5563" : "#e5e7eb",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
      <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
        User Online Hours per Month
      </h2>
      <div className="w-full">
        <Line
          key={isDark ? "dark" : "light"}
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
};

export default OnlineHoursLineChart;
