import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Data_layer_value } from "../helper/DataLayer";

const Sidebar = ({ children }) => {
  const [{ token }, dispatch] = Data_layer_value();

  useEffect(() => {
    if (children) {
      dispatch({
        type: "SET_CONTENT",
        children: children,
      });
    }
  }, []);

  const routePath = [
    {
      path: "/",
      name: "Profile",
      icon: <AccountCircleIcon />,
    },
    {
      path: "/artists",
      name: "Top Artists",
      icon: <HeadphonesIcon />,
    },
    {
      path: "/tracks",
      name: "Top Tracks",
      icon: <GraphicEqIcon />,
    },
    {
      path: "/recent",
      name: "Recent",
      icon: <HistoryIcon />,
    },
    {
      path: "/playlists",
      name: "Playlists",
      icon: <LibraryMusicIcon />,
    },
  ];

  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify_logo"
      />
      <div className="links">
        {routePath.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            end
          >
            <div className="route_icon">{item.icon}</div>
            <div className="route_name">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
