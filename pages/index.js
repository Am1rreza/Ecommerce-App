import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 bg-gray-100 min-h-screen">
      <div className="hidden md:block md:row-span-2 md:col-span-3">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* accordion header*/}
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-slate-200"
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
            className={`overflow-hidden transition-[max-height] duration-[400ms] ${
              isOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              href={"#"}
              className="block pr-4 py-2 mb-1 transition-all hover:bg-slate-100"
            >
              همه مقالات
            </Link>
            <Link
              href={"#"}
              className="block pr-4 py-2 mb-1 transition-all hover:bg-slate-100"
            >
              فرانت‌اند
            </Link>
            <Link
              href={"#"}
              className="block pr-4 py-2 transition-all hover:bg-slate-100"
            >
              بک‌اند
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 hidden md:block md:col-span-9">
        Sort Desktop
      </div>
      <div className="bg-blue-200 md:col-span-9">سلام55</div>
    </div>
  );
}
