import React from "react";
import ReactDOM from "react-dom/client";
import { DataLayer } from "./helper/DataLayer";
import './index.css';
import App from "./App";
import { reducer, initialState } from "./helper/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
