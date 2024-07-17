import SalesChart from "../../components/Analytics/SalesChart";
import React from "react";

const ComponentFour = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3">
      <div>
        <p className="text-xl font-semibold">Customers by device</p>
      </div>
      <div className="-ml-4">
        <div className="w-full">{/* <SalesChart /> */}</div>
      </div>
    </div>
  );
};

export default ComponentFour;
