import React from "react";
import Search from "./../Components/Search/Search";
import WatchList from "./../Components/WatchList/WatchList";
import PieChart from "./../Components/PieChart/PieChart";

export default function Home() {
    return (
        <div>
            <div>
                <Search />
                <WatchList />
            </div>
            <div>
                <PieChart />
            </div>
        </div>
    );
}
