import React from "react";
import { NavLink } from "react-router-dom";

const Playlists = ({ playlist }) => {
  return (
    <div className="playlists__top">
      <nav>
        <p>Youre Top Playlists</p>
        <NavLink to={`/playlists`} className="see_more" end>
          See More
        </NavLink>
      </nav>
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
