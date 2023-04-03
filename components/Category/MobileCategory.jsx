import Link from "next/link";

const MobileCategory = ({ postCategories }) => {
  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5 -mb-4">
      {postCategories.map((category) => {
        return (
          <Link
            key={category._id}
            href={`/blogs/${category.englishTitle}`}
            className="block border border-gray-500 bg-secondary-color rounded-3xl px-3 py-1 whitespace-nowrap text-sm"
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
