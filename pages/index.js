import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto lg:max-w-screen-xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)]">
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
        <div className="md:col-span-9 grid grid-cols-6 gap-6">
          {[
            "github.png",
            "Nextjs.png",
            "reactjs.png",
            "tailwind.jpg",
            "typescript.png",
            "vue.jpg",
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="h-min col-span-6 md:col-span-3 lg:col-span-2 bg-primary-color rounded-lg p-2 flex flex-col"
              >
                {/* cover image */}
                <div className="overflow-hidden rounded aspect-w-16 aspect-h-9">
                  <img
                    src={`/images/${item}`}
                    alt="next.js"
                    className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-[1.15]"
                  />
                </div>
                {/* blog content */}
                <div className="flex-1 p-2 mt-2 bg-secondary-color rounded flex flex-col justify-between w-full">
                  <h2 className="mb-4 font-bold truncate">
                    بررسی کامل ریکت و ریداکس
                  </h2>
                  {/* blog data */}
                  <div>
                    {/* blog author and blog category */}
                    <div className="mb-4 flex items-center justify-between text-sm gap-x-2">
                      <div className="flex items-center gap-x-2">
                        <img
                          alt="..."
                          src="/images/Nextjs.png"
                          className="w-6 h-6 rounded-full ring-2 ring-primary-color object-cover"
                        />
                        <span>امیررضا موسوی فرد</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-xl bg-primary-color cursor-pointer transition-all hover:bg-hover-primary-color">
                        فرانت‌اند
                      </span>
                    </div>
                    {/* blog intraction */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-1">
                        <span className="bg-gray-400 rounded flex items-center p-0.5 cursor-pointer">
                          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 stroke-gray-600 fill-gray-600/0 transition-all hover:fill-gray-600/100" />
                          <span className="text-xs mr-0.5 text-gray-600 font-bold">
                            2
                          </span>
                        </span>
                        <span className="bg-red-300 rounded flex items-center p-0.5 cursor-pointer">
                          <HeartIcon className="w-4 h-4 stroke-red-600 fill-red-600/0 transition-all hover:fill-red-600/100" />
                          <span className="text-xs mr-0.5 text-red-600 font-bold">
                            2
                          </span>
                        </span>
                        <span className="bg-blue-300 rounded flex items-center p-0.5 cursor-pointer">
                          <BookmarkIcon className="w-4 h-4 stroke-blue-600 fill-blue-600/0 transition-all hover:fill-blue-600/100" />
                        </span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 stroke-gray-300" />
                        <p className="text-gray-300 text-xs mr-0.5">
                          زمان مطالعه: 12 دقیقه
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
