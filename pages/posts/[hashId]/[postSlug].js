import toPersianDigits from "@/utils/toPersianDigits";
import { LinkIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

const PostPage = ({ post }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // for react hydration error
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  return (
    <div className="h-screen px-4 py-6">
      <header className="flex flex-col md:flex-row gap-y-4 md:justify-between md:items-start mb-12 max-w-screen-md mx-auto">
        {/* author data */}
        <div className="flex items-stretch">
          <img
            alt={post.author.name}
            src="/images/1673374010628.jpg"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-gray-300"
          />
          <div className="flex flex-col justify-between mr-4">
            <div>
              <span>{post.author.name}</span>
            </div>
            <span className="font-normal text-gray-400 text-xs hidden md:block">
              {post.author.biography}
            </span>

            <div className="font-normal text-gray-400 text-xs">
              <span>
                {new Date(post.createdAt).toLocaleString("fa-IR", {
                  dateStyle: "medium",
                })}
              </span>
              <span className="mx-1"> &bull; </span>
              <span>
                <span>زمان مطالعه: </span>
                <span>{toPersianDigits(post.readingTime)} </span>
                <span>دقیقه</span>
              </span>
            </div>
          </div>
        </div>
        {/* interaction buttons */}
        <div className="flex">
          <button>
            <LinkIcon className="w-6 h-6 hover:text-hover-secondary-color text-secondary-color cursor-pointer transition-all" />
          </button>
          <button className="mr-4 transition-all border border-secondary-color text-secondary-color hover:text-hover-secondary-color rounded-full px-3 py-1 flex items-center">
            <span className="ml-1 text-xs">
              {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
            </span>
            <BookmarkIcon
              className={`w-6 h-6 ${
                post.isBookmarked ? "fill-secondary-color stroke-none" : ""
              }`}
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { data } = await axios.get(
    `http://localhost:5000/api/posts/${query.postSlug}`
  );

  return {
    props: {
      post: data.data,
    },
  };
}
