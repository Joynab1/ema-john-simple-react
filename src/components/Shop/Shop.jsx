import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className=' min-w-[1440px] grid grid-cols-1 md:grid-cols-5 font-bold text-3xl ml-10 my-5'>
            <div className='col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='col-span-1'>
                <h1>Order Summary</h1>
                <h3>Added items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;