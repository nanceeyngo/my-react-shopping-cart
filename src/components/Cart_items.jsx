import React, {useContext} from 'react';
import { Cartcontext } from '../context/Globalcontext';

export const CartItem = ({ cart_items }) => {


    const {dispatch} = useContext(Cartcontext);


    const incrementQuantity = () => {
        dispatch({type : 'INCREMENT_QUANTITY', payload: cart_items});
    };

     // function to increment item quantity
    const decrementQuantity = () => {
        dispatch({type : 'DECREMENT_QUANTITY', payload: cart_items })
    };

     // function to Remove item from cart
    const removeFromCart = () => {
        dispatch({type : 'REMOVE_FROM_CART', payload: cart_items})
    };


    return (
        
        <div className='cart-item'>
           <img src={cart_items.thumbnail} alt={cart_items.name}/> 
        <div className='details'> 
        <h4>{cart_items.name}</h4>
        <p>Price ${cart_items.price}</p>
        <p>
            Quantity:
            <button className='qnty-btn' onClick={decrementQuantity}>-</button>
            {cart_items.quantity}
            <button className='qnty-btn' onClick={incrementQuantity}>+</button>
            <button className='qnty-btn' onClick={removeFromCart}>Remove</button>
        </p>
       
        </div>
        </div>
    );

};