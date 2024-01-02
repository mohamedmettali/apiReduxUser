import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "./redux/actions";

const UserList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>User List</h1>
      
      {users.map((user) => (
        <Link key={user.id} to={`/profile/${user.id}`}>
          <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", cursor: "pointer" }}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);