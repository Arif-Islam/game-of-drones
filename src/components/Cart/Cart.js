import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, randomProduct, generateRandomProduct, clearCart } = props;

    return (
        <div>
            <h2>Selected items: {cart.length}</h2>
            {
                cart.map(item => <p style={{ fontSize: '17px' }} key={item.id}>{item.name}</p>)
            }
            <h3>Randomly Selected</h3>
            <input className='showRandom' type="text" value={randomProduct.name} style={{ textAlign: 'center' }} />
            <p></p>
            <button className='btnRandom' onClick={() => generateRandomProduct(cart)}>Choose one for me</button>
            <p></p>
            <button className='btnClear' onClick={() => clearCart()}>Choose Again</button>
        </div>
    );
};

export default Cart;