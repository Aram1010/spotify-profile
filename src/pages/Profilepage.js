import React from "react";
import { Data_layer_value } from "../helper/DataLayer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./styles/Profilepage.css";

const Profilepage = () => {
  const [{ user, followed, playlist, artist }, dispatch] = Data_layer_value();

  console.log(playlist);

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
            <div className="artists__top">
              <p>Youre Top Artists</p>
              <ul>
                {artist.items?.map((ar, index) => (
                  <li key={index}>
                    <img
                      src={
                        ar.images
                          ? ar.images[0].url
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt="artist_img"
                    />
                    <p>{ar.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="playlists__top">
              <p>Youre Top Playlists</p>
              <ul>
                {playlist.items?.map((pl, index) => (
                  <li key={index}>
                    <img
                      src={
                        pl.images[0]
                          ? pl.images[0].url
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt="playlist_img"
                    />
                    <p>{pl.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profilepage;
