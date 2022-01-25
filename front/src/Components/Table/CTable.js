import React, { useState, useRef, useEffect } from 'react';

export default function CTable(props) {
    const [price1, setprice1] = useState(100);
    const [price2, setprice2] = useState(80);
    const [price3, setprice3] = useState(100);
    const [total, setTotal] = useState(54000)
    // const totalPrice = useRef();
    useEffect(() => {
        setInterval(() => {
            setprice1(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
            setprice2(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
            setprice3(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
            setTotal((price1 * (Number(props.quantity1))) + (price2 * (Number(props.quantity2))) + (price3 * (Number(props.quantity3))))
        }, 1000);
    }, [])

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
                <th>{props.quantity3}</th>
                <th>{price3}</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>{total}</th>
            </tr>
        </table>
    </div>;
}
