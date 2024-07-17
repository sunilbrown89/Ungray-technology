// components/SalesChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesChart: React.FC = () => {
  const series = [
    {
      name: "Web Selling",
      data: [
        200, 6000, 4000, 5000, 6000, 200, 6000, 4000, 5000, 6000, 200, 6000,
        4000, 5000, 6000, 200, 6000, 4000, 5000, 6000,
      ],
    },
    {
      name: "Offline Sell",
      data: [
        2000, 3000, 4000, 8000, 2000, 3000, 4000, 8000, 2000, 3000, 4000, 8000,
        2000, 3000, 4000, 8000, 2000, 3000, 4000, 8000,
      ],
    },
  ];

  const options: any = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false, // Hide zoom and other options
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    yaxis: {
      min: 0,
      max: 8000,
      tickAmount: 2,
      labels: {
        formatter: (value: number) => `${value / 1000}k`,
      },
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    colors: ["#0000FF", "#76aed7"], // Blue and green lines
    legend: {
      show: true, // Show legend
      position: "bottom", // Position legend at the bottom
      horizontalAlign: "start", // Align legend to the center
      markers: {
        shape: "Rectangle", // Change legend marker shape to square
      },
      onItemClick: {
        toggleDataSeries: false, // Allow toggling of series visibility
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
        // width={200}
      />
    </div>
  );
};

export default SalesChart;
