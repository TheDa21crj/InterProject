import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NCss from "./CSS/Nav.module.css";
import "./CSS/Nav.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { gsap } from "gsap";

export default function Nav() {
  useEffect(() => {
    gsap.to(".h1Wel", { y: "0%", duration: 1 });
    gsap.to("#slider", { y: "-100%", duration: 2, delay: 0.75 });
    gsap.to("#NavBackDrop", { y: "-100%", duration: 1 }, "-=1");
  }, []);

  return (
    <div className={NCss.NmDiv}>
      <div className={NCss.mcontent}>
        <ArrowBackIosIcon fontSize="large" id={NCss.ArrowBackIosIcon} />
        <Link to="/" className="Link">
          <h1 className={NCss.mH1}> The Da 's Trading</h1>
        </Link>
        <ArrowForwardIosIcon fontSize="large" id={NCss.ArrowForwardIosIcon} />
      </div>
      <div id="NavBackDrop">
        <div className="h1WelPar">
          <h1 className="h1Wel">Welcome</h1>
        </div>
      </div>
      <div id="slider">
        <h1 className="h1WelSlide">To The Trading</h1>
      </div>
    </div>
  );
}
