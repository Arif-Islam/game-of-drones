import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // destructuring product properties from for later use
    const { name, image, price } = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h2 className='name'>{name}</h2>
            <h2 className='price'>Price: <span style={{ color: '#F77F00' }}>{price}</span></h2>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;