import React from "react";
import JSONDATA from "./../../Data/NoteList.json";
import "./CSS/Note.css";
import AddIcon from '@material-ui/icons/Add';

export default function Note() {
    return <div id="NotemTDiv">
        <div className="NoteTDiv">
            <p>Note</p>
            <div>
                <AddIcon />
            </div>
        </div>
        <div>
            {JSONDATA.map((value, key) => {
                return (
                    <div key={key} className="NMapDiv">
                        <div className="TitleDiv">
                            <p className="pTagT">{value.title}</p>
                            <p>{value.date}</p>
                        </div>
                        <div>
                            {value.des}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>;
}
