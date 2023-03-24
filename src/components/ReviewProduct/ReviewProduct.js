import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = ({ product, removeItemHandler }) => {
        const {id, name, quantity, price, img} = product;
    return (
        <div className='total-orders'>
           <div>
                <img src={img} alt="" />
           </div>
           <div>
                <p>{name}</p>
                <p>Amount : {quantity}</p>
                <p>Price : {price}</p>
                <button className='review-cart-btn' onClick={() => removeItemHandler(id)}>Remove</button>
           </div>
        </div>
    );
};

export default ReviewProduct;