import React from 'react';
import { Product } from './Product';
import { products } from '../data';

export const ProductList = () => {
    return (
        <>
        <nav>
            <a href='/'>NGOZI'S SHOP</a>
            <ul>
                <li><a href='/'>Cosmetics</a></li>
                <li><a href='/'>Pomade</a></li>
                <li><a href='/'>Beauty Bars</a></li>
                <li><a href='/'>Userpage</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact us</a></li>
            </ul>
        </nav>
        <div className='ProductList'>
{/* Map through product_data array in the data.js and render a product component for each item */}
            {products.map(item => ( <Product key={item.id} trial={item} />
        ))}
  
        </div>
        </>
    )
}

   