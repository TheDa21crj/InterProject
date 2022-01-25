import React from "react";
import CTable from "./CTable";
import "./CSS/Table.css";

export default function Table() {
  return (
    <div id="TmDiv">
      <CTable
        TableName="Fruits"
        product1="Apples"
        product2="Banana"
        product3="Mango"
        quantity1="500"
        quantity2="50"
        quantity3="20"
      />
      <CTable
        TableName="Vegetables"
        product1="Potatos"
        product2="Tomatoes"
        product3="Onions"
        quantity1="300"
        quantity2="50"
        quantity3="40"
      />
    </div>
  );
}
