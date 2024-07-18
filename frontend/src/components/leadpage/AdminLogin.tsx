/* eslint-disable @next/next/no-img-element */
import { InputField, LoadingButton } from "@/components/core";
import { errorHelper } from "@/helpers";
import { useMutation, useSwr } from "@/hooks";
import { notify } from "@/utils";
import { Field, FieldProps, Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import {
  formikProps,
  loginInitialValues,
  loginSchema,
  loginValidationSchema,
  loginValueType,
} from "@/schemas";
import { FiLogIn } from "react-icons/fi";

export default function AdminLogin() {
  const { mutation, isLoading } = useMutation();
  const { push } = useRouter();

  const handleLogin = async (values: loginValueType, props: formikProps) => {
    //comments line are worked but due to given ungray-techmology-api issues login is not working so that after go to admin panel another 3 given api's are not working
    try {
      const res = await mutation(`login`, {
        method: "POST",
        body: {
          username: values.userId,
          password: values.password,
          email: "ungray@gmail.com",
          phone_number: 8908033814,
          input_code: 0,
        },
        isAlert: true,
      });
      if (
        res?.status === 200 &&
        res?.results?.message === "Successfully Logged in"
      ) {
        props.resetForm();
        notify.success(`${res?.results?.message}`);
        push(`/admin`);
      } else {
        notify.error(`${res?.results?.message}`);
      }
    } catch (error: unknown) {
      errorHelper(error);
    }
    // try {
    //   if (values.userId === "trial" && values.password === "assignment123") {
    //     props.resetForm();
    //     notify.success("Successfully Logged in");
    //     push(`/admin`);
    //   } else {
    //     if (values.userId !== "trial" && values.password !== "assignment123") {
    //       notify.error("Username and Password are not valid");
    //     } else if (values.userId !== "trial") {
    //       notify.error("Username is not matched");git
    //     } else {
    //       notify.error("Password is not matched");
    //     }
    //   }
    // } catch (error: unknown) {
    //   errorHelper(error);
    // }
  };

  return (
    <section className="w-full bg-[url('/home/feature-bg.png')] bg-cover bg-no-repeat relative flex flex-col justify-center items-center px-3 bg-light md:bg-light h-screen">
      <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl md:rounded-3xl p-3 2xl:w-3/5 min-[1800px]:w-[55%] items-center min-[2000px]:h-[55%] min-[1720px]:h-[60%] 2xl:h-2/3 xl:h-[70%] md:w-4/5 gap-6 md:gap-0">
        <div className="w-full h-full hidden md:flex items-center justify-center bg-light md:bg-secondary rounded-[0.75rem]">
          <img src="/login/login-bg.png" alt="" className="" />
        </div>
        <div className="flex flex-col py-8 px-1 md:p-6 w-full gap-4 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center">
            <h1 className=" text-theme-blue-dark text-2xl md:text-3xl font-semibold leading-4 md:leading-6">
              Welcome Back
            </h1>
            <p className="text-md pt-3 font-semibold text-gray-400">to</p>
            <h1 className="py-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl md:text-3xl font-semibold leading-4 md:leading-6">
              Ungray Technologies
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Formik
              initialValues={loginInitialValues}
              validationSchema={Yup.object(loginValidationSchema)}
              onSubmit={handleLogin}
              enableReinitialize={true}
            >
              {(formik) => (
                <Form className="w-full grid grid-cols-12 gap-3 md:gap-4">
                  {loginSchema.map((inputItem) => (
                    <Field name={inputItem.name} key={inputItem.key}>
                      {(props: FieldProps<string>) => (
                        <div
                          className={`flex flex-col justify-center gap- ${inputItem.className}`}
                        >
                          <div className="text-sm">{inputItem.label}</div>
                          <div className="col-span-6 w-full">
                            <InputField
                              // key={inputItem?.key}
                              placeholder={inputItem.placeholder}
                              id={inputItem?.key}
                              name={inputItem?.name}
                              type={inputItem?.type}
                              value={formik?.values[inputItem?.name]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={Boolean(
                                formik?.touched[inputItem?.name] &&
                                  formik?.errors[inputItem?.name]
                              )}
                              helperText={
                                formik?.touched[inputItem?.name] &&
                                formik?.errors[inputItem?.name]
                              }
                              formik={formik}
                            />
                          </div>
                        </div>
                      )}
                    </Field>
                  ))}
                  <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
                    <LoadingButton
                      type="submit"
                      sx="w-full bg-primary text-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-10 flex items-center justify-center"
                      // disabled={formik.isSubmitting || formik.isValidating}
                      loading={isLoading}
                      circularProgressClass="loading-sm text-secondary"
                    >
                      <div className="flex items-center gap-2 ">
                        <FiLogIn />
                        Login
                      </div>
                    </LoadingButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
