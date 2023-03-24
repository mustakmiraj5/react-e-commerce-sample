import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import { useLoaderData } from "react-router-dom";
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const orders = useLoaderData();
    const {products,finalCart} = orders;
    const [cart, setCart] = useState(finalCart);
    const removeItemHandler = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-item'>
            {
                cart.map(item => <ReviewProduct key={item.id} product={item} removeItemHandler={removeItemHandler}></ReviewProduct>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;