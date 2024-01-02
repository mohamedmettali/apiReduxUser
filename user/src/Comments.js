import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "./redux/actions";

const Comments = ({ comments, match, fetchComments }) => {
  const userId = match.params.userId;

  useEffect(() => {
    fetchComments(userId);
  }, [fetchComments, userId]);

  return (
    <div>
      <h2>Comments {userId}</h2>
      {comments.map((comment) => (
        <div key={comment.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <p>Name: {comment.name}</p>
          <p>Email: {comment.email}</p>
          <p>Body: {comment.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);