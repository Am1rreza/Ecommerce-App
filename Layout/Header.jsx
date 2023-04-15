import Link from "next/link";
import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const clickHandler = () => {
    setIsNavShow(!isNavShow);
  };

  return (
    <div className="w-full bg-primary-color">
      <nav className="container mx-auto flex flex-col items-center p-4 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-2 xl:max-w-screen-xl">
        <div className="flex w-full items-center justify-between sm:w-max">
          <h2 className="font-bold text-xl leading-none">سایت بلاگی</h2>
          {isNavShow ? (
            <VscClose
              className={`h-6 w-6 cursor-pointer sm:hidden`}
              onClick={clickHandler}
            />
          ) : (
            <VscMenu
              className={`h-6 w-6 cursor-pointer sm:hidden`}
              onClick={clickHandler}
            />
          )}
        </div>
        <ul
          className={`mt-4 flex w-full flex-col gap-y-1 text-center sm:mt-0 sm:flex sm:w-max sm:flex-row sm:items-center sm:gap-x-4  ${
            isNavShow ? "" : "hidden"
          }`}
        >
          <li className="cursor-pointer rounded p-2 transition-all duration-150 hover:bg-secondary-color">
            <Link href="/">خانه</Link>
          </li>
          <li className="cursor-pointer rounded p-2 transition-all duration-150 hover:bg-secondary-color">
            <Link href="/blogs">بلاگ ها</Link>
          </li>
          <li className="cursor-pointer rounded p-2 transition-all duration-150 hover:bg-secondary-color">
            <Link href="/profile">پروفایل</Link>
          </li>
          <li className="cursor-pointer rounded p-2 transition-all duration-150 hover:bg-secondary-color">
            <Link href="/signup">ثبت نام</Link>
          </li>
          <li className="cursor-pointer rounded p-2 transition-all duration-150 hover:bg-secondary-color">
            <Link href="/signin">ورود</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
