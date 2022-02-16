import React, { useState, useEffect } from "react";
import JSONDATA from "./../../Data/NoteList.json";
import "./CSS/Note.css";
import AddIcon from "@material-ui/icons/Add";
import img0 from "./../../Req img/bin.jpg";
import img1 from "./../../Req img/pen.jpg";
import Edit from "./Edit";

export default function Note() {
  const [show, setShow] = useState(false);
  const [showID, setShowID] = useState();
  const [showD, setShowD] = useState();
  const [showTitle, setTitle] = useState();
  const [showDes, setDes] = useState();
  const [showTDelete, setTDelete] = useState();

  useEffect(() => {
    var show = showTDelete;
    deletaData(show);
  }, [showTDelete]);

  const setChangeT = async function (e) {
    setTitle(e.target.value);
  };

  const setChangeD = async function (e) {
    setDes(e.target.value);
  };

  const postData = async function (e) {
    setShow(false);

    const title = showTitle;
    const des = showDes;
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
    if (e === undefined) {
    } else {
      const title = e;
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
    }
  };

  const editData = async function (t, d) {
    setShowID(t);
    setShowD(d);
  };

  return (
    <div id="NotemTDiv">
      <div className="NoteTDiv">
        <p className="NnoteP">Notes</p>
        <div className="NaddIcon">
          <AddIcon onClick={() => setShow(!show)} className="addIcons" />
        </div>
      </div>
      <div className="Nnote">
        <div>
          {JSONDATA.map((value, key) => {
            return (
              <div
                key={key}
                className="NMapDiv"
                onClick={getData}
                id={value._id}
              >
                <div className="TitleDiv">
                  <form method="DELETE" className="NfomDelete">
                    <input
                      type="text"
                      name=""
                      id="title"
                      value={value.title}
                      spellcheck="false"
                    />
                    <input
                      type="text"
                      name=""
                      id="date"
                      value={value.date}
                      spellcheck="false"
                    />
                  </form>
                </div>
                <form method="DELETE">
                  <textarea
                    name=""
                    id="des"
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
                    onClick={() => editData(value.title, value.des)}
                  />
                  <img
                    src={img0}
                    alt=""
                    className="deleteImg"
                    onClick={() => {
                      setTDelete(value.title);
                      deletaData();
                    }}
                  />
                </div>
              </div>
            );
          })}
          {show ? (
            <div className="modalMDiv">
              <div className="popDiv">
                <form className="form">
                  <input
                    type="text"
                    name=""
                    id="inpTag"
                    onChange={setChangeT}
                  />
                  <textarea
                    name=""
                    cols="30"
                    rows="10"
                    id="TextTag"
                    onChange={setChangeD}
                  ></textarea>
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
        {showID && <Edit valNote={showID} valD={showD} idM={setShowID} />}
      </div>
    </div>
  );
}
