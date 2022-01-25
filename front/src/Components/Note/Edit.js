import React, { useState } from "react";
import JSONDATA from "./../../Data/NoteList.json";
import "./CSS/Note.css"

export default function Edit(props) {
  const [show, setShowEdit] = useState(true);
  console.log("value\t" + props.valNote);
  return (
    <div>
      <div>
        <form method="PUT">
          <input type="text" value={props.valNote} />
          <textarea name="" id="" cols="30" rows="10">{props.valNote}</textarea>
        </form>
      </div>
      <div></div>
    </div>
  );
}
