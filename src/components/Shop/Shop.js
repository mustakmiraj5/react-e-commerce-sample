import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    // console.log(typeof products)

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            // console.log(products)
           
            const addedProducts = products.find(product=> product.id === id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                // console.log(addedProducts)
                savedCart.push(addedProducts)
            }
        }
        setCartItem(savedCart);
    },[products])

    const addCartHandler = (selectedProduct) => {
        let newCart = [];
        const exist = cartItem.find(product => product.id === selectedProduct.id)
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cartItem, selectedProduct];
        }else{
            const rest = cartItem.filter(product => product.id !== selectedProduct.id);
            exist.quantity += 1;
            newCart = [...rest, exist];
        }
        setCartItem(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addCartHandler={addCartHandler}></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cartItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;