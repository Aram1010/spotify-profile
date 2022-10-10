import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { tokenRes } from "./auth/login";
import SpotifyWebApi from "spotify-web-api-js";
import { Data_layer_value } from "./helper/DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = Data_layer_value();

  useEffect(() => {
    const token_res = tokenRes();
    window.location.hash = "";
    const token_key = token_res.access_token;

    if (token_key) {
      dispatch({
        type: "SET_TOKEN",
        token: token_key,
      });

      spotify.setAccessToken(token_key);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

    }
  }, []);

  return <div className="App">{token ? <Profile spotify={spotify} /> : <Login />}</div>;
};

export default App;
