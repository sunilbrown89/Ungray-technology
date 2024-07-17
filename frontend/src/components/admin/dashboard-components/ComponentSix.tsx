import React from "react";

const ComponentSix = () => {
  interface TopProductsTypes {
    id: number;
    product: string;
    soldAmount: string;
    unitPrice: string;
    rating: string;
    revenue: string;
  }
  const topProducts: TopProductsTypes[] = [
    {
      id: 1,
      product: "Camera Mi 36",
      soldAmount: "432",
      unitPrice: "$120",
      rating: "4.81",
      revenue: "$51,320",
    },
    {
      id: 2,
      product: "Message Gun",
      soldAmount: "120",
      unitPrice: "$60",
      rating: "3.44",
      revenue: "$23,901",
    },
    {
      id: 3,
      product: "Redmi Note 9",
      soldAmount: "190",
      unitPrice: "$87.6",
      rating: "2.5",
      revenue: "$87,211",
    },
    {
      id: 3,
      product: "Oneplus Nord",
      soldAmount: "140",
      unitPrice: "$24.1",
      rating: "4.65",
      revenue: "$29,809",
    },
  ];
  return (
    <div className="bg-white  p-6">
      <div className="flex justify-between ">
        <h3 className="text-xl font-semibold">Top Products</h3>
        <div className="rounded-2xl border px-3 py-2">
          <p className="font-semibold">Full Result</p>
        </div>
      </div>
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
          {topProducts.map((item: TopProductsTypes) => (
            <div key={item?.id} className="grid grid-cols-12   ">
              <div className="col-span-4 font-semibold">
                <span className="p-3 rounded-md bg-gray-200">
                  {" "}
                  {item?.product[0]}
                </span>{" "}
                &nbsp;
                {item?.product}
              </div>
              <div className="col-span-2 font-medium text-gray-500">
                {item?.soldAmount}
              </div>
              <div className="col-span-2 font-medium text-gray-500">
                {item?.unitPrice}
              </div>
              <div className="col-span-2 font-medium text-gray-500">
                {item?.revenue}
              </div>
              <div className="col-span-2 font-medium text-gray-500">
                <span className="text-yellow-500">&#9733;</span> {item?.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentSix;
