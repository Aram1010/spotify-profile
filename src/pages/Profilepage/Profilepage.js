import React from "react";
import { Data_layer_value } from "../../helper/DataLayer";
import "./Profilepage.css";
import Artists from "../../components/profile/Artists";
import Playlists from "../../components/profile/Playlists";

const Profilepage = () => {
  const [{ user, followed, playlist, artist }, dispatch] = Data_layer_value();

  return (
    <div className="profile_page">
      {user ? (
        <div className="profile__content">
          <img
            src={
              user.images[0]
                ? user.images[0].url
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt="profile_img"
          />
          <p>{user.display_name}</p>
          <div className="follow_stats">
            <p>
              <span>{user ? user.followers.total : null}</span>
              <span>followers</span>
            </p>
            <p>
              <span>{followed ? followed.artists.total : null}</span>
              <span>following</span>
            </p>
            <p>
              <span>{playlist ? playlist.total : null}</span>
              <span>playlists</span>
            </p>
          </div>
          <div className="discover__top">
            <Artists artist={artist} />
            <Playlists playlist={playlist} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profilepage;
