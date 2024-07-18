import { LoadingValidating } from "@/components/core";
import { useSwr } from "@/hooks";
import React, { useEffect, useState } from "react";

interface TopProductsTypes {
  id: number;
  product_name: string;
  sold_amount: string;
  unit_price: string;
  rating: string;
  revenue: string;
}
const ComponentSix = () => {
  const { data: component6, isValidating: component6IsValidating } = useSwr(
    `https://ungray-technology.onrender.com/topProducts`
  );
  const [cachedData, setCachedData] = useState(null);
  useEffect(() => {
    if (component6 && !component6IsValidating) {
      setCachedData(component6 as any);
    }
  }, [component6, component6IsValidating]);
  // console.log("component6", component6?.data?.topProductData);
  const topProductData = component6?.data?.topProductData;
  return (
    <div className="bg-white  p-6 ">
      <div className="flex justify-between ">
        <h3 className="text-xl font-semibold">Top Products</h3>
        <div className="rounded-2xl border px-3 py-2">
          <p className="font-semibold">Full Result</p>
        </div>
      </div>
      {component6IsValidating && !cachedData ? (
        <div>
          <LoadingValidating height={300} />
        </div>
      ) : (
        <div className="h-[300px] overflow-x-auto ">
          <div className="grid grid-cols-12  w-[700px] pt-6 pb-3">
            <div className="text-sm font-semibold text-gray-400 col-span-4">
              Product{" "}
            </div>
            <div className="text-sm font-semibold text-gray-400 col-span-2">
              Sold amount{" "}
            </div>
            <div className="text-sm font-semibold text-gray-400 col-span-2">
              Unit price
            </div>
            <div className="text-sm font-semibold text-gray-400 col-span-2">
              Revenue
            </div>
            <div className="text-sm font-semibold text-gray-400 col-span-2">
              Rating
            </div>
          </div>
          <hr className="text-gray-300 " />
          <div className=" pt-6 pb-3 flex flex-col w-[700px] overflow-y-auto gap-y-9">
            {topProductData?.map((item: TopProductsTypes) => (
              <div key={item?.id} className="grid grid-cols-12   ">
                <div className="col-span-4 font-semibold">
                  <span className="p-3 rounded-md bg-gray-200">
                    {" "}
                    {item?.product_name[0]}
                  </span>{" "}
                  &nbsp;
                  {item?.product_name}
                </div>
                <div className="col-span-2 font-medium text-gray-500">
                  {item?.sold_amount}
                </div>
                <div className="col-span-2 font-medium text-gray-500">
                  {item?.unit_price}
                </div>
                <div className="col-span-2 font-medium text-gray-500">
                  {item?.revenue}
                </div>
                <div className="col-span-2 font-medium text-gray-500">
                  <span className="text-yellow-500">&#9733;</span>{" "}
                  {item?.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentSix;
