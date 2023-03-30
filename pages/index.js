import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 min-h-screen">
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
              className="block pr-4 py-2 mb-1 transition-all hover:bg-hover-color"
            >
              همه مقالات
            </Link>
            <Link
              href={"#"}
              className="block pr-4 py-2 mb-1 transition-all hover:bg-hover-color"
            >
              فرانت‌اند
            </Link>
            <Link
              href={"#"}
              className="block pr-4 py-2 transition-all hover:bg-hover-color"
            >
              بک‌اند
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary-color hidden md:block md:col-span-9">
        Sort Desktop
      </div>
      <div className="bg-primary-color md:col-span-9">Blogs</div>
    </div>
  );
}
