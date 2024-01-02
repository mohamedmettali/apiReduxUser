import axios from "axios";
import * as actionTypes from "./actionTypes";



export const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUserProfileSuccess = (user) => ({
  type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
  payload: user,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const fetchCommentsSuccess = (comments) => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchPostSuccess = (post) => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: post,
});






export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(fetchUsersSuccess(res.data));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const fetchUserProfile = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    dispatch(fetchUserProfileSuccess(res.data));
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const fetchUserPosts = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    dispatch(fetchUserPostsSuccess(res.data));
  } catch (error) {
    console.error("Error fetching user posts:", error);
  }
};

export const fetchComments = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    dispatch(fetchCommentsSuccess(res.data));
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

export const fetchPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    dispatch(fetchPostSuccess(res.data));
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};
