import React, { useContext } from 'react';
import { CartItem } from './Cart_Items';
// import { products } from '../data'
import { Cartcontext } from '../context/Globalcontext';

export const Cart = () => {

    const {cart} = useContext(Cartcontext);

    return (
        <>
        <h1 className='shop'>Shopping Cart</h1>
        <div className='cart'>
        

            {cart.length === 0 ?
            <p id='empty'>The cart is empty.</p> :

            cart.map(item => <CartItem key={item.id} cart_items={item} />)} 
      </div>
            <p id='total'>Total $ {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <button className='check'>Checkout</button>
        </>
    );
};

