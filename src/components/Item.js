import React from 'react';

export default function Item({ product, qty, price }) {
    const total = qty * price;
    return (
        <tr>
            <td>{product}</td>
            <td>{qty}</td>
            <td>{price}</td>
            <td>{(total % 1 !== 0) ? total.toFixed(2) : total}</td>
        </tr>
    );
}