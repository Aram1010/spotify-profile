import React from "react";
import { NavLink } from "react-router-dom";
import { Data_layer_value } from "../../helper/DataLayer";

const Tracks = () => {
  const [{ tracks }, dispatch] = Data_layer_value();

  console.log(tracks);

  return (
    <div className="tracks">
      <h2>Top Tracks</h2>
      <ul>
        {tracks.items?.map((track, index) => (
          <NavLink
            to={`/tracks/${track.id}`}
            key={index}
            className="link_track"
            state={track}
            end
          >
            <li key={index}>
              <img
                src={
                  track.album
                    ? track.album.images[0].url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="track_img"
              />
              <p className="artist_name">{track.name}</p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
