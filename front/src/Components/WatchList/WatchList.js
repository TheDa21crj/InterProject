import React from 'react';
import JSONDATA from "./../../Data/showList.json";

export default function WatchList() {
    const getData = async function (e) {
        const response = await fetch('http://localhost:5000/api/showwatchList');
        const data = await response.json();
        console.log(typeof data);
    }
    return <div onClick={getData}>
        <div>
            {JSONDATA.map((value, key) => {
                return (
                    <div>
                        <div key={key}>
                            <p type="text" >{value.name}</p>
                        </div>
                    </div>
                )
            })}
            <div id="container"></div>
        </div>
    </div>;
}
