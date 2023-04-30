import React from "react";
import SingleComment from "../SingleComment/SingleComment";

const ReplyComment = ({ comments, parentCommentId, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-5" key={comment._id}>
          <React.Fragment>
            <SingleComment comment={comment} postId={postId} />
            <ReplyComment
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
