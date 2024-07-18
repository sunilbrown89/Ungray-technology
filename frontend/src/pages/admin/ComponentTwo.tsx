import React, { useEffect, useState } from "react";
import ComparisonYearGraph from "@/components/Analytics/ComparisonYearGraph";
import { LoadingValidating } from "@/components/core";
import { useSwr } from "@/hooks";

const ComponentTwo = () => {
  const { data: component2, isValidating: component2IsValidating } = useSwr(
    `https://ungray-technology.onrender.com/comparisons`
  );
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    if (component2 && !component2IsValidating) {
      setCachedData(component2 as any);
    }
  }, [component2, component2IsValidating]);

  const series = component2?.data?.comparisonYearData;

  return (
    <div className="flex gap-6">
      <div className="bg-white p-6 w-full flex flex-col gap-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Comparison</h2>
          <div>
            <select className="border px-3 py-2 rounded-2xl font-semibold">
              <option className="font-semibold" value="6 Months">
                6 Months
              </option>
            </select>
          </div>
        </div>
        {component2IsValidating && !cachedData ? (
          <div>
            <LoadingValidating height={300} />
          </div>
        ) : (
          <div>
            <ComparisonYearGraph series={series} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentTwo;
