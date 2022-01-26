import React from "react";
import "./CSS/Note.css"

export default function Edit(props) {
  return (
    <div>
      <div>
        <form method="GET">
          <input type="text" name="" id="" value={props.valNote} />
          <textarea type="text" name="" id="" >{props.valD}</textarea>
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            props.idM(null);
          }}
        >Close</button>
        <button>Add</button>
      </div>
    </div>
  );
}