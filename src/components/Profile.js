import React, { useEffect } from "react";
import "./styles/Profile.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profilepage from "../pages/Profilepage";
import Artist from "../pages/Artist";
import Tracks from "../pages/Tracks.js";
import Recent from "../pages/Recent";
import Playlist from "../pages/Playlist";
import { Data_layer_value } from "../helper/DataLayer";

const Profile = () => {
  const [{ user, children }, dispatch] = Data_layer_value();

  return (
    <div className="profile">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Profilepage />} />
            <Route path="/artists" element={<Artist />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/playlists" element={<Playlist />} />
          </Routes>
        </Sidebar>
        <Content children={children} />
      </BrowserRouter>
    </div>
  );
};

export default Profile;
