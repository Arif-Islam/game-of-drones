import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomNumber, setRandomNumber] = useState('');

    const generateRandomNumber = () => {
        console.log(cart);
        const names = [];
        for (const name of cart) {
            names.push(name);
        }
        const randomNumber = Math.floor(Math.random() * names.length);
        setRandomNumber(randomNumber);
    }
    console.log(randomNumber);
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        if (cart.includes(selectedProduct) === false) {
            newCart = [...cart, selectedProduct];
        }
        else {
            newCart = [...cart];
        }
        setCart(newCart);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Items</h2>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
                <button onClick={() => generateRandomNumber}>Choose one for me</button>
            </div>
        </div>
    );
};

export default Shop;