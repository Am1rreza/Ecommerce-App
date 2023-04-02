import BlogList from "@/components/BlogList/BlogList";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Home({ blogData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto lg:max-w-screen-xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)]">
        {/* category desktop */}
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          <div className="rounded-lg overflow-hidden">
            {/* accordion header*/}
            <div
              className="flex justify-between items-center p-3 cursor-pointer bg-primary-color"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>دسته‌بندی مقالات</span>
              <ChevronDownIcon
                className={`w-6 h-6 transition-all duration-[400ms] ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {/* accordion content */}
            <div
              className={`bg-secondary-color overflow-hidden transition-[max-height] duration-[400ms] ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <Link
                href={"#"}
                className="block pr-4 py-2 mb-1 transition-all hover:bg-hover-secondary-color"
              >
                همه مقالات
              </Link>
              <Link
                href={"#"}
                className="block pr-4 py-2 mb-1 transition-all hover:bg-hover-secondary-color"
              >
                فرانت‌اند
              </Link>
              <Link
                href={"#"}
                className="block pr-4 py-2 transition-all hover:bg-hover-secondary-color"
              >
                بک‌اند
              </Link>
            </div>
          </div>
        </div>
        {/* sortbar desktop */}
        <div className="hidden md:block md:col-span-9">
          <div className="bg-primary-color rounded-lg px-4 py-1 flex items-center">
            <div className="flex gap-x-2 items-center">
              <AdjustmentsVerticalIcon className="w-6 h-6" />
              <span>مرتب سازی:</span>
            </div>
            <ul className="flex items-center gap-x-4 mr-4">
              <li className="p-2 rounded hover:bg-hover-primary-color transition-all cursor-pointer">
                پر‌بازدید ترین
              </li>
              <li className="p-2 rounded hover:bg-hover-primary-color transition-all cursor-pointer">
                محبوب ترین
              </li>
              <li className="p-2 rounded hover:bg-hover-primary-color transition-all cursor-pointer">
                جدید ترین
              </li>
            </ul>
          </div>
        </div>
        {/* blog section */}
        <div className="md:col-span-9 grid grid-cols-6 gap-6">
          <BlogList blogData={blogData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?limit=10&page=1"
  );
  const { data } = result;

  return {
    props: {
      blogData: data,
    },
  };
}
