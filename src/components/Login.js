import React from "react";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
          alt="spotify_logo"
          width="300px"
        />
        <button type="button" className="login_btn">
          LOG IN TO SPOTIFY
        </button>
      </div>
    </div>
  );
};

export default Login;
