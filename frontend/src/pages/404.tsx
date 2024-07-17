import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 bg-gradient-to-b from-quinary to-dark justify-center items-center h-screen ">
      <div className="w-full flex items-center justify-center">
        <img
          src="https://aeroland-react.pages.dev/static/media/page-404-image.ccbce8727c0cccab5b82.png"
          alt="image"
          className="w-2/5"
        />
      </div>
      <div className="flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="lead-page-title text-white">Oops! Page not found!</h1>
        <button
          onClick={() => push("/admin")}
          className="px-8 py-4 text-white rounded-lg bg-gradient-to-br from-quinary to-quinary"
        >
          Go back to homepage
        </button>
      </div>
    </div>
  );
}
