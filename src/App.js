import React, { useEffect, useState } from "react";
import "./components/styles/App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { tokenRes } from "./auth/login";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token_res = tokenRes();
    window.location.hash = "";
    const token_key = token_res.access_token;

    if (token_key) {
      setToken(token_key);
    }
  }, []);

  return <div className="App">{token ? <Profile /> : <Login />}</div>;
};

export default App;
