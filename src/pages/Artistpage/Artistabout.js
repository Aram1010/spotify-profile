import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Artistpage.css";

const Artistabout = () => {
  const location = useLocation();

  const [artist__info, setArtist] = useState(null);

  useEffect(() => {
    setArtist(location.state);
    console.log(location.state);
  }, [location]);

  return (
    <div className="artist_about">
      <div className="artist__default">
        <img src={artist__info ? artist__info.images[0].url : null} alt="" />
        <p>{artist__info ? artist__info.name : null}</p>
      </div>
      <div className="other__stats">
        <div className="followers">
          <p>{artist__info
            ? artist__info.followers.total.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })
            : null}</p>
          <p>Follwers</p>
        </div>
        <div className="genre">
        <p>{artist__info ? artist__info.genres[0] : null}</p>
          <p>Genres</p>
        </div>
        <div className="popularity">
          <p>{artist__info ? `${artist__info.popularity}%` : null}</p>
          <p>Popularity</p>
        </div>
      </div>
    </div>
  );
};

export default Artistabout;
