import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-y-5 text-center sm:gap-y-8 lg:gap-y-12">
        <h1 className="text-4xl font-black sm:text-6xl lg:text-8xl">
          خوش آمدید !
        </h1>
        <Link
          href={"/blogs"}
          className="block w-fit rounded-lg bg-primary-color p-3 text-sm transition-all hover:bg-hover-primary-color sm:text-base"
        >
          ورود به صفحه‌ی بلاگ ها
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
