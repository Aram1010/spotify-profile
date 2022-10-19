import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Tracks.css";

const Trackspage = () => {
  const location = useLocation();

  const [track, setTrack] = useState(null);

  useEffect(() => {
    setTrack(location.state);
  }, [location]);

  return (
    <div className="track__about">
      {track ? (
        <nav>
          <img
            src={
              track.album
                ? track.album.images[0].url
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt="track_image"
          />
          <div className="track_info">
            <p>{track ? track.name : null}</p>
            <ul>
              {track
                ? track.artists?.map((arts, ind) => (
                    <li key={ind}>{(ind ? ", " : "") + arts.name}</li>
                  ))
                : null}
            </ul>
            <span>
              {track.album.name.length < 35
                ? track.album.name
                : `${track.album.name.substring(0, 25)}...`}
            </span>
            <a href={track.external_urls.spotify}>
              <button type="button">PLAY ON SPOTIFY</button>
            </a>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Trackspage;
