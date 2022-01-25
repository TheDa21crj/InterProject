import React from "react";
import JSONDATAS from "./../../Data/search.json";
import JSONDATA from "./../../Data/showList.json";
import SrCss from "./CSS/Search.module.css";
import "./CSS/WatchList.css";
import { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import img0 from "./../../Req img/bin.jpg";

export default function Search() {
  const [search, setSearch] = useState("");

  const filterData = async function (e) {
    setSearch(e.target.value);
  };

  const postData = async function (e) {
    let name = e.target.value;
    try {
      await fetch("http://localhost:5000");
      const r = await fetch("/api/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await r.json();
      if (!data.status) {
        console.log("Data Poster");
      } else {
        console.log("Not");
      }
    } catch (error) {
      console.log(error);
      getData(e);
    }
  };

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
    <div>
      <div className={SrCss.sMdiv}>
        <input
          type="text"
          name=""
          id={SrCss.searchInp}
          placeholder="Search"
          onChange={filterData}
        />
        {JSONDATAS.filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        }).map((value, key) => {
          return (
            <div key={key}>
              <form method="POST" className={SrCss.form}>
                <input
                  type="text"
                  name=""
                  id="inpValue"
                  className={SrCss.formImp}
                  value={value.name}
                  onClick={postData}
                />
                <div className={SrCss.hoverIcons}>
                  <CheckIcon />
                  <AddIcon />
                </div>
              </form>
            </div>
          );
        })}
      </div>
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
    </div>
  );
}
