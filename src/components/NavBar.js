import React from "react";
import "./NavBar.css";
import {
  FaAffiliatetheme,
  FaAmazon,
  FaAudible,
  FaAtlassian,
  FaBlackTie,
  FaConfluence,
  FaCloudversify,
  FaConnectdevelop,
  FaDeviantart,
  FaEthereum,
} from "react-icons/fa";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-center">
        <a href="#">
          <FaAffiliatetheme />
          DashBoard
        </a>
        <a href="#">
          <FaAmazon />
          Company Info
        </a>
        <a href="#">
          <FaAudible />
          Employee Info
        </a>
        <a href="#">
          <FaAtlassian />
          Job Portal
        </a>
        <a href="#">
          <FaBlackTie />
          Attendance
        </a>
        <a href="#">
          <FaConfluence />
          Payroll
        </a>
        <a href="#">
          <FaCloudversify /> Benefits
        </a>
        <a href="#">
          <FaConnectdevelop />
          Policies
        </a>
        <a href="#">
          <FaDeviantart />
          Analytics
        </a>
        <a href="#">
          <FaEthereum />
          Settings
        </a>
      </div>
    </div>
  );
}

export default NavBar;
