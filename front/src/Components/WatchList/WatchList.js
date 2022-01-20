import React from "react";
import "./CSS/WatchList.css";
import JSONDATA from "./../../Data/showList.json";

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
                <p clcasName="pTagVal">{value.name}</p>
              </div>
            </div>
          );
        })}
        <div id="container"></div>
      </div>
    </div>
  );
}
