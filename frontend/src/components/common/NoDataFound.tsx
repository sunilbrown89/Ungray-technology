import Lottie from "react-lottie";
import { CSSProperties } from "react";
import { NoDataFoundJson } from "@/assets/lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NoDataFoundJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function NoDataFound({
  title,
  lottieClass,
  titleClass,
}: {
  title?: string;
  lottieClass?: CSSProperties;
  titleClass?: string;
}) {
  return (
    <div className="w-full h-full items-center justify-center">
      <Lottie
        style={lottieClass}
        options={defaultOptions}
        height={300}
        width={350}
      />
      <div
        className={`${titleClass} -translate-y-5 font-medium dashboard-title text-center`}
      >
        {title || `No Data Found`}
      </div>
    </div>
  );
}
