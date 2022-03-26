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

    const handleAddToCart = (selectecProduct) => {
        // console.log(selectecProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectecProduct.id);
        if (!exists) {
            selectecProduct.quantity = 1;
            newCart = [...cart, selectecProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectecProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }


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
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;