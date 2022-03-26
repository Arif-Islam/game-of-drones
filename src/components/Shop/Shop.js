import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomProduct, setRandomProduct] = useState('');

    const clearCart = () => {
        setCart([]);
        setRandomProduct('');
    }

    const generateRandomProduct = (cart) => {  
        const randomProduct = cart[Math.floor(Math.random() * cart.length)];
        setRandomProduct(randomProduct);
        console.log('random', randomProduct.name);   
    }

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

                <h3>Randomly Selected</h3>
                <input type="text" value={randomProduct.name} style={{textAlign:'center'}}/>
                <p></p>
                <button onClick={() => generateRandomProduct(cart)}>Choose one for me</button>
                <p></p>
                <button onClick={() => clearCart()}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;