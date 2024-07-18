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
interface Props {
  dynamicData: any;
}
const SalesChart: React.FC<Props> = ({ dynamicData }) => {
  // console.log("dynamicData---->", dynamicData);
  const data: SalesData = {
    webSellings: dynamicData?.map((item: any) => item?.web_sales) || [],
    offlineSellings: dynamicData?.map((item: any) => item?.offline_sales) || [],
  };

  const options: any = {
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        type: "category",
        labels: dynamicData?.map((item: any) => item?.date) || [],
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
    labels: dynamicData?.map((item: any) => item?.date) || [],
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
