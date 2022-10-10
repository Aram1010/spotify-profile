import React from "react";
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import "../styles/Profile.css";

const Profile = ({ spotify }) => {
  return (
    <div className="profile">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Profile;
