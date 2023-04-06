import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart, handleClearCart, children}) => {
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
            <button onClick={handleClearCart} className='px-4 py-3 bg-red-500 rounded-lg text-white flex justify-between items-center w-full'>
                <span>Clear Cart</span> <FontAwesomeIcon className='text-white' icon={faTrashAlt}/>
                </button>
                {children}
        </div>
    );
};

export default Cart;