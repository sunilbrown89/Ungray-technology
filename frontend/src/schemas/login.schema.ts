import { FormikHelpers } from "formik";
import * as Yup from "yup";

const loginSchema = [
  {
    key: "1",
    label: "Username",
    placeholder: "Enter Username",
    name: "userId",
    type: "text",
    validationSchema: Yup.string().required("Username is required"),
    required: true,
    initialValue: "",
    className: "col-span-12",
  },
  {
    key: "2",
    name: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
    type: "password",
    validationSchema: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 13 characters long"),
    initialValue: "",
    className: "col-span-12",
  },
];

const loginInitialValues: { [key: string]: string } = loginSchema.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  },
  {} as { [key: string]: string }
);

const loginValidationSchema: { [key: string]: Yup.StringSchema<string> } =
  loginSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });

type loginValueType =
  | {
      userId: string;
      password: string;
    }
  | {
      [key: string]: string;
    };
type formikProps = FormikHelpers<{ [key: string]: string }>;
export { loginSchema, loginInitialValues, loginValidationSchema };
export type { loginValueType, formikProps };
