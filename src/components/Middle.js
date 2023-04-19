import React from "react";
import "./Middle.css";
import Pieces from "./Pieces";
import Faces from "./Faces";


const Middle = () => {
  return (
    <div className="middle">
      <Pieces />
      <Faces />
    </div>
  );
};

export default Middle;
