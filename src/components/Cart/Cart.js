import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(props)
    // let total = cart.price.reduce((prev,next) => {
    //     return prev+next;
    // },0)

    let total = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity
        total = total+product.price * product.quantity;
    }

    let Shipping = 0;
    for(const p of cart){
        Shipping += p.shipping;
    }

    let tax = (total * 0.1).toFixed(1);
    let gtotal = parseFloat(tax)+Shipping+total;

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${Shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${gtotal}</h5>
            <button className='check-out'><Link to={'/order'}>Order now</Link></button>
        </div>
    );
};

export default Cart;