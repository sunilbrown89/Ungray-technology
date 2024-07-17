// SalesChart.tsx
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

interface SalesData {
  webSellings: number[];
  offlineSellings: number[];
}

const SalesChart: React.FC = () => {
  const data: SalesData = {
    webSellings: [200, 6000, 4000, 5000, 6000, 200],
    offlineSellings: [2000, 3000, 4000, 8000, 2000, 3000],
  };

  const options: any = {
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        type: "category",
        labels: ["1/2024", "2/2024", "3/2024", "4/2024", "5/2024", "6/2024"],
      },
      y: {
        beginAtZero: true,
        ticks: {
          // Format y-axis labels to show 'k' for thousands
          callback: function (value: number) {
            if (value >= 1000) {
              return `${value / 1000}k`;
            }
            return value;
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom", // Place the legend at the bottom of the chart
        labels: {
          boxWidth: 20, // Width of the colored box in the legend
          padding: 15, // Padding between the legend items
        },
      },
      title: {
        display: false,
        text: "Monthly Sales Data",
      },
    },
  };

  const chartData = {
    labels: ["1/2024", "2/2024", "3/2024", "4/2024", "5/2024", "6/2024"],
    datasets: [
      {
        label: "Web Sellings",
        data: data.webSellings,
        borderColor: "#76aed7",
        backgroundColor: "#76aed7",
      },
      {
        label: "Offline Sellings",
        data: data.offlineSellings,
        borderColor: "#0074e4",
        backgroundColor: "#0074e4",
      },
    ],
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default SalesChart;
