import React from "react";
import { Tooltip } from "@mui/material";
import { useSwr } from "@/hooks";

const ComponentFive = () => {
  const { data: component5, isValidating: component5IsValidating } = useSwr(
    `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/`
  );
  const NegativeData = component5?.data?.negative || 67;
  const NeutralData = component5?.data?.neutral || 10;
  const PositiveData = component5?.data?.positive || 13;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-y-6 ">
      <div>
        <h4 className="text-sm font-semibold text-gray-400">
          Community Feedback
        </h4>
        <h2 className="text-xl font-semibold pt-2">Mostly Positive</h2>
      </div>

      <div className="flex gap-1">
        <Tooltip
          title={`Negative: ${NegativeData}%`}
          className="hover:cursor-pointer"
        >
          <div
            className={` bg-black rounded-full h-2.5 dark:bg-gray-700`}
            style={{ width: `${NegativeData}%` }}
          >
            <div
              className="bg-red-600 h-2.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          title={`Neutral: ${NeutralData}%`}
          className="hover:cursor-pointer"
        >
          <div
            className={` bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}
            style={{ width: `${NeutralData}%` }}
          >
            <div
              className="bg-yellow-600 h-2.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          title={`Positive: ${PositiveData}%`}
          className="hover:cursor-pointer"
        >
          <div
            className={` bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}
            style={{ width: `${PositiveData}%` }}
          >
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </Tooltip>
      </div>
      <div className="flex gap-6 ">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-red-600">Negative</p>{" "}
          <p className="font-bold">{NegativeData}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-yellow-600">Neutral</p>{" "}
          <p className="font-bold">{NeutralData}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-green-600">Positive</p>{" "}
          <p className="font-bold">{PositiveData}</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentFive;
