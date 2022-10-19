import React from "react";
import { NavLink } from "react-router-dom";
import { Data_layer_value } from "../../helper/DataLayer";
import "./Recent.css";

const rec = () => {
  const [{ recent }, dispatch] = Data_layer_value();

  return (
    <div className="recents">
      <h2>Recently Played Tracks</h2>
      <ul>
        {recent.items?.map((rec, index) => (
          <li key={index}>
            <NavLink
              to={`/recent/${rec.track.id}`}
              key={index}
              className="link_recent"
              state={rec}
              end
            >
              <img
                src={
                  rec.track.album
                    ? rec.track.album.images[0].url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="recent_img"
              />
              <div className="recent__info">
                <span className="recent_name">
                  <p>{rec.track.name}</p>
                  <ul className="recent__artrists">
                    {rec.track.artists?.map((arts, ind) => (
                      <li key={ind}>{(ind ? ", " : "") + arts.name}</li>
                    ))}
                    <span>
                      {" "}
                      •{" "}
                      {rec.track.album.name.length < 35
                        ? rec.track.album.name
                        : `${rec.track.album.name.substring(0, 25)}...`}
                    </span>
                  </ul>
                </span>
                <span className="recent__duration">
                  <span>
                    {rec.track
                      ? `${Math.floor(
                          rec.track.duration_ms / 1000 / 60
                        )} : ${Math.round(
                          rec.track.duration_ms / 1000 -
                            Math.floor(rec.track.duration_ms / 1000 / 60) * 60
                        )}`
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

export default rec;
