import SalesChart from "@/components/Analytics/SalesChart";
import { LoadingValidating } from "@/components/core";
import { useSwr } from "@/hooks";
import React, { useEffect, useState } from "react";

const ComponentFour = () => {
  const { data: component4, isValidating: component4IsValidating } = useSwr(
    `https://ungray-technology.onrender.com/customerSells`
  );
  const [cachedData, setCachedData] = useState(null);
  // console.log("component4", component4?.data?.customerSellData);
  useEffect(() => {
    if (component4 && !component4IsValidating) {
      setCachedData(component4 as any);
    }
  }, [component4, component4IsValidating]);
  const dynamicData = component4?.data?.customerSellData;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3">
      <div>
        <p className="text-xl font-semibold">Customers by device</p>
      </div>
      {component4IsValidating && !cachedData ? (
        <div>
          <LoadingValidating height={300} />
        </div>
      ) : (
        <div className="-ml-4">
          <div className="w-full">
            <SalesChart dynamicData={dynamicData as any} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentFour;
