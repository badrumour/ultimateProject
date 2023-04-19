import React from "react";
import "./Pieces.css";
import {
  FaGlide,
  FaHackerrank,
  FaLinux,
  FaGulp,
  FaKickstarterK,
} from "react-icons/fa";
const Pieces = () => {
  return (
    <div className="piece">
      <div className="piece-center">
        <div className="piece-one">
          <button>
            <FaGlide />
            Profile
          </button>
        </div>

        <div className="piece-two">
          <button>
            <FaHackerrank />
          </button>
          <button>
            <FaGulp />
            filter
          </button>
          <button>
            <FaLinux />
            create-new
          </button>
          <button>
            <FaKickstarterK />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pieces;
