import React from "react";
import { Data_layer_value } from "../../helper/DataLayer";
import "./Playlist.css"

const Playlist = () => {
  const [{ playlists }, dispatch] = Data_layer_value();

  return (
    <div className="playlists">
      <h2>Top Playlists</h2>
      <ul>
        {playlists.items?.map((play, index) => (
          <li key={index}>
            <img
              src={
                play.images[0]
                  ? play.images[0].url
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="playlist_img"
            />
            <p className="playlist_name">{play.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
