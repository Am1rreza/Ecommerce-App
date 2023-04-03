import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden">
      {/* accordion header*/}
      <div
        className="flex justify-between items-center p-3 cursor-pointer bg-primary-color"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته‌بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 transition-all duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div
        className={`space-y-1 bg-secondary-color overflow-hidden transition-[max-height] duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link
          href={"/blogs"}
          className="block -mb-1 pr-4 py-2 transition-all hover:bg-hover-secondary-color"
        >
          همه مقالات
        </Link>
        {postCategories.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/blogs/${category.englishTitle}`}
              className="block pr-4 py-2 transition-all hover:bg-hover-secondary-color"
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
