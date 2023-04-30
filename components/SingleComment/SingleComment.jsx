import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import toPersianDate from "@/utils/toPersianDate";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const SingleComment = ({ comment, postId }) => {
  const [onReply, setOnReply] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();

  // Handlers
  const submitHandler = () => {
    const data = {
      content: commentValue,
      responseTo: comment._id,
      postId,
    };

    http
      .post("/post-comment/save-comment", data)
      .then((res) => {
        setCommentValue("");
        setOnReply(false);
        toast.success(res.data.message);
        routerPush(router);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  return (
    <div className="mt-6 rounded-md border border-primary-color bg-secondary-color p-4">
      <div className="flex items-center gap-x-2">
        <AiOutlineUser className="h-8 w-8 sm:h-10 sm:w-10" />
        <div className="text-xs sm:text-sm">
          <span>
            {comment.writer?.name} | {toPersianDate(comment.createdAt)}
          </span>
        </div>
      </div>
      <div className="mt-4">{comment.content}</div>
      <button
        className="mt-4 text-sm font-semibold"
        onClick={() => setOnReply(!onReply)}
      >
        {onReply ? "بیخیال" : "پاسخ به نظر"}
      </button>

      {onReply && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 rounded bg-primary-color p-4"
        >
          <h3 className="font-semibold">پاسخ به {comment.writer?.name}</h3>
          <textarea
            className="my-4 w-full resize-none rounded-md border-none bg-hover-primary-color p-4 ring-1 ring-primary-color focus:outline-none focus:ring-2"
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          ></textarea>
          <button
            onClick={submitHandler}
            className="mx-auto w-full cursor-pointer rounded-lg bg-secondary-color p-2 transition-all hover:bg-hover-secondary-color sm:w-56"
          >
            ارسال نظر
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
