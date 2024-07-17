import React from "react";
import ComparisonYearGraph from "../../Analytics/ComparisonYearGraph";

const ComponentTwo = () => {
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
          <ComparisonYearGraph />
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;
