import React, { useState } from "react";
import JSONDATA from "./../../Data/NoteList.json";
import "./CSS/Note.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Note() {
    const [show, setShow] = useState(false);

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
        console.log(e.target);
    };
    return (
        <div id="NotemTDiv">
            <div className="NoteTDiv">
                <p>Note</p>
                <div>
                    <AddIcon onClick={() => setShow(!show)} className="addIcons" />
                </div>
            </div>
            <div>
                {JSONDATA.map((value, key) => {
                    return (
                        <div key={key} className="NMapDiv" onClick={getData}>
                            <div className="TitleDiv">
                                <p className="pTagT">{value.title}</p>
                                <p>{value.date}</p>
                            </div>
                            <div>{value.des}</div>
                            <div className="iconsHover">
                                <EditIcon />
                                <DeleteIcon />
                            </div>
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
