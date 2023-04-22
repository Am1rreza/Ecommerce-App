import Layout from "@/Layout/Index";
import InputComponent from "@/components/Input/Input";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";

// initial value
const initialValues = {
  email: "",
  password: "",
};

// validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .required("لطفا ایمیل خود را وارد کنید")
    .email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("لطفا رمز عبور خود را وارد کنید")
    .min(6, "رمز عبور باید حداقل شامل 6 کاراکتر باشد"),
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
        <title>صفحه‌ی ورود</title>
      </Head>
      <div className="container mx-auto px-4 md:max-w-md">
        <div className="flex min-h-screen min-w-full items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="mt-14 flex flex-1 flex-col"
          >
            <h1 className="my-4 text-2xl font-extrabold">صفحه‌ی ورود</h1>
            <InputComponent label="ایمیل" name="email" formik={formik} />
            <InputComponent
              className="mt-4"
              label="رمز عبور"
              name="password"
              type="password"
              formik={formik}
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="mt-8 w-full cursor-pointer rounded-md bg-secondary-color py-2 text-white transition-all hover:bg-hover-primary-color"
            >
              ورود
            </button>
            <Link href={"/signup"} className="py-4">
              هنوز ثبت نام نکردی؟
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterForm;
