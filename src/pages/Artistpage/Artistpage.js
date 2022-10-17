import React from "react";
import "./Artist.css";
import { Data_layer_value } from "../../helper/DataLayer";
import { NavLink } from "react-router-dom";

const Artist = () => {
  const [{ artist }, dispatch] = Data_layer_value();

  return (
    <div className="artists">
      <h2>Top Artists</h2>
      <ul>
        {artist.items?.map((ar, index) => (
          <NavLink
            to={`/artists/${ar.id}`}
            key={index}
            className="link_artist"
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

export default Artist;
