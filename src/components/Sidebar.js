import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = ({ children }) => {
  const routePath = [
    {
      path: "/",
      name: "Profile",
    },
    {
      path: "/artists",
      name: "Top Artists",
    },
    {
      path: "/tracks",
      name: "Top Tracks",
    },
    {
      path: "/recent",
      name: "Recent",
    },
    {
      path: "/playlists",
      name: "Playlists",
    },
  ];

  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify_logo"
      />
        {routePath.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="route_name">{item.name}</div>
          </NavLink>
        ))}
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
