import CardContext from "./Card-Context"
const CardProvider=(props)=>{
    const addItemToCartHandler=item =>{}
    const removeItemFromCartHandler=id =>{}
    const   cardContext=[{
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }]
    return(
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
    )
}
export default CardProvider;