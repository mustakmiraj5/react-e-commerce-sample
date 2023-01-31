import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const addCartHandler = (product) => {
        const newCart = [...cartItem, product];
        setCartItem(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addCartHandler={addCartHandler}></Product>)
                }
            </div>
            <div className="cart-container">
            <h2>Order Summery</h2>
            <p>Selected Items: {cartItem.length}</p>
            </div>
        </div>
    );
};

export default Shop;