import { ToastContainer, Flip } from "react-toastify";
import { Router, useRouter } from "next/router";
import nProgress from "nprogress";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "react-quill/dist/quill.snow.css";
import "@/styles/globals.css";
import "@/styles/loader.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  const { getUser } = useAuth();
  const { asPath } = useRouter();
  useEffect(() => {
    getUser();
  }, [asPath, getUser]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Flip}
        pauseOnHover
        theme="light"
      />
      <Component {...pageProps} />
    </>
  );
}
