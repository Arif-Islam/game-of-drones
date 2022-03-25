import React from 'react';

const Cart = ({ item }) => {
    // const { name } = cart;
    console.log(item);
    return (
        <div>  
            <p>{item.name}</p>
        </div>
    );
};

export default Cart;