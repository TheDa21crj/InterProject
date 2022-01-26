import React, { useState, useEffect } from "react";
import JSONDATA from "./../../Data/Data.json";
import "./CSS/Note.css"

export default function Edit(props) {
  const [show, setShowEdit] = useState();
  console.log("value\t" + props.valNote);

  // useEffect(async () => {
  //   const response = await fetch("http://localhost:5000/api/notemaker/find");
  // }, [])
  return (
    <div>
      <div className="editMDiv">
        {/* {JSONDATA.map((value, key) => { */}
        <div>
          <form method="PUT">
            <input type="text" name="" id="title" value={props.valNote} />
            <textarea name="" id="des" cols="30" rows="10">
              {/* {props.valNote} */}
            </textarea>
          </form>
          <div>
            <button
              onClick={() => {
                props.idM(null);
              }}
            >
              Close
            </button>
            <button>Edit</button>
          </div>
        </div>
        {/* })} */}

      </div>
    </div>
  );
}