import classes from"./HeaderCartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import CardContext from "../Store/Card-Context";
import {useContext} from "react";
const HeaderCartButton=(props)=>{
  /*  const cartCtx=useContext(CardContext);
    const numberOfCartItems=cartCtx.items.reduce((curtNum,item)=>{
        return curtNum+item.amount;
    },0);*/

    return(
        <button className={classes.button} onClick={props.onShown}>
            <span className={classes.icon}>
<CartIcon/>
            </span>
            <span>
                Your cart
            </span>
            <span className={ classes.badge}>
               3
            </span>
        </button>
    )
}
export default HeaderCartButton;