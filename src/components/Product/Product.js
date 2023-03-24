import React from 'react';
import './Product.css'
const Product = (props) => {
    const {addCartHandler} = props;
    const {name, img, price} = props.product;
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="Failed to load!" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button className='cart-btn' onClick={() => addCartHandler(props.product)}>Add to cart </button>
        </div>
    );
};

export default Product;