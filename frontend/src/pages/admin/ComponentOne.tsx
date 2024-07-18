import { useSwr } from "@/hooks";
import React, { useEffect } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const ComponentOne = () => {
  const { data: component1, isValidating: component1IsValidating } = useSwr(
    `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/`
  );
  // console.log("component1", component1);
  // const localhostNmae = location.hostname.includes("localhost");
  // console.log("localhostNmae--->", localhostNmae);
  // useEffect(() => {
  //   location.hostname.includes("localhost");
  // });
  return (
    <div className="bg-white  p-6 ">
      <div className="flex flex-col xl:flex-row gap-y-4 justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex justify-end gap-2 items-center">
          <div>
            <p className="font-semibold">Compare to</p>
          </div>
          <div className="">
            <select
              name=""
              id=""
              className="border px-3 py-2 rounded-2xl font-semibold"
            >
              <option className="font-semibold" value="Last Year">
                Last Year
              </option>
              <option className="font-semibold" value="Previous Year">
                Previous Year
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col gap-2 border-2 p-2 rounded-xl">
          <p className="text-md font-semibold text-gray-400">Purchases</p>
          <div className="flex gap-2">
            <p className="font-bold  text-xl">
              {/*<------------ due to api issues i hardcoded in or operator value-----------> */}
              {component1?.data?.purchases || 4934}
            </p>
            <div className="border border-green-300 flex gap-2 items-center bg-green-200 rounded-full px-2 text-green-500">
              <p>
                <span>+</span>
                <span>32%</span>
              </p>
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 p-2 rounded-xl">
          <p className="text-md font-semibold text-gray-400">Revenue</p>
          <div className="flex gap-2">
            <p className="font-bold  text-xl">
              {/*<------------ due to api issues i hardcoded in or operator value-----------> */}
              ${component1?.data?.revenue || 322000}
            </p>
            <div className="border border-green-300 flex gap-2 items-center bg-green-200 rounded-full px-2 text-green-500">
              <p>
                <span>+</span>
                <span>49%</span>
              </p>
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 p-2 rounded-xl">
          <p className="text-md font-semibold text-gray-400">Refunds</p>
          <div className="flex gap-2">
            <p className="font-bold  text-xl">
              {/*<------------ due to api issues i hardcoded in or operator value-----------> */}
              ${component1?.data?.refunds || 8200}
            </p>
            <div className="border border-red-300 flex gap-2 items-center bg-red-200 rounded-full px-2 text-red-500">
              <p>
                <span>+</span>
                <span>7%</span>
              </p>
              <FaArrowTrendDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
