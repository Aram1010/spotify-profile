import React from "react";
import "./styles/Login.css";
import { login_url } from "../auth/login";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spotify_logo"
        />
        <button type="button" className="login_btn">
          <a href={login_url}>LOG IN TO SPOTIFY PROFILE</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
