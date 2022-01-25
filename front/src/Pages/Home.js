import React from "react";
import HoCss from "./CSS/Home.module.css";
import Search from "./../Components/Search/Search";
import PieChart from "./../Components/PieChart/PieChart";
import Note from "./../Components/Note/Note";
import Rule from "./../Components/Rules/Rule";
import Table from "./../Components/Table/Table";

export default function Home() {
  return (
    <div className={HoCss.Hmdiv}>
      <div>
        <Search />
      </div>
      <div>
        <PieChart />
        <Table />
      </div>
      <div>
        <Note />
        <Rule />
      </div>
    </div>
  );
}
