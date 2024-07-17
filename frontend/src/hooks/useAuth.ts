import { BASE_URL, getFromLocalStorage, removeFromLocalStorage } from "@/utils";
import { create } from "zustand";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<UserType>;
  setUser: (user: Partial<UserType>) => Promise<void>;
  logout: () => void;
  getUser: () => void;
};
const useAuth = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4",
    role: "admin",
    email: "ungray@.com",
    name: "Admin",
    id: "diewgygdiqudgi",
  },
  setUser: async (user: Partial<UserType>) => {
    set({ user: { ...user } });
  },
  logout() {
    set({ user: undefined });
    typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    if (!accessToken) {
      set({
        user: {
          avatar:
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4",
          role: "admin",
          email: "ungray@.com",
          name: "Admin",
        },
        isUserLoading: false,
      });
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/user/self`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res?.status) {
        window?.localStorage?.removeItem("ACCESS_TOKEN");
        set({
          user: {
            avatar:
              "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4",
            role: "admin",
            email: "ungray@.com",
            name: "Admin",
          },
          isUserLoading: false,
        });
      }
      if (res?.status) {
        const data = await res.json();
        const userData = data?.data;
        set({
          user: {
            avatar:
              "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4",
            role: "admin",
            email: "ungray@.com",
            name: "Admin",
          },
          isUserLoading: false,
        });
      }
    } catch (error) {
      set({
        user: {
          avatar:
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4",
          role: "admin",
          email: "ungray@.com",
          name: "Admin",
        },
      });
    }
  },
}));

export default useAuth;
