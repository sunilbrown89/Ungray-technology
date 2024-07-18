import { AdminLayout } from "@/layouts";
import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentSix from "./ComponentSix";
import ComponentThree from "./ComponentThree";
import ComponentFour from "./ComponentFour";
import ComponentFive from "./ComponentFive";

const Admin = () => {
  return (
    <AdminLayout title="Dashboard">
      <section className="main-container w-full ">
        <article className="flex flex-col xl:flex-row gap-4 ">
          <div className="bg-white rounded-lg p-6 flex flex-col gap-y-3  xl:w-[70%]">
            <ComponentOne />
            <ComponentTwo />
            <ComponentSix />
          </div>
          <div className="xl:w-[30%] flex flex-col gap-x-4 gap-y-4">
            <ComponentThree />
            <ComponentFour />
            <ComponentFive />
          </div>
        </article>
      </section>
    </AdminLayout>
  );
};

export default Admin;
