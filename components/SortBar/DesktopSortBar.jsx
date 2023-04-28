import routerPush from "@/utils/routerPush";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopSortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortOptions = [
    { label: "جدید ترین", id: "newest" },
    { label: "پر‌بازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
  ];

  // Handlers
  const sortHandler = (sortId) => {
    setSort(sortId);
    router.query.sort = sortId;
    routerPush(router);
  };

  return (
    <div className="flex items-center rounded-lg bg-primary-color px-4 py-1">
      <div className="flex items-center gap-x-2">
        <AdjustmentsVerticalIcon className="h-6 w-6" />
        <span>مرتب سازی:</span>
      </div>
      <ul className="mr-4 flex items-center gap-x-4">
        {sortOptions.map((sortOption) => {
          return (
            <li
              key={sortOption.id}
              onClick={() => sortHandler(sortOption.id)}
              className={`cursor-pointer rounded p-2 transition-all hover:bg-hover-primary-color ${
                sortOption.id === sort
                  ? "bg-secondary-color hover:bg-secondary-color"
                  : ""
              }`}
            >
              {sortOption.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopSortBar;
