import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // useStates for products, cart, random item
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomProduct, setRandomProduct] = useState('');

    // clear selected items
    const clearCart = () => {
        setCart([]);
    }

    // generate random item from selected items
    const generateRandomProduct = (cart) => {
        const randomProduct = cart[Math.floor(Math.random() * cart.length)];
        setRandomProduct(randomProduct);
        // console.log('random', randomProduct.name);
    }

    // add selected items to cart on cart button click
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

    // fetch fake data from products.json
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>
            {/* products section */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            {/* cart section */}
            <div className='cart-container'>
                <Cart cart={cart}
                    generateRandomProduct={generateRandomProduct}
                    clearCart={clearCart}
                    randomProduct={randomProduct}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;