/* eslint-disable @next/next/no-img-element */
import { Collapse, Drawer } from "@/components/core";
import { useMenuItems } from "@/hooks";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoChevronForwardOutline } from "react-icons/io5";

const ResponsiveAppDrawer = ({
  responsiveExpand,
  setResponsiveExpand,
}: {
  responsiveExpand: boolean;
  setResponsiveExpand: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState("");
  const menuItems = useMenuItems();
  const { push, asPath } = useRouter();
  const handleMatchOpen = (title: string, route?: string | undefined) => {
    if (route) return push(route);
    setOpen((prev) => (prev === title ? "" : title));
  };

  const handleLogout = () => {
    setResponsiveExpand(false);
    // logout();
    push("/");
  };

  return (
    <Drawer
      open={responsiveExpand}
      onClose={() => setResponsiveExpand(false)}
      anchor="left"
      drawerStyle="w-[75vw] md:w-[40vw] h-screen !bg-gray-300"
    >
      <div className="flex flex-col gap-5 pb-6 min-h-screen bg-gray-300 text-black">
        {/* <div className={`py-2`}>
          <img src="/sy-logo.png" alt="logo" className="w-28" />
        </div> */}
        {/* <div className={`h-9 w-28`}></div> */}
        <div
          className={`pl-6 py-3.5 border-b border-light/30 sticky top-0 z-40 bg-gray-300 w-full items-center `}
        >
          <div
            className=" flex gap-2 items-center -ml-1"
            onClick={() => push("/admin")}
          >
            <AiFillExclamationCircle className="w-6 h-6" />
            <p className="font-bold text-lg">Salesway</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 pl-4">
          {menuItems?.map((groupData: any, ind: any) => (
            <div key={ind} className="flex flex-col !gap-4">
              {groupData?.haveGroup ? (
                <div className={`px-3 text-[11px] font-thin uppercase`}>
                  {groupData?.title}
                </div>
              ) : null}
              <div className="w-full flex flex-col gap-6">
                {groupData?.data?.map((_: any, index: number) => (
                  <div className="w-full" key={index * 2}>
                    <div
                      onClick={() => handleMatchOpen(_?.title, _?.route)}
                      className={`w-full relative text-sm font-medium group common-transition flex items-center justify-between py-1 ${
                        !_?.route
                          ? _?.submenu?.some(
                              (data: any) => data?.route === asPath
                            )
                            ? "bg-light text-pink-blue"
                            : open === _?.title
                            ? "text-white"
                            : "hover:text-white"
                          : _?.route === asPath && "bg-light text-pink-blue"
                      } relative rounded-l-3xl cursor-pointer ${
                        responsiveExpand ? "pr-4 pl-1" : ""
                      }`}
                    >
                      {_?.submenu?.some(
                        (data: any) => data?.route === asPath
                      ) || _?.route === asPath ? (
                        <>
                          <div className="absolute z-10 h-11 w-6 top-1/2 right-0 bg-light flex items-end">
                            <div className="h-1/2 w-full bg-gray-300 rounded-tr-lg md:rounded-tr-xl"></div>
                          </div>
                          <div className="absolute z-10 h-11 w-6 bottom-1/2 right-0 bg-light flex items-start">
                            <div className="h-1/2 w-full bg-gray-300 rounded-br-lg md:rounded-br-xl"></div>
                          </div>
                        </>
                      ) : null}

                      <div className={`w-full flex items-center gap-3`}>
                        <div
                          className={`poppins ${
                            _?.route === asPath ||
                            _?.submenu?.some(
                              (data: any) => data?.route === asPath
                            )
                              ? "h-9 w-9 text-lg rounded-full bg-quinary flex items-center justify-center text-white shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                              : "text-xl"
                          }`}
                        >
                          {_?.icon}
                        </div>
                        <div
                          className={`poppins ${
                            _?.route === asPath ? "font-semibold" : ""
                          }`}
                        >
                          {_?.title}
                        </div>
                      </div>
                      {_?.submenu ? (
                        <IoChevronForwardOutline
                          className={`${
                            open === _?.title ? "rotate-90" : ""
                          } common-transition z-20`}
                        />
                      ) : null}
                    </div>
                    {_?.submenu ? (
                      <div
                        className={`w-full flex flex-col ${
                          open === _?.title ? "gap-1 py-2" : ""
                        }`}
                      >
                        {_?.submenu?.map((curData: any, x: number) => (
                          <Collapse open={open === _?.title} key={x}>
                            <div
                              onClick={() => push(curData?.route)}
                              className={`w-full ripple flex items-center gap-3 py-2 rounded-lg text-sm cursor-pointer ${
                                responsiveExpand ? "px-3" : ""
                              } ${
                                curData?.route === asPath
                                  ? "text-white"
                                  : "hover:text-white"
                              } `}
                            >
                              <div className="poppins">{curData?.icon}</div>
                              <div className="poppins">{curData?.title}</div>
                            </div>
                          </Collapse>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default ResponsiveAppDrawer;
