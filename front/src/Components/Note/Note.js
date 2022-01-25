import React, { useState } from "react";
import JSONDATA from "./../../Data/NoteList.json";
import "./CSS/Note.css";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import img0 from "./../../Req img/bin.jpg";
import img1 from "./../../Req img/pen.jpg";

export default function Note() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const postData = async function (e) {
    setShow(false);
    const title = document.getElementById("inpTag").value;
    const des = document.getElementById("TextTag").value;
    try {
      await fetch("http://localhost:5000");
      const r = await fetch("/api/notemaker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          des,
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
    const response = await fetch("http://localhost:5000/api/notemaker/show");
    const data = await response.json();
  };

  const deletaData = async function (e) {
    const title =
      e.target.parentNode.parentNode.firstChild.firstChild.firstChild.value;
    try {
      await fetch("http://localhost:5000");
      const r = await fetch("/api/notemaker/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });
      getData(e);
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async function (e) {
    setShowEdit(!showEdit);
  };
  return (
    <div id="NotemTDiv">
      <div className="NoteTDiv">
        <p> Note </p>
        <div>
          <AddIcon onClick={() => setShow(!show)} className="addIcons" />
        </div>
      </div>
      <div>
        {JSONDATA.map((value, key) => {
          return (
            <div key={key} className="NMapDiv" onClick={getData}>
              <div className="TitleDiv">
                <form method="DELETE">
                  <input type="text" name="" id="" value={value.title} />
                  <input type="text" name="" id="" value={value.date} />
                </form>
              </div>
              <form method="DELETE">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={value.des}
                ></textarea>
              </form>
              <div className="iconsHover">
                <img
                  src={img1}
                  alt=""
                  className="iconEdit"
                  onClick={editData}
                />
                <img
                  src={img0}
                  alt=""
                  className="deleteImg"
                  onClick={deletaData}
                />
              </div>
              {/*  */}
              {showEdit ? (<div>
                <div>
                  <form method="PUT">
                    <input type="text" name="" id="" value={value.title} />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    >
                      {value.des}
                    </textarea>
                  </form>
                </div>
                <div></div>
              </div>) : null}
            </div>
          );
        })}
        {show ? (
          <div className="modalMDiv">
            <div className="popDiv">
              <form className="form">
                <input type="text" name="" id="inpTag" />
                <textarea name="" cols="30" rows="10" id="TextTag"></textarea>
              </form>
              <div className="DivBtn">
                <button id="BtnClose" onClick={() => setShow(false)}>
                  Close
                </button>
                <button
                  id="AddBtn"
                  onClick={(e) => {
                    postData(e);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
