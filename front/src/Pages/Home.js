import React from "react";
import HoCss from "./CSS/Home.module.css";
import Search from "./../Components/Search/Search";
import PieChart from "./../Components/PieChart/PieChart";
import Note from "./../Components/Note/Note";
import Rule from "./../Components/Rules/Rule";
import Table from "./../Components/Table/Table";
import Nav from "./../Components/Nav/Nav";

export default function Home() {
  return (
    <div>
      <div className={HoCss.topConDiv}>
        <Nav />
        <div className={HoCss.Hmdiv}>
          <div className={HoCss.test}>
            <Search />
          </div>
          <div className={HoCss.test}>
            <PieChart />
            <Table />
          </div>
          <div className={HoCss.test}>
            <Note />
            <Rule />
          </div>
        </div>
      </div>
    </div>
  );
}
