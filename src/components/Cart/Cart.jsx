import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // shorthand
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='bg-amber-200 p-4 sticky top-0'>
            <h1>Order Summary</h1>
            <h3>Added items: {quantity}</h3>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;