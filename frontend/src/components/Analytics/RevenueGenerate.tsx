import { ICONS } from "@/assets";
import RevenueLineChart from "./RevenueLineChart";

interface CardData {
  id: string;
  title: string;
  revenue: string;
  icon: JSX.Element;
}
const Revenuecardsdata: CardData[] = [
  {
    id: "1",
    title: "Total Revenue ",
    revenue: "$ 9K",
    icon: <ICONS.Facebook />,
  },
  {
    id: "2",
    title: "Monthly Revenue",
    revenue: "$ 40K",
    icon: <ICONS.Facebook />,
  },
  {
    id: "3",
    title: " Weekly Revenue",
    revenue: "$ 1200k",
    icon: <ICONS.Facebook />,
  },
];
const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]; // Replace with your month data
const revenue: number[] = [
  1000, 1200, 800, 1500, 2000, 3000, 4100, 4500, 6000, 3000, 7000, 3300,
]; // Replace with your revenue data

const RevenueGenerate = () => {
  return (
    <section>
      <div className="mt-6 ">
        {/* <SectionTitle title="Subscription Monthly Revenue " /> */}
      </div>
      <div className="mt-6  flex md:flex-row flex-col gap-6">
        <div className="w-full md:w-[30%] flex flex-col gap-3 ">
          {Revenuecardsdata?.map((item, index) => (
            <div
              key={item?.id}
              className="bg-white p-6 shadow-lg rounded-lg flex  items-center gap-6 "
            >
              <div
                className={`text-2xl h-14 w-14 flex justify-center items-center rounded-full  ${
                  index === 0
                    ? "bg-green-400/40 text-green-500"
                    : index === 1
                    ? "bg-red-500/40 text-red-500"
                    : "bg-sky-500/40 text-sky-500"
                }`}
              >
                {item?.icon}
              </div>
              <div>
                <p className="text-gray-600">{item?.title}</p>
                <p className="text-gray-600 text-2xl font-bold">
                  {item?.revenue}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 shadow-lg w-full md:w-[70%]">
          <RevenueLineChart months={months} revenue={revenue} />
        </div>
      </div>
    </section>
  );
};

export default RevenueGenerate;
