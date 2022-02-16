import React, { useState } from "react";
import { Link } from "react-router-dom";
import NCss from "./CSS/Nav.module.css";
import "./CSS/Nav.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Nav() {
  return (
    <div className={NCss.NmDiv}>
      <div className={NCss.mcontent}>
        <ArrowBackIosIcon fontSize="large" id={NCss.ArrowBackIosIcon} />
        <Link to="/" className="Link">
          <h1 className={NCss.mH1}> The Da 's Trading</h1>
        </Link>
        <ArrowForwardIosIcon fontSize="large" id={NCss.ArrowForwardIosIcon} />
      </div>
      <div className="NavBackDrop">
        <h1 className="h1Wel">Welcome</h1>
      </div>
      <div className="slider"></div>
    </div>
  );
}
