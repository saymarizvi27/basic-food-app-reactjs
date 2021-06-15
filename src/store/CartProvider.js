import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    item:[],
    totalAmount:0
}

const cartReducer = (state , action) =>{
    if(action.type==='ADD'){
     const updatedItems = state.item.concat(action.item);
     const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
     return {
         item:updatedItems,
         totalAmount:updatedTotalAmount
     }
    }
    if(action.type==='REMOVE'){
     
    }
    return defaultCartState;
};

const CartProvider = props =>{
    const[cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = item =>{
        dispatchCartAction({type:'ADD' ,item:item});
    },

    const removeItemToCartHandler = id=>{
        dispatchCartAction({type:'ADD' ,id:id});
    },


    const cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
    };

    return (

    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>)


}


export default CartProvider;
