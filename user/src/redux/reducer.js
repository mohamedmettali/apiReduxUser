import { FETCH_USERS_SUCCESS,FETCH_USER_PROFILE_SUCCESS,FETCH_USER_POSTS_SUCCESS,FETCH_COMMENTS_SUCCESS,FETCH_POST_SUCCESS } from "./actionTypes";

const initialState = {
  users: [],
  userProfile: {},
  userPosts: [],
  comments: [],
  post: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.payload };

    case FETCH_USER_POSTS_SUCCESS:
      return { ...state, userPosts: action.payload };

    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };

    case FETCH_POST_SUCCESS:
      return { ...state, post: action.payload };

    default:
      return state;
  }
};

export default reducer;