import React from "react";
import HoCss from "./CSS/Home.module.css";
import Search from "./../Components/Search/Search";
import WatchList from "./../Components/WatchList/WatchList";
import PieChart from "./../Components/PieChart/PieChart";
import Note from "./../Components/Note/Note"
export default function Home() {
    return (
        <div className={HoCss.Hmdiv}>
            <div>
                <Search />
                <WatchList />
            </div>
            <div>
                <PieChart />
            </div>
            <div>
                <Note />
            </div>
        </div>
    );
}
