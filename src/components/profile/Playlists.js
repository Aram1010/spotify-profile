import React from "react";

const Playlists = ({playlist}) => {
  return (
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
  );
};

export default Playlists;
