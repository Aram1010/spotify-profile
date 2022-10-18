import React from "react";
import { NavLink } from "react-router-dom";

const Artists = ({ artist }) => {
  return (
    <div className="artists__top">
      <nav>
        <p>Youre Top Artists</p>
        <NavLink to={`/artists`} className="see_more" end>
          See More
        </NavLink>
      </nav>
      <ul>
        {artist.items?.map((ar, index) => (
          <li key={index}>
            <NavLink
              to={`/artists/${ar.id}`}
              key={index}
              className="link"
              state={ar}
              end
            >
              <img
                src={
                  ar.images
                    ? ar.images[0].url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="artist_img"
              />
              <p className="artist_name">{ar.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
