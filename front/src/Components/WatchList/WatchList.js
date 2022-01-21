import React from "react";
import "./CSS/WatchList.css";
import JSONDATA from "./../../Data/showList.json";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function WatchList() {
  const getData = async function (e) {
    const response = await fetch("http://localhost:5000/api/showwatchList");
    const data = await response.json();
  };
  return (
    <div onClick={getData} className="WatchmDiv">
      <div>
        {JSONDATA.map((value, key) => {
          return (
            <div>
              <div key={key}>
                <p id="pTagVal">
                  <input type="text" name="" className="inpValue" value={value.name} />
                  <div className="WiconsDiv">
                    <ShareIcon />
                    <EditIcon />
                    <DeleteIcon />
                    <CheckIcon />
                    <MoreHorizIcon />
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
