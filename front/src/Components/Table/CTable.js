import React from 'react';

export default function CTable(props) {
    return <div >
        <p>{props.TableName}</p>
        <table border="1" className="table">
            <tr>
                <th><input type="checkbox" value="" /></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr> <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product1}</th>
                <th>{props.quantity1}</th>
                <th>priceChange</th>
            </tr> <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product2}</th>
                <th>{props.quantity2}</th>
                <th>priceChange</th>
            </tr> <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product3}</th>
                <th>{props.quantity3}</th>
                <th>priceChange</th>
            </tr>
        </table>
    </div>;
}
