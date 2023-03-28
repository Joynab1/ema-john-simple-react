import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        // step-1: get id
        for (const id in storedCart) {
            // step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            // step-3: get quantity of the product
            // const quantity = storedCart[id];
            // addedProduct.quantity = quantity;
            // console.log(addedProduct)
        }
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className=' min-w-[1440px] grid grid-cols-1 md:grid-cols-5  ml-10 my-5'>
            <div className='col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='col-span-1 '>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;