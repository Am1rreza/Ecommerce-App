import React from "react";
import SingleComment from "../SingleComment/SingleComment";

const ReplyComment = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-5" key={comment._id}>
          <React.Fragment>
            <SingleComment comment={comment} />
            <ReplyComment comments={comments} parentCommentId={comment._id} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
