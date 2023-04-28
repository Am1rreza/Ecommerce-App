import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ postCategories }) => {
  const router = useRouter();

  return (
    <div className="-mb-4 flex flex-1 flex-wrap justify-center gap-4 overflow-auto pb-5 md:hidden">
      <Link
        href={"/blogs"}
        className={`block whitespace-nowrap rounded-3xl border px-3 py-1 text-sm ${
          !router.query.categorySlug
            ? "border-2 border-gray-200 bg-primary-color"
            : "border-gray-500 bg-secondary-color"
        }`}
      >
        همه مقالات
      </Link>
      {postCategories.map((category) => {
        return (
          <Link
            key={category._id}
            href={`/blogs/${category.englishTitle}`}
            className={`block whitespace-nowrap rounded-3xl border  px-3 py-1 text-sm ${
              router.query.categorySlug === category.englishTitle
                ? "border-2 border-gray-200 bg-primary-color"
                : "border-gray-500 bg-secondary-color"
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
