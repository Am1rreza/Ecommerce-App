import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center flex flex-col items-center gap-y-5 sm:gap-y-8 lg:gap-y-12">
        <h1 className="font-black text-4xl sm:text-6xl lg:text-8xl">خوش آمدید !</h1>
        <Link href={"/blogs"} className="block text-sm sm:text-base w-fit bg-primary-color p-3 rounded-lg transition-all hover:bg-hover-primary-color">ورود به صفحه‌ی بلاگ ها</Link>
      </div>
    </div>
  );
};

export default HomePage;
