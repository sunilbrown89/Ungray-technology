import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

// Dynamically import the chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface MonthlyGraphProps {
  _id: string;
  month: string;
  this_year: number;
  last_year: number;
}

interface ComparisonYearGraphProps {
  series: MonthlyGraphProps[];
}

const ComparisonYearGraph: React.FC<ComparisonYearGraphProps> = ({
  series,
}: any) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: series?.map((item: MonthlyGraphProps) => item.month),
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
        data: series?.map((item: MonthlyGraphProps) => item.last_year),
      },
      {
        name: "This Year",
        data: series?.map((item: MonthlyGraphProps) => item.this_year),
      },
    ],
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={310}
      />
    </div>
  );
};

export default ComparisonYearGraph;
