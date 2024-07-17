import Head from "next/head";
import { useState } from "react";
import AppDrawer from "./AppDrawer";
import BottomAppDrawer from "./BottomAppDrawer";
import ResponsiveAppDrawer from "./ResponsiveAppDrawer";

type Props = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  description?: string;
  ogImage?: string;
};
const AppLayout = ({
  title = "Welcome To Your Panel",
  children = <></>,
  description,
  ogImage,
}: Props) => {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState<boolean>(true);
  const [responsiveExpand, setResponsiveExpand] = useState<boolean>(false);

  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title || "Welcome to your pannel"}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>

      <main className="relative w-full bg-light flex">
        <BottomAppDrawer
          responsiveExpand={responsiveExpand}
          setResponsiveExpand={setResponsiveExpand}
        />
        <div
          className={` hidden lg:block sticky top-0 overflow-y-scroll h-screen scroll-bar-none ${
            isAppDrawerOpen ? "w-64" : "w-14"
          }`}
        >
          <AppDrawer
            isAppDrawerOpen={isAppDrawerOpen}
            setIsAppDrawerOpen={setIsAppDrawerOpen}
          />
        </div>
        <div className="lg:hidden">
          <ResponsiveAppDrawer
            responsiveExpand={responsiveExpand}
            setResponsiveExpand={setResponsiveExpand}
          />
        </div>

        <section
          className={`h-screen delay-animation overflow-y-scroll scroll_bar-none md:custom-container ${
            isAppDrawerOpen
              ? "w-full lg:w-[calc(100%-15rem)]"
              : "w-full lg:w-[calc(100%-3.5rem)]"
          } `}
        >
          <div className={`pt-5 pb-20 md:py-8 lg:py-6`}>{children}</div>
        </section>
      </main>
    </>
  );
};

export default AppLayout;
