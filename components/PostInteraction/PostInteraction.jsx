import http from "@/services/httpService";
import toPersianDigits from "@/utils/toPersianDigits";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const PostInteraction = ({ post, isSmall }) => {
  const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`;
  const chatBackgroundColor = `${isSmall ? "bg-gray-400" : ""}`;
  const heartBackgroundColor = `${isSmall ? "bg-red-300" : ""}`;
  const bookmarkBackgroundColor = `${isSmall ? "bg-blue-300" : ""}`;
  const router = useRouter();

  // Handlers
  const likeHandler = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then((res) => {
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          { scroll: false }
        );
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  const bookmarkHandler = (postId) => {
    http
      .put(`/posts/bookmark/${postId}`)
      .then((res) => {
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          { scroll: false }
        );
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  return (
    <div className={`flex items-center ${isSmall ? "gap-x-1" : "gap-x-4"}`}>
      <span
        className={`flex cursor-pointer items-center rounded p-0.5 ${chatBackgroundColor}`}
      >
        <ChatBubbleBottomCenterTextIcon
          className={`${iconSize} stroke-gray-600`}
        />
        <span className="mr-0.5 text-xs font-bold text-gray-600">
          {toPersianDigits(post.commentsCount)}
        </span>
      </span>
      <span
        onClick={() => likeHandler(post._id)}
        className={`flex cursor-pointer items-center rounded p-0.5 ${heartBackgroundColor}`}
      >
        <HeartIcon
          className={`${iconSize} stroke-red-600 ${
            post.isLiked
              ? "fill-red-600"
              : "fill-red-600/0 transition-all hover:fill-red-600/100"
          }`}
        />
        <span className="mr-0.5 text-xs font-bold text-red-600">
          {toPersianDigits(post.likesCount)}
        </span>
      </span>
      <span
        onClick={() => bookmarkHandler(post._id)}
        className={`flex cursor-pointer items-center rounded p-0.5 ${bookmarkBackgroundColor}`}
      >
        <BookmarkIcon
          className={`${iconSize} stroke-blue-600 ${
            post.isBookmarked
              ? "fill-blue-600"
              : "fill-blue-600/0 transition-all hover:fill-blue-600/100"
          }`}
        />
      </span>
    </div>
  );
};

export default PostInteraction;
