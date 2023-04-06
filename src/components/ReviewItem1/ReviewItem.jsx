import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleRemoveFromCart}) => {
    const { id, img, name, quantity, price } = product;
    return (
    <div className='border rounded-lg mb-5 p-7 flex gap-10'>
            <img className='h-[91px] w-[91px] border rounded-md' src={img} alt="" />
        <div className='flex w-full justify-between items-center'>
            <div className='font-semibold'>
                <p>{name}</p>
                <p>Price: <span className='text-orange-300'>${price}</span></p>
                <p>Order Quantity: <span className='text-orange-300'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='px-4 py-2 bg-red-300 border rounded-full h-[55px] w-[55px]'><FontAwesomeIcon className='text-red-600' icon={faTrashAlt} /></button>
        </div>
    </div>
    );
};

export default ReviewItem;