import React, { useState, useRef, useEffect } from 'react';

export default function CTable(props) {
    const [price1, setprice1] = useState(100);
    const [price2, setprice2] = useState(80);
    const [price3, setprice3] = useState(100);
    const totalPrice = useRef();
    useEffect(() => {
        const interval = setInterval(() => {
            setprice1(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
            setprice2(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
            setprice3(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
        }, 1000);
    }, [])

    const Total = async function (e) {
        console.log(totalPrice.current.innerHTML);
    }

    return <div >
        <p>{props.TableName}</p>
        <table border="1" className="table">
            <tr>
                <th><input type="checkbox" value="" /></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product1}</th>
                <th>{props.quantity1}</th>
                <th>{price1}</th>
            </tr>
            <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product2}</th>
                <th>{props.quantity2}</th>
                <th>{price2}</th>
            </tr>
            <tr>
                <th><input type="checkbox" value="" /></th>
                <th>{props.product3}</th>
                <th onClick={Total}>{props.quantity3}</th>
                <th>{price3}</th>
            </tr>
            <p>Total <span ref={totalPrice}>500</span></p>
        </table>
    </div>;
}
