import React, { useState } from "react";
import JSONDATA from "./../../Data/Showrule.json";
import "./CSS/Rules.css";
import tickIcon from "./../../Req img/tick.jpg";
import addIcon from "./../../Req img/add.jpg";
import deleteIcon from "./../../Req img/bin.jpg";

export default function Rule() {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  const [showRule, setRule] = useState();
  const [showDelete, setDelete] = useState();

  const getData = async function (e) {
    const response = await fetch("http://localhost:5000/api/rules/show");
    const data = await response.json();
  };

  const textAdd = async function (e) {
    setRule(e.target.value);
  };

  const postData = async function (e) {
    setShow(false);
    const rule = showRule;
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
  };

  const getValue = async function (e) {
    if (e.target.checked === true) {
      const rule = showDelete;
      try {
        await fetch("http://localhost:5000");
        const r = await fetch("/api/rules/delete/one", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rule,
          }),
        });
        getData(e);
      } catch (error) {
        console.log(error);
        getData(e);
      }
    }
  };

  const deleteData = async function (e) {
    if (check === false) {
    } else {
      try {
        await fetch("http://localhost:5000");
        const r = await fetch("/api/rules/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        getData(e);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div onClick={getData} className="RmDiv">
      <div className="iconsTile">
        <div className="ruleP">Rules</div>
        <div>
          <img
            src={tickIcon}
            alt=""
            id="RtickIcon"
            onClick={() => setCheck(!check)}
          />
          <img
            src={addIcon}
            alt=""
            id="RaddIcon"
            onClick={() => setShow(!show)}
          />
          <img src={deleteIcon} alt="" id="RdeleteIcon" onClick={deleteData} />
        </div>
      </div>
      <div>
        {JSONDATA.map((value, key) => {
          return (
            <div>
              <div key={key}>
                {check ? (
                  <div className="RradioChecked">
                    <input
                      type="checkbox"
                      name=""
                      id="ckeckIt"
                      checked
                      onChange={() => setDelete(value.rule)}
                    />
                    <form method="DELETE" className="RformDelete">
                      <input
                        type="text"
                        name=""
                        className="rule"
                        value={value.rule}
                        spellcheck="false"
                      />
                    </form>
                  </div>
                ) : (
                  <div id="RradioUnChecked">
                    <input
                      type="checkbox"
                      name=""
                      id="ckeckIt"
                      onChange={() => setDelete(value.rule)}
                      onClick={getValue}
                    />
                    <form method="DELETE" className="RformDelete">
                      <input
                        type="text"
                        name=""
                        className="rule"
                        value={value.rule}
                        spellcheck="false"
                      />
                    </form>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {show ? (
        <div className="AddmDiv">
          <div className="AddDiv">
            <form method="POST" className="AddmForm">
              <input type="text" name="" value="Rules" id="AddValue" />
              <textarea
                name=""
                id="textAdd"
                cols="30"
                rows="10"
                onChange={textAdd}
              ></textarea>
            </form>
            <div className="AddBtnDiv">
              <button id="RbtnClose" onClick={() => setShow(false)}>
                Close
              </button>
              <button id="RbtnAdd" onClick={postData}>
                Add
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
