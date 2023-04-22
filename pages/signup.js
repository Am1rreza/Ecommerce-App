import Layout from "@/Layout/Index";
import InputComponent from "@/components/Input/Input";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";

// initial value
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

// validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام و نام خانوادگی را وارد کنید")
    .min(6, "نام و نام خانوادگی باید حداقل 6 کاراکتر باشد"),
  email: Yup.string()
    .required("لطفا ایمیل خود را وارد کنید")
    .email("ایمیل نامعتبر است"),
  phoneNumber: Yup.string()
    .required("شماره موبایل خود را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
  password: Yup.string()
    .required("لطفا رمز عبور خود را وارد کنید")
    .min(6, "رمز عبور باید حداقل شامل 6 کاراکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
    .required("رمز عبور هم خوانی ندارد"),
});

const RegisterForm = () => {
  const onSubmit = (values) => {
    const { email, password } = values;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>صفحه‌ی ثبت نام</title>
      </Head>
      <div className="container mx-auto px-4 md:max-w-md">
        <div className="flex min-h-screen min-w-full items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="mt-14 flex flex-1 flex-col"
          >
            <h1 className="my-4 text-2xl font-extrabold">صفحه‌ی ثبت نام</h1>
            <InputComponent
              label="نام و نام خانوادگی"
              name="name"
              formik={formik}
            />
            <InputComponent
              label="ایمیل"
              name="email"
              formik={formik}
              className="mt-4"
            />
            <InputComponent
              type="tel"
              label="شماره موبایل"
              name="phoneNumber"
              formik={formik}
              className="mt-4"
            />
            <InputComponent
              label="رمز عبور"
              name="password"
              type="password"
              formik={formik}
              className="mt-4"
            />
            <InputComponent
              label="تکرار رمز عبور"
              name="confirmPassword"
              type="password"
              formik={formik}
              className="mt-4"
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="mt-8 w-full cursor-pointer rounded-md bg-secondary-color py-2 text-white transition-all hover:bg-hover-primary-color"
            >
              ثبت نام
            </button>
            <Link href={"/signin"} className="py-4">
              قبلا ثبت نام کردی؟
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterForm;
