import React from "react";

const Artists = ({artist}) => {
  return (
    <div className="artists__top">
      <p>Youre Top Artists</p>
      <ul>
        {artist.items?.map((ar, index) => (
          <li key={index}>
            <img
              src={
                ar.images
                  ? ar.images[0].url
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="artist_img"
            />
            <p>{ar.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
