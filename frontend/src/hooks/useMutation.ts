import { BASE_URL, getFromLocalStorage } from "@/utils";
import { useState } from "react";
import { toast } from "react-toastify";

export const getAccessToken = () => {
  return typeof window !== "undefined"
    ? typeof getFromLocalStorage("ACCESS_TOKEN") === "string"
      ? getFromLocalStorage("ACCESS_TOKEN")!
      : null
    : null;
};

type MutationOptions = {
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  isFormData?: boolean;
  BASE_URL?: string;
  body?: any;
  isAlert?: boolean;
};

const useMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = async (path: string, options?: MutationOptions) => {
    try {
      const token = getAccessToken();
      const url = options?.BASE_URL || BASE_URL;
      setIsLoading(true);
      const method = options?.method || "POST";
      const body = options?.body
        ? options?.isFormData
          ? options?.body
          : JSON.stringify(options.body)
        : `{}`;
      const headers: HeadersInit = options?.isFormData
        ? {}
        : { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const response = await fetch(`${url}/${path}`, {
        method,
        headers,
        body,
      });

      const status = response.status;
      const results = await response.json();
      if (options?.isAlert && !results?.success)
        toast.error(results?.error?.message);
      if (options?.isAlert && results?.success) toast.success(results?.message);
      setIsLoading(false);
      return { results, status };
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };
  return { mutation, isLoading };
};

export default useMutation;
