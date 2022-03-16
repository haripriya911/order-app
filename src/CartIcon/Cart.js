import classes from "./Cart.module.css";
import Modal from "../Card/Modal";
const Cart = (props) => {
  const CartItems =( <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: "2", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
    console.log("CartItems",CartItems);

  return (
    
<Modal onClose={props.onHideHandler}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
