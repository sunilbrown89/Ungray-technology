import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CircularGaugeProps {
  series: any;
}
const CicularGuage: React.FC<CircularGaugeProps> = ({ series }) => {
  const options: any = {
    chart: {
      height: 120,
      type: "radialBar",
    },
    // series: series,
    colors: ["#31c0f5"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#dee0eb",
          startAngle: -90,
          endAngle: 90,
          strokeWidth: "100%",
        },
        hollow: {
          margin: 5,
          size: "70%", // Adjust this value to control the thickness
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "40px",
            fontWeight: "bold",
            offsetY: 6,
            formatter: (val: any) => {
              return val.toFixed(0); // Remove the percentage sign and show the value as an integer
            },
            show: true,
          },
        },
      },
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "horizontal",
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };
  return (
    <div>
      <Chart options={options} series={series} type="radialBar" width="350" />
    </div>
  );
};

export default CicularGuage;
