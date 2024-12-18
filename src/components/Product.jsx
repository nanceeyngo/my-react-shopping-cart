import React, { useContext } from 'react';
import { Cartcontext } from '../context/Globalcontext';
// import { Cart } from './Cart';

export const Product = ({ trial, }) => {

    const {dispatch} = useContext(Cartcontext)
   
    const AddToCart = () => {
        dispatch ({
            type: 'ADD_TO_CART', payload: trial
        })
    };
    return (
        <div className='product'>
            <img src={trial.thumbnail} alt={trial.name}/>
            <h3>{trial.name}</h3>
            <span className='price'>$ {trial.price}</span>
            <span className='description'>{trial.description}</span>
            <span id='stock'>in stock: {trial.stock} pcs</span>
            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}


