import React, { useState } from "react";
import SingleComment from "../SingleComment/SingleComment";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h2 className="mb-8 px-1 text-2xl font-extrabold md:text-3xl">نظرات</h2>
      {post.comments.map((comment) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
            </React.Fragment>
          )
        );
      })}
      {/* new comment form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="mt-8 text-lg font-extrabold">ارسال دیدگاه جدید</h3>
        <textarea
          className="my-4 w-full resize-none rounded-md border-none bg-transparent p-4 ring-1 ring-primary-color focus:outline-none focus:ring-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="نظرت رو برام بنویس ..."
        ></textarea>
        <button className="mx-auto w-full cursor-pointer rounded-lg bg-primary-color p-2 transition-all hover:bg-hover-primary-color sm:w-56 md:text-lg">
          ارسال نظر
        </button>
      </form>
    </div>
  );
};

export default PostComments;
