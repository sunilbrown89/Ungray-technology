// import { BASE_URL, getFromLocalStorage } from "@/utils";
// import useSWR, { SWRConfiguration } from "swr";

// const useSwr = (url: string | null, options?: SWRConfiguration) => {
//   const accessToken = getFromLocalStorage("ACCESS_TOKEN");
//   const fetcher = async (url: string) => {
//     const headers: {
//       Authorization?: string;
//       "Content-Type"?: string;
//     } = {};
//     headers["Authorization"] = `Basic dHJpYWw6YXNzaWdubWVudDEyMw==`;
//     headers["Content-Type"] = "application/json";
//     const res = await fetch(url, {
//       method: "GET",
//       headers,
//     });
//     const data = await res.json();
//     return { data, res };
//   };
//   const { data, error, mutate, isValidating } = useSWR(
//     url ? [`${BASE_URL}/${url}`] : null,
//     fetcher,
//     {
//       ...options,
//       revalidateOnFocus: false,
//     }
//   );
//   return {
//     data,
//     error,
//     isValidating,
//     mutate,
//   };
// };

// export default useSwr;

import { getFromLocalStorage } from "@/utils";
import useSWR, { SWRConfiguration } from "swr";

const useSwr = (url: string | null, options?: SWRConfiguration) => {
  const accessToken = getFromLocalStorage("ACCESS_TOKEN");

  const fetcher = async (url: string) => {
    const headers: {
      Authorization?: string;
      "Content-Type"?: string;
    } = {};

    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      headers["Authorization"] = `Basic dHJpYWw6YXNzaWdubWVudDEyMw==`;
    }

    headers["Content-Type"] = "application/json";

    try {
      const res = await fetch(url, {
        method: "GET",
        headers,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error fetching data");
      }

      const data = await res.json();
      return { data, res };
    } catch (error) {
      console.error("Fetcher Error:", error);
      throw error;
    }
  };

  const { data, error, mutate, isValidating } = useSWR(url, fetcher, {
    ...options,
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    isValidating,
    mutate,
  };
};

export default useSwr;
