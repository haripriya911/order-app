import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Card/Modal";
import CardContext from "../Store/Card-Context";
import CartItem from "../CartIcon/CartItem";
const Cart = (props) => {
  const cardCtx = useContext(CardContext);
  const totalAmount = `$ ${cardCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount, "ff");

  const hasItems = cardCtx.items.length > 0;
  const cartItemRemove = (id) => {
    console.log(id, "id");
    cardCtx.removeItem(id);
  };
  const cartItemAdd = (item) => {
    cardCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  console.log("CartItems");

  return (
    <Modal onClose={props.onHideHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideHandler}
        >
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={() => alert("thanks for your order")}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
