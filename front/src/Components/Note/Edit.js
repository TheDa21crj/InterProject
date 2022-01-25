import React, { useState, useEffect } from "react";
import "./CSS/Note.css"

export default function Edit(props) {
  const [show, setShowEdit] = useState();
  console.log("value\t" + props.valNote);

  useEffect(async () => {
    console.log("first");
  }, [])
  return (
    <div>
      <div className="editMDiv">
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
      </div>
    </div>
  );
}
