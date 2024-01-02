import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUserProfile, fetchUserPosts } from "./redux/actions";

const Profile = () => {

  const user = useSelector((state)=> state.userProfile);
  const userPosts = useSelector((state)=> state.userPosts);
  const dispatch = useDispatch();
  const {userId} = useParams()

  useEffect(() => {
      dispatch(fetchUserProfile(userId));
      dispatch(fetchUserPosts(userId));
  }, [userId]);


  return (
    <div>
      {user && (
        <>
      <h2>Name: {user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      </>)
      }
      <h3>Posts:</h3>
      {userPosts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", cursor: "pointer" }}>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
          <Link to={`/post/${post.id}`}>View Comment</Link>
              </div>
      ))}

    </div>
  );
};

export default Profile;