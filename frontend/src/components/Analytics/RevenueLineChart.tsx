import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
interface MonthlyRevenueChartProps {
  months: string[];
  revenue: number[];
}
const RevenueLineChart = ({ months, revenue }: MonthlyRevenueChartProps) => {
  const options: ApexOptions = {
    chart: {
      id: "monthly-revenue-chart",
    },
    xaxis: {
      categories: months,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
    },
  };

  const series = [
    {
      name: "Monthly Revenue",
      data: revenue,
    },
  ];
  return (
    <div>
      <ApexCharts options={options} series={series} type="bar" height={280} />
    </div>
  );
};

export default RevenueLineChart;
