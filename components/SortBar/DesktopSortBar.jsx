import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

const DesktopSortBar = () => {
  return (
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
  );
};

export default DesktopSortBar;
