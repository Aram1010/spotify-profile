import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Recentpage = () => {
  const location = useLocation();

  const [recent, setRecent] = useState(null);

  useEffect(() => {
    setRecent(location.state.track);
    console.log(recent)
  }, [location]);

  return (
    <div className="recent__about">
      {recent ? (
        <nav>
          <img
            src={
              recent.album
                ? recent.album.images[0].url
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt="recent_image"
          />
          <div className="recent_info">
            <p>{recent ?recent.name : null}</p>
            <ul>
              {recent
                ? recent.artists?.map((arts, ind) => (
                    <li key={ind}>{(ind ? ", " : "") + arts.name}</li>
                  ))
                : null}
            </ul>
            <span>
              {recent.album.name.length < 35
                ? recent.album.name
                : `${recent.album.name.substring(0, 25)}...`}
            </span>
            <a href={recent.external_urls.spotify}>
              <button type="button">PLAY ON SPOTIFY</button>
            </a>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Recentpage;
