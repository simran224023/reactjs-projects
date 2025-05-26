import React from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const { userName } = useParams();
  const defaultUserName = "Guest"; 
  const displayName = userName || defaultUserName;

  return (
    <div className="user">
      <span className="user-label">User:</span> 
      <span className="user-id">Hi, {displayName}</span>
    </div>
  );
};

export default User;