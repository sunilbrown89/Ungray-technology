/* eslint-disable @next/next/no-img-element */
import { AdminLayout } from "@/layouts";
import ComponentTwo from "@/components/admin/dashboard-components/ComponentTwo";
import ComponentSix from "@/components/admin/dashboard-components/ComponentSix";
import ComponentThree from "@/components/admin/dashboard-components/ComponentThree";
import ComponentFive from "@/components/admin/dashboard-components/ComponentFive";
import ComponentFour from "@/components/admin/dashboard-components/ComponentFour";
import { ComponentOne } from "@/components/admin";

export default function Admin() {
  return (
    <AdminLayout title="Dashboard">
      <section className="main-container w-full ">
        <article className="flex flex-col xl:flex-row gap-4 ">
          {/* <----------------------Left main box----Component 1,2,6-------------------------> */}
          <div className="bg-white rounded-lg p-6 flex flex-col gap-y-8  xl:w-[70%]">
            <ComponentOne />
            <ComponentTwo />
            <ComponentSix />
          </div>
          {/* <----------------------Right main box----Component 3 4 5-------------------------> */}
          <div className="xl:w-[30%] flex flex-col gap-x-4 gap-y-4">
            <ComponentThree />
            <ComponentFour />
            <ComponentFive />
          </div>
        </article>
      </section>
    </AdminLayout>
  );
}
