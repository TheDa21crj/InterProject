import React from "react";
import "./CSS/PieChart.css";

export default function PieChart() {
  return (
    <div className="PieChartmDiv">
      <div className="pie-chart">
        <div className="centerWhite"></div>
      </div>
      <div className="chatKey">
        <p>
          <span id="item1"></span>Item 1 - 35%
        </p>
        <p>
          <span id="item2"></span>Item 2 - 25%
        </p>
        <p>
          <span id="item3"></span>Item 3 - 15%
        </p>
        <p>
          <span id="item4"></span>Item 4 - 25%
        </p>
      </div>
    </div>
  );
}
