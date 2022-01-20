import React from "react";
import JSONDATA from "./../../Data/search.json";
import SrCss from "./CSS/Search.module.css";
import { useState, useRef } from "react";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

export default function Search() {
  //   const inputRef = useRef();
  const [search, setSearch] = useState("");

  const filterData = async function (e) {
    setSearch(e.target.value);
  };

  const postData = async function (e) {
    // console.log("first");
    // const name = document.getElementById("inpValue").value;
    // console.log(name);
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
    }
  };

  // const getInputData = async function (e) {
  //     console.log(inputRef.current.value);
  // };

  return (
    <div className={SrCss.sMdiv}>
      <input
        type="text"
        name=""
        id={SrCss.searchInp}
        placeholder="Search"
        onChange={filterData}
      />
      {JSONDATA.filter((value) => {
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
                // ref={inputRef}
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
  );
}
