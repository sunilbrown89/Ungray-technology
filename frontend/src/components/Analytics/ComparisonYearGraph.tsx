import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

// Dynamically import the chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface MonthlyGraphProps {
  id: string;
  month: string;
  thisYear: number;
  lastYear: number;
}

// Sample data
const data: MonthlyGraphProps[] = [
  { id: "1", month: "Jan", thisYear: 6000, lastYear: 5000 },
  { id: "2", month: "Feb", thisYear: 2000, lastYear: 10000 },
  { id: "3", month: "Mar", thisYear: 4000, lastYear: 20000 },
  { id: "4", month: "Apr", thisYear: 21000, lastYear: 32000 },
  { id: "5", month: "May", thisYear: 9200, lastYear: 12000 },
  { id: "6", month: "Jun", thisYear: 8700, lastYear: 13000 },
];

const ComparisonYearGraph: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: data.map((item) => item.month),
      labels: {
        show: true, // Show x-axis labels
        style: {
          colors: "#6c757d", // Customize label color
          fontSize: "12px", // Customize font size
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#76aed7", "#0074e4"], // Sky color for Last Year, Blue for This Year
    plotOptions: {
      bar: {
        borderRadius: 5, // Set the corner radius for rounded columns
        horizontal: false, // Ensure bars are vertical
        columnWidth: "50%", // Adjust column width
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return value / 1000 + " k";
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    // Order the series in the legend
    series: [
      {
        name: "Last Year",
        data: data.map((item) => item.lastYear),
      },
      {
        name: "This Year",
        data: data.map((item) => item.thisYear),
      },
    ],
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={280}
      />
    </div>
  );
};

export default ComparisonYearGraph;
