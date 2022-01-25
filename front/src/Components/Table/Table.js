import React from 'react';
import CTable from "./CTable";
import "./CSS/Table.css";

export default function Table() {
    return <div>
        <CTable TableName="Fruits" />
        <CTable TableName="Vegetables" />
    </div>;
}
