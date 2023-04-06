import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem1/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'



const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
        console.log('hihihi')
    }
    return (
        <div className=' w-[1440px] m-auto grid grid-cols-1 md:grid-cols-5 my-5 ml-10 gap-10'>
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
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
               <Link to='/checkOut'>
                <button className='px-4 py-3 bg-purple-400 mt-3 w-full rounded-lg flex justify-between items-center'> <span>CheckOut Proceed </span> <FontAwesomeIcon className='text-white' icon={faTrashAlt}/></button>
               </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;