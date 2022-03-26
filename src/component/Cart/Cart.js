import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    const { name, img } = cart;


    return (

        <div className='cart-container' >

            <div className='cart'>
                <img src={img} alt="" />
                <p>{name}</p>

            </div>
            <div>
                <p><button>Choese</button></p>
            </div>
        </div>

    );
};

export default Cart;