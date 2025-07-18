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
  const labels = data.map((item) => item.month);
  const values = data.map((item) => item.hours);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Online Hours",
        data: values,
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
        position: "top",
        labels: {
          color: "#000",
          font: { size: 14, weight: "500" },
          padding: 20,
          boxWidth: 12,
        },
      },
      title: { display: false },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto max-w-7xl lg:p-8">
      <h2 className="mb-5 font-semibold">User Online Hours per Month</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default OnlineHoursLineChart;
