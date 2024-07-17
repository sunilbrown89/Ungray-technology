import CicularGuage from "@/components/Analytics/CicularGuage";
import { useSwr } from "@/hooks";
import React from "react";

const ComponentThree = () => {
  const { data: component3 } = useSwr(`sample_assignment_api_3/`);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3 items-center">
      <div className=" flex flex-col items-center">
        <div className="">
          <CicularGuage series={[component3?.data?.score]} />
        </div>
        <p className=" -mt-14 text-2xl font-bold text-gray-400">
          of 100 points
        </p>
      </div>
      <div className=" w-full text-gray-300 border-2 rounded-md"></div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">{component3?.data?.title}</p>
          <p className="font-normal text-lg text-gray-400">
            {component3?.data?.message}
          </p>
        </div>
        <div className="text-lg font-semibold flex items-center ">
          <p className="border-2 border-gray-300 rounded-full px-3 py-1.5">
            Improove your score
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
