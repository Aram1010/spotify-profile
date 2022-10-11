import React from "react";
import { Data_layer_value } from "../helper/DataLayer";
import "./styles/Content.css";

const Content = () => {
  const [{ children }, dispatch] = Data_layer_value();

  return <div className="content">{children}</div>;
};

export default Content;
