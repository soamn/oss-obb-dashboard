import React from "react";
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

interface StockChartProps {
  data: any;
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  const chartData = {
    labels: ["Open", "Last Price", "High", "Low", "MA 50D", "MA 200D"],
    datasets: [
      {
        label: `${data?.name || "Stock"} Price Data (USD)`,
        data: [
          data?.open || 0,
          data?.last_price || 0,
          data?.high || 0,
          data?.low || 0,
          data?.ma_50d || 0,
          data?.ma_200d || 0,
        ],
        fill: false,
        backgroundColor: "#6366f1",
        borderColor: "#6366f1",
        tension: 0.1,
      },
    ],
  };

  const options: {
    responsive: boolean;
    plugins: {
      legend: {
        position: "top";
      };
      title: {
        display: boolean;
        text: string;
      };
    };
  } = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${data?.name || "Stock"} Price History`,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StockChart;
