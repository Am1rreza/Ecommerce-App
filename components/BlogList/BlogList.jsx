import toPersianDigits from "@/utils/toPersianDigits";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BlogList = ({ blogData }) => {
  return blogData.docs.map((blog) => {
    return (
      <div
        key={blog._id}
        className="min-h-max col-span-6 md:col-span-3 lg:col-span-2 bg-primary-color rounded-lg p-2 flex flex-col"
      >
        {/* cover image */}
        <div className="overflow-hidden rounded aspect-w-16 aspect-h-9">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <img
              src={`${blog.coverImage}`}
              alt={blog.slug}
              className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-[1.15]"
            />
          </Link>
        </div>
        {/* blog content */}
        <div className="flex-1 p-2 mt-2 bg-secondary-color rounded flex flex-col justify-between w-full">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <h2 className="mb-4 font-bold cursor-pointer">{blog.title}</h2>
          </Link>
          {/* blog data */}
          <div>
            {/* blog author and blog category */}
            <div className="mb-4 flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <img
                  src={"/images/1673374010628.jpg"}
                  alt={blog.slug}
                  className="w-6 h-6 rounded-full ring-2 ring-gray-300 object-cover"
                />
                <span className="text-xs">{blog.author.name}</span>
              </div>
              <Link
                legacyBehavior
                href={`/blogs/${blog.category.englishTitle}`}
              >
                <span className="truncate text-xs px-2 py-1 rounded-xl bg-primary-color cursor-pointer transition-all hover:bg-hover-primary-color">
                  {blog.category.title}
                </span>
              </Link>
            </div>
            {/* blog intraction */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <span className="bg-gray-400 rounded flex items-center p-0.5 cursor-pointer">
                  <ChatBubbleBottomCenterTextIcon className="w-4 h-4 stroke-gray-600" />
                  <span className="text-xs mr-0.5 text-gray-600 font-bold">
                    {toPersianDigits(blog.commentsCount)}
                  </span>
                </span>
                <span className="bg-red-300 rounded flex items-center p-0.5 cursor-pointer">
                  <HeartIcon
                    className={`w-4 h-4 stroke-red-600 ${
                      blog.isLiked
                        ? "fill-red-600"
                        : "fill-red-600/0 transition-all hover:fill-red-600/100"
                    }`}
                  />
                  <span className="text-xs mr-0.5 text-red-600 font-bold">
                    {toPersianDigits(blog.likesCount)}
                  </span>
                </span>
                <span className="bg-blue-300 rounded flex items-center p-0.5 cursor-pointer">
                  <BookmarkIcon
                    className={`w-4 h-4 stroke-blue-600 ${
                      blog.isBookmarked
                        ? "fill-blue-600"
                        : "fill-blue-600/0 transition-all hover:fill-blue-600/100"
                    }`}
                  />
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 stroke-gray-300" />
                <p className="text-gray-300 text-xs mr-0.5">
                  زمان مطالعه: {toPersianDigits(blog.readingTime)} دقیقه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogList;
