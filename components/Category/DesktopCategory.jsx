import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg">
      {/* accordion header*/}
      <div
        className="flex cursor-pointer items-center justify-between bg-primary-color p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته‌بندی مقالات</span>
        <ChevronDownIcon
          className={`h-6 w-6 transition-all duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div
        className={`space-y-1 overflow-hidden bg-secondary-color transition-[max-height] duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link
          href={"/blogs"}
          className="-mb-1 block py-2 pr-4 transition-all hover:bg-hover-secondary-color"
        >
          همه مقالات
        </Link>
        {postCategories.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/blogs/${category.englishTitle}`}
              className="block py-2 pr-4 transition-all hover:bg-hover-secondary-color"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
