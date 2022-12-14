import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    const handleAddToCart = (Product) => {
        const newCart = [...cart, Product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    Products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                {cart.map((cart) => (
                    <Cart key={cart.id} cart={cart}> </Cart>
                ))}


            </div>
        </div>
    );
};

export default Shop;