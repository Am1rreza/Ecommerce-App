import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

const DesktopSortBar = () => {
  return (
    <div className="flex items-center rounded-lg bg-primary-color px-4 py-1">
      <div className="flex items-center gap-x-2">
        <AdjustmentsVerticalIcon className="h-6 w-6" />
        <span>مرتب سازی:</span>
      </div>
      <ul className="mr-4 flex items-center gap-x-4">
        <li className="cursor-pointer rounded p-2 transition-all hover:bg-hover-primary-color">
          پر‌بازدید ترین
        </li>
        <li className="cursor-pointer rounded p-2 transition-all hover:bg-hover-primary-color">
          محبوب ترین
        </li>
        <li className="cursor-pointer rounded p-2 transition-all hover:bg-hover-primary-color">
          جدید ترین
        </li>
      </ul>
    </div>
  );
};

export default DesktopSortBar;
