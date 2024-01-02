import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import Profile from "./Profile";
import Post from "./Post";
import Comments from "./Comments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/comments/:postId" element={<Comments />} />
      </Routes>
    </Router>
  );
};

export default App;