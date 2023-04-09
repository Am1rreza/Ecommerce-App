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
        className="col-span-6 flex min-h-max flex-col rounded-lg bg-primary-color p-2 md:col-span-3 lg:col-span-2"
      >
        {/* cover image */}
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <img
              src={`${blog.coverImage}`}
              alt={blog.slug}
              className="h-full w-full cursor-pointer object-cover object-center transition-transform duration-300 hover:scale-[1.15]"
            />
          </Link>
        </div>
        {/* blog content */}
        <div className="mt-2 flex w-full flex-1 flex-col justify-between rounded bg-secondary-color p-2">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <h2 className="mb-4 cursor-pointer font-bold">{blog.title}</h2>
          </Link>
          {/* blog data */}
          <div>
            {/* blog author and blog category */}
            <div className="mb-4 flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <img
                  src={"/images/1673374010628.jpg"}
                  alt={blog.slug}
                  className="h-6 w-6 rounded-full object-cover ring-2 ring-gray-300"
                />
                <span className="text-xs">{blog.author.name}</span>
              </div>
              <Link
                legacyBehavior
                href={`/blogs/${blog.category.englishTitle}`}
              >
                <span className="cursor-pointer truncate rounded-xl bg-primary-color px-2 py-1 text-xs transition-all hover:bg-hover-primary-color">
                  {blog.category.title}
                </span>
              </Link>
            </div>
            {/* blog intraction */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <span className="flex cursor-pointer items-center rounded bg-gray-400 p-0.5">
                  <ChatBubbleBottomCenterTextIcon className="h-4 w-4 stroke-gray-600" />
                  <span className="mr-0.5 text-xs font-bold text-gray-600">
                    {toPersianDigits(blog.commentsCount)}
                  </span>
                </span>
                <span className="flex cursor-pointer items-center rounded bg-red-300 p-0.5">
                  <HeartIcon
                    className={`h-4 w-4 stroke-red-600 ${
                      blog.isLiked
                        ? "fill-red-600"
                        : "fill-red-600/0 transition-all hover:fill-red-600/100"
                    }`}
                  />
                  <span className="mr-0.5 text-xs font-bold text-red-600">
                    {toPersianDigits(blog.likesCount)}
                  </span>
                </span>
                <span className="flex cursor-pointer items-center rounded bg-blue-300 p-0.5">
                  <BookmarkIcon
                    className={`h-4 w-4 stroke-blue-600 ${
                      blog.isBookmarked
                        ? "fill-blue-600"
                        : "fill-blue-600/0 transition-all hover:fill-blue-600/100"
                    }`}
                  />
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 stroke-gray-300" />
                <p className="mr-0.5 text-xs text-gray-300">
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
