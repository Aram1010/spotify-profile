import React from "react";
import { NavLink } from "react-router-dom";

const Artists = ({ artist }) => {
  return (
    <div className="artists__top">
      <p>Youre Top Artists</p>
      <ul>
        {artist.items?.map((ar, index) => (
          <NavLink
            to={`/artists/${ar.id}`}
            key={index}
            className="link"
            state={ar}
            end
          >
            <li key={index}>
              <img
                src={
                  ar.images
                    ? ar.images[0].url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="artist_img"
              />
              <p className="artist_name">{ar.name}</p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
