import toPersianDigits from "@/utils/toPersianDigits";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const PostInteraction = ({ post, isSmall }) => {
  const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`;
  const chatBackgroundColor = `${isSmall ? "bg-gray-400" : ""}`;
  const heartBackgroundColor = `${isSmall ? "bg-red-300" : ""}`;
  const bookmarkBackgroundColor = `${isSmall ? "bg-blue-300" : ""}`;

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
