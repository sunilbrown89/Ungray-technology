import ComparisonYearGraph from "@/components/Analytics/ComparisonYearGraph";
import { useSwr } from "@/hooks";
import React from "react";

const ComponentTwo = () => {
  const { data: component2, isValidating: component2IsValidating } = useSwr(
    `http://localhost:8080/comparisons`
  );
  // console.log("component2", component2?.data?.comparisonYearDatas);
  const series = component2?.data?.comparisonYearData;
  // ];
  return (
    <div className=" flex  gap-6">
      <div className="bg-white p-6 w-full flex flex-col gap-6">
        <div className="flex  justify-between">
          <h2 className="text-xl font-semibold">Comparison</h2>
          <div className="">
            <select
              name=""
              id=""
              className="border px-3 py-2 rounded-2xl font-semibold"
            >
              <option className="font-semibold" value="6 Months">
                6 Months
              </option>
            </select>
          </div>
        </div>
        <div>
          <ComparisonYearGraph series={series} />
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;
