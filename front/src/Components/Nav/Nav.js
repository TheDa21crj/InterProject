import React from "react";
import NCss from "./CSS/Nav.module.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Nav() {
  return (
    <div className={NCss.NmDiv}>
      <div className={NCss.mcontent}>
        <ArrowBackIosIcon fontSize="large" id={NCss.ArrowBackIosIcon} />
        <h1 className={NCss.mH1}>The Da 's Trading</h1>
        <ArrowForwardIosIcon fontSize="large" id={NCss.ArrowForwardIosIcon} />
      </div>
    </div>
  );
}
