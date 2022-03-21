import CardContext from "./Card-Context"
import { useReducer } from "react"
const defaultCartState={
    items:[],
    totalAmount:0

}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount+(action.item.price* action.item.Amount);
        
        const updatedItems= state.items.concat(action.item);
        
    
    return{
        items :updatedItems,
        totalAmount:updatedTotalAmount
    };

    }
return defaultCartState;
};
const CardProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler=item =>{
        dispatchCartAction({type :"ADD" ,item:item});
    }
    const removeItemFromCartHandler=id =>{
        dispatchCartAction({type:"Remove",id:id})
    }
    const   cardContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return(
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardProvider;