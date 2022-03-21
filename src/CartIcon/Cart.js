import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Card/Modal";
import CardContext from "../Store/Card-Context";
import CartItem from "../CartIcon/CartItem";
const Cart = (props) => {
  const cardCtx=useContext(CardContext);
  const totalAmount=`$ ${cardCtx.totalAmount.toFixed(2)}`;
  
  const hasItems=cardCtx.items.length>0;
  const cartItemRemove=id=>{};
  const cartItemAdd=item=>{};
  const CartItems =( <ul className={classes["cart-items"]}>
      {/*[{ id: "c1", name: "sushi", amount: "2", price: 12.99 }]*/cardCtx.items.map((item) => (
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
      onRemove={cartItemRemove.bind(null,item.id)}
      onAdd={cartItemAdd.bind(null,item)}/>
        
        
      ))}
    </ul>
  );
    console.log("CartItems",CartItems);

  return (
    
<Modal onClose={props.onHideHandler}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideHandler}>Close</button>
       { hasItems&&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
