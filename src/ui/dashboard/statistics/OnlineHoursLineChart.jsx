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

// Register components (required)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OnlineHoursLineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Online Hours",
        data: [35, 42, 27, 55, 48, 60],
        fill: false,
        borderColor: "#15803d",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // top, left, right, bottom
        labels: {
          color: "#000000", // text color (gray-500)
          font: {
            family: "Inter, sans-serif",
            size: 14,
            weight: "500",
          },
          padding: 20, // space around legend items
          boxWidth: 12, // size of legend color box
        },
      },
      title: { display: false, text: "User Online Hours per Month" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-full mx-auto max-w-7xl lg:h-[600px] flex justify-center items-center flex-col lg:p-8">
      <h2 className="mb-5 font-semibold">User Online Hours per Month</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default OnlineHoursLineChart;
