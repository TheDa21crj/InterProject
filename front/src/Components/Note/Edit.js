import React, { useState } from "react";

export default function Edit(props) {
  const [show, setShowEdit] = useState(true);
  return (
    <div>
      {show ? (
        <div className="editMDiv">
          <div>
            <form method="PUT">
              <input type="text" name="" id="title" value={props.valNote} />
              <textarea name="" id="des" cols="30" rows="10">
                {props.textNote}
              </textarea>
            </form>
            <div>
              <button
                onClick={() => {
                  setShowEdit(false);
                }}
              >
                Close
              </button>
              <button> Edit </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
