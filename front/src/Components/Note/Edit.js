import React, { useState } from "react";
import "./CSS/Edit.css";

export default function Edit(props) {
  const [showDes, setDes] = useState(props.valD);

  const setData = async function (e) {
    setDes(e.target.value);
  };

  const postData = async function (e) {
    props.idM(null);
    const title = props.valNote;
    const des = showDes;
    try {
      await fetch("http://localhost:5000");
      const r = await fetch("/api/notemaker/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          des,
        }),
      });
      const data = await r.json();
      getData(e);
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
  return (
    <div className="EpopEdit">
      <div className="EeditDiv">
        <form method="PUT" className="EditformDiv">
          <input type="text" name="" id="valNote" value={props.valNote} />
          <textarea type="text" name="" id="showDes" onChange={setData}>
            {showDes}
          </textarea>
        </form>
      </div>
      <div className="EditbtnDiv">
        <button
          id="editCloseBtn"
          onClick={() => {
            props.idM(null);
          }}
        >
          Close
        </button>
        <button onClick={postData} id="editAddBtn">
          Add
        </button>
      </div>
    </div>
  );
}
