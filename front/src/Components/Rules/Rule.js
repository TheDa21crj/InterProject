import React from "react";
import "./CSS/Rules.css";
import tickIcon from "./../../Req img/tick.jpg";
import addIcon from "./../../Req img/add.jpg";
import deleteIcon from "./../../Req img/bin.jpg";

export default function Rule() {
    return <div className="RmDiv">
        <div className="iconsTile">
            <div>Rules</div>
            <div>
                <img src={tickIcon} alt="" id="RtickIcon" />
                <img src={addIcon} alt="" id="RaddIcon" />
                <img src={deleteIcon} alt="" id="RdeleteIcon" />
            </div>
        </div>
    </div>;
}
