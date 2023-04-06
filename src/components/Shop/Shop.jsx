import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


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
        const savedCart = [];
        // step-1: get id
        for (const id in storedCart) {
            // step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            // step-3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
            //sept-4: add the added cart to the saved cart 
                savedCart.push(addedProduct);
            }
        }
        // sept-5: set the cart
        setCart(savedCart);
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
        console.log('hihihi')
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
                
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                 <Link to='orders'>
                    <button className='px-4 py-3 bg-purple-400 mt-3 w-full rounded-lg flex justify-between items-center'> <span>Review Order</span> <FontAwesomeIcon className='text-white' icon={faArrowAltCircleRight}/></button>
                    </Link>   
                </Cart>
            </div>
        </div>
    );
};

export default Shop;