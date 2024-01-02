import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchComments } from "./redux/actions";

const Post = () => {

  const comments = useSelector((state)=> state.comments);
  
  const dispatch = useDispatch();
  const {postId} = useParams()

  useEffect(() => {
      dispatch(fetchComments(postId));
      
  }, [postId]);


  return (
    <div>
      <h2>Comments {postId}</h2>
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

export default Post;