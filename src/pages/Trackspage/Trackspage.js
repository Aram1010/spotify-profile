import React from "react";
import { useLocation } from "react-router-dom";

const Trackspage = () => {
  const location = useLocation();
  console.log(location);

  return <div>Trackspage</div>;
};

export default Trackspage;
