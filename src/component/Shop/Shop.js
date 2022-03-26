import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    <h2> This is :{Products.length}</h2>
                }
            </div>
            <div className='cart-container'>
                <h3> Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;