import React, { createContext, useReducer } from "react";



export const Cartcontext = createContext();

const Cartreducer = (state, action) => {
    switch (action.type){

        case 'ADD_TO_CART':

        //Check if the item is already in the cart
        const itemcart = state.find(item=> item.id === action.payload.id);
        if (itemcart) {
            //if the item is in the cart and the quantity is less than the stock, increase the quantity
        
            if (itemcart && itemcart.quantity < itemcart.stock) {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1} : item
            );
        }else {
            //alert if the item is out of stock

                alert (`Cannot add more ${itemcart.name}. Out of Stock.`);
            //if the item is already in the cart and the stock is 0, return the state unchanged

                return state;
        }
       
        //if the item is not in the cart and the stock is greater than 0, add the item with quantity 1

        } else if (!itemcart && action.payload.stock > 0) {

            return [...state, {...action.payload, quantity: 1}];

        }else {
            //alert if the item is out of stock
    
            alert(`Cannot add more ${itemcart.name}. Out of Stock.`);

        //if the item is already in the cart and the stock is 0, return the state unchanged
           
        return state;
        }
           
        //THE FORMER SIMPLIFIED SYNTAX
            // if (action.payload.stock > 0) {
            //     return [...state, {...action.payload, quantity : 1}];
            // }else{
            //     alert('Out of Stock!');
            // };
                    

         case 'REMOVE_FROM_CART':
             // Remove the item from the cart based on its id
            return state.filter(item => item.id !== action.payload.id);

        
         case 'INCREMENT_QUANTITY':
            const itemcart2 = state.find(item=> item.id === action.payload.id);
         if(itemcart2.quantity < itemcart2.stock){
            return state.map(item => item.id === action.payload.id? {...item, quantity: item.quantity + 1} : item);
         }else{
             //alert if the item is out of stock

             alert (`Cannot add more ${itemcart2.name}. Out of Stock.`);
             //if the item is already in the cart and the stock is 0, return the state unchanged
            return state;
         }
         //the former method that was not popping an alert when item is out of stock
         
         //increment the quantity of the item if it is less than the stock
            // return state.map(item => item.id === action.payload.id && item.quantity < item.stock 
            //     ? { ...item, quantity: item.quantity + 1 } : item);


                

            case 'DECREMENT_QUANTITY' :
                //decrement the quantity of the item if it's greater than 1
                return state.map(item => item.id === action.payload.id && item.quantity > 0 ? {...item, quantity: item.quantity - 1 }: item

                ).filter(item => item.quantity > 0);    


            // case 'SET_CART' :
            //     return action.payload;
            
            default:
                 // Return the state unchanged for unrecognized action types
                return state;
       
    };

};
// Create a provider component to wrap around parts of the app
export const CartProvider = ({children}) => {
    // Initialize the cart state with useReducer
    const [cart, dispatch] = useReducer(Cartreducer, []);

    return (
        // Provide the cart state and dispatch function to the component tree
        <Cartcontext.Provider value={{cart, dispatch}}>
            {children}      {/* Render children components within the provider */}
        </Cartcontext.Provider>
    )
}

 // const itemsincart = state.find(item => item.id === action.payload.id);
       
    //     if (itemsincart){

    //     if(itemsincart.quantity < action.payload.stock) {
    //         return state.map(items => items.id === action.payload.id ? {...items, quantity: items.quantity + 1} : item)

    //     }

    // }