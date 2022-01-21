import React from "react";
import "./CSS/WatchList.css";
import JSONDATA from "./../../Data/showList.json";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import img0 from "./../../Req img/bin.jpg";

export default function WatchList() {
  const getData = async function (e) {
    const response = await fetch("http://localhost:5000/api/showwatchList");
    const data = await response.json();
  };
  const deletaData = async function (e) {
    console.log(e.target.parentNode.parentNode.firstChild.firstChild.value);
    const name = e.target.parentNode.parentNode.firstChild.firstChild.value;
    try {
      await fetch("http://localhost:5000");
      const r = await fetch("/api/watchlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      getData(e);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={getData} className="WatchmDiv">
      <div>
        {JSONDATA.map((value, key) => {
          return (
            <div>
              <div key={key}>
                <p id="pTagVal">
                  <form method="DELETE">
                    <input
                      type="text"
                      name=""
                      className="inpValue"
                      value={value.name}
                    />
                  </form>
                  <div className="WiconsDiv">
                    <ShareIcon />
                    <EditIcon />
                    <img
                      src={img0}
                      alt=""
                      className="deleteImg"
                      onClick={deletaData}
                    />
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
