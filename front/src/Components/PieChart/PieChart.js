import React from 'react';
import "./CSS/PieChart.css"

export default function PieChart() {
    return <div>
        <div className="pie-chart"></div>
        <div>
            <p><span id="item1"></span>Item 1 - 35%</p>
            <p><span id="item2"></span>Item 2 - 25%</p>
            <p><span id="item3"></span>Item 3 - 15%</p>
            <p><span id="item4"></span>Item 4 - 14%</p>
            <p><span id="item5"></span>Item 5 - 11%</p>
        </div>
    </div>;
}
