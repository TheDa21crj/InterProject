import React, { useState } from "react";
import JSONDATA from "./../../Data/Showrule.json";
import "./CSS/Rules.css";
import tickIcon from "./../../Req img/tick.jpg";
import addIcon from "./../../Req img/add.jpg";
import deleteIcon from "./../../Req img/bin.jpg";

export default function Rule() {
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);

    const getData = async function (e) {
        const response = await fetch("http://localhost:5000/api/rules/show");
        const data = await response.json();
    };

    const postData = async function (e) {
        setShow(false);
        const rule = document.getElementById("textAdd").value;
        console.log(rule);
        try {
            await fetch("http://localhost:5000");
            const r = await fetch("/api/rules", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rule,
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
    }

    const slelctAll = async function (e) {
        const a = document.getElementsByClassName("ckeckIt").checked = true;
        console.log(a);
    }
    return (
        <div onClick={getData} className="RmDiv">
            <div className="iconsTile">
                <div>Rules</div>
                <div>
                    <img src={tickIcon} alt="" id="RtickIcon" onClick={slelctAll} />
                    <img src={addIcon} alt="" id="RaddIcon" onClick={() => setShow(!show)} />
                    <img src={deleteIcon} alt="" id="RdeleteIcon" />
                </div>
            </div>
            <div>
                {JSONDATA.map((value, key) => {
                    return (
                        <div>
                            <input type="radio" name="" className="ckeckIt" />
                            <form action="">
                                <input type="text" name="" id="" value={value.rule} />
                            </form>
                        </div>
                    )
                })}
            </div>
            {
                show ? (<div className="AddmDiv">
                    <div className="AddDiv">
                        <form method="POST" className="AddmForm">
                            <input type="text" name="" value="Rules" id="AddValue" />
                            <textarea name="" id="textAdd" cols="30" rows="10"></textarea>
                        </form>
                        <div className="AddBtnDiv">
                            <button id="RbtnClose" onClick={() => setShow(false)}>Close</button>
                            <button id="RbtnAdd" onClick={postData}>Add</button>
                        </div>
                    </div>
                </div>) : null
            }
        </div>
    );
}
