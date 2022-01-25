import React from 'react';

export default function CTable(props) {
    return <div >
        <p>{props.TableName}</p>
        <table border="1" className="table">
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
        </table>
    </div>;
}
