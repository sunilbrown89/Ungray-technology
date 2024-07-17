import { AiOutlineCaretRight, AiOutlineMoneyCollect } from "react-icons/ai";
import {
  BiArchiveIn,
  BiExpandAlt,
  BiLogoStackOverflow,
  BiMoneyWithdraw,
  BiNotepad,
  BiNotification,
  BiSolidAnalyse,
  BiSolidReport,
  BiTachometer,
  BiUpload,
} from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

const useMenuItems = () => {
  return [
    {
      data: [
        {
          title: "Settings",
          icon: <IoSettingsOutline />,
          route: "/admin/settings",
        },

        {
          title: "Teams",
          icon: <IoPeopleOutline />,
          route: "/admin/teams",
        },
      ],
    },
    {
      data: [
        {
          title: "Dashboard",
          route: "/admin",
          icon: <LuLayoutDashboard />,
        },
      ],
    },
    {
      data: [
        {
          title: "Campaigns",
          icon: <AiOutlineMoneyCollect />,
          route: "/admin/campaigns",
        },

        {
          title: "Flows",
          icon: <FaRegMoneyBillAlt />,
          route: "/admin/flows",
        },
        {
          title: "Integration",
          icon: <BiTachometer />,
          route: "/admin/integration",
        },
        {
          title: "Customers",
          icon: <BiExpandAlt />,
          route: "/admin/customers",
        },
      ],
    },

    {
      data: [
        {
          title: "Notifications",
          icon: <BiNotification />,
          submenu: [
            {
              title: "Schedule Notifications",
              route: "/admin/notifications/schedule",
              icon: <AiOutlineCaretRight />,
            },
            {
              title: "View Notifications",
              route: "/admin/notifications",
              icon: <AiOutlineCaretRight />,
            },
          ],
        },
      ],
    },
  ];
};

export default useMenuItems;
