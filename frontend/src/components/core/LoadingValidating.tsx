import React from "react";

const LoadingValidating = ({ height }: any) => {
  //   console.log("height:", height);
  return (
    <div className={`flex justify-center items-center h-[${height}px]`}>
      <div className="loader ease-linear rounded-full border-t-4 border-blue-500 border-solid h-12 w-12 animate-spin"></div>
      <div
        id="loaderText"
        className="inset-0 flex items-center justify-center text-blue-500 font-bold"
      ></div>
    </div>
  );
};

export default LoadingValidating;
