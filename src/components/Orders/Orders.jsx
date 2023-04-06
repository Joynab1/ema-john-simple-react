import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem1/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaining = cart.map(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
        }
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 my-5 ml-10 gap-10'>
            <div className='col-span-4'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='col-span-1'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;