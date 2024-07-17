import { Options } from "@material-table/core";
import { toast } from "react-toastify";
export const MuiTblOptions = () => {
  const options: Options<any> = {
    headerStyle: {
      whiteSpace: "nowrap",
      backgroundColor: "rgb(162 163 232 / 35%)",
      color: "#13AF82",
      fontWeight: "bold",
      fontSize: "0.9rem",
      fontFamily: "inherit",
    },
    rowStyle: {
      backgroundColor: "#fff",
      color: "#2e2929",
      fontWeight: "500",
      fontSize: "0.9rem",
    },
    actionsColumnIndex: -1,
    addRowPosition: "first",
    pageSize: 5,
    detailPanelColumnAlignment: "right",
    exportAllData: true,
    headerSelectionProps: { color: "secondary" },
    selectionProps: () => ({
      color: "secondary",
    }),
  };
  return options;
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

//? SET To LocalStorage
export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: string) => {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) ?? null
    : null;
};

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const sweetAlertCustomStyles =
  "rgba(76, 78, 100, 0.2) 0px 6px 6px -3px, rgba(76, 78, 100, 0.14) 0px 10px 14px 1px, rgba(76, 78, 100, 0.12) 0px 4px 18px 3px;";

export const notify = {
  success: (message: string) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
  error: (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
  info: (message: string) =>
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
  warning: (message: string) =>
    toast.warning(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
};
