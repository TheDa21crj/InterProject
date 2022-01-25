import React, { useState } from "react";
import "./CSS/Note.css"

export default function Edit(props) {
  const [show, setShowEdit] = useState(true);
  console.log("value\t" + props.valNote);
  return (
    <div>
      {show ? (
        <div className="editMDiv">
          <div>
            <form method="PUT">
              <input type="text" name="" id="title" value={props.valNote.title} />
              <textarea name="" id="des" cols="30" rows="10">
                {props.textNote}
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
      ) : null}
    </div>
  );
}
