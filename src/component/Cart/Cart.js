import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let name = [];
    let img = [];


    for (const product of cart) {

        name = product.name;
        img = product.img;

    }

    return (
        <div className='cart-continer'>
            <h3> Order Summary</h3>

            <div className='cart'>
                <img src={img} alt="" />
                <p> {name} </p>

            </div>
            <button>couse for me</button>
            <button> couse again</button>




        </div>
    );
};

export default Cart;