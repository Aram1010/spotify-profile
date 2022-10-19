import React from "react";
import { NavLink } from "react-router-dom";
import { Data_layer_value } from "../../helper/DataLayer";
import "./Tracks.css";

const Tracks = () => {
  const [{ tracks }, dispatch] = Data_layer_value();

  function addZero(num) {
    let number = (num < 10 ? "0" : "") + num;

    return number;
  }

  return (
    <div className="tracks">
      <h2>Top Tracks</h2>
      <ul>
        {tracks.items?.map((track, index) => (
          <li key={index}>
            <NavLink
              to={`/tracks/${track.id}`}
              key={index}
              className="link_track"
              state={track}
              end
            >
              <img
                src={
                  track.album
                    ? track.album.images[0].url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="track_img"
              />
              <div className="track__info">
                <span className="track_name">
                  <p>{track.name}</p>
                  <ul className="track__artrists">
                    {track.artists?.map((arts, ind) => (
                      <li key={ind}>{(ind ? ", " : "") + arts.name}</li>
                    ))}
                    <span>
                      {" "}
                      •{" "}
                      {track.album.name.length < 35
                        ? track.album.name
                        : `${track.album.name.substring(0, 25)}...`}
                    </span>
                  </ul>
                </span>
                <span className="track__duration">
                  <span>
                    {track
                      ? `${
                          track.duration_ms / 1000 / 60 < 10
                            ? Math.floor(track.duration_ms / 1000 / 60)
                            : Math.floor(track.duration_ms / 1000 / 60)
                        }
                      :
                        ${
                          track.duration_ms / 1000 / 60 < 10
                            ? addZero(
                                Math.round(
                                  track.duration_ms / 1000 -
                                    Math.floor(track.duration_ms / 1000 / 60) *
                                      60
                                )
                              )
                            : Math.floor(track.duration_ms / 1000 / 60) * 60
                        }`
                      : null}
                  </span>
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
