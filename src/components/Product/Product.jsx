import React from 'react';

const Product = (props) => {
    const { name, category, seller, price, img, quantity, ratings } = (props.product)
    const handleAddToCart =props.handleAddToCart;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-2xl my-5">
                <figure className='h-[286px] w-[286px]'><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h3 className="card-title font-bold">{name}</h3>
                    <h4 className='font-semibold'>Price: ${price}</h4>
                </div>
                <p>{seller}</p>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold'> Ratings: {ratings} </p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </span>
                </div>
                <div className="card-actions w-full justify-center mt-4 ">
                    <button className="btn btn-wide bg-[#95A0A7]{hover:bg-slate-200" onClick={() => handleAddToCart(props.product)}>Add to Cart <span className='ml-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </span> </button>

                </div>


            </div>
        </>
    );
};

export default Product;