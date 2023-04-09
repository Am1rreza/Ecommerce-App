import Link from "next/link";

const MobileCategory = ({ postCategories }) => {
  return (
    <div className="-mb-4 flex justify-center gap-x-4 overflow-auto pb-5 md:hidden">
      <Link
        href={"/blogs"}
        className="block whitespace-nowrap rounded-3xl border border-gray-500 bg-secondary-color px-3 py-1 text-sm"
      >
        همه مقالات
      </Link>
      {postCategories.map((category) => {
        return (
          <Link
            key={category._id}
            href={`/blogs/${category.englishTitle}`}
            className="block whitespace-nowrap rounded-3xl border border-gray-500 bg-secondary-color px-3 py-1 text-sm"
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
