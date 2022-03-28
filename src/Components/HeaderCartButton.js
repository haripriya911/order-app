import classes from"./HeaderCartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import CardContext from "../Store/Card-Context";
import {useContext} from "react";
import { useEffect,useState } from "react";
const HeaderCartButton=(props)=>{
    const [btnIsLight,setBtnIsLight]=useState(false);
    
   const cartCtx=useContext(CardContext);
   const {items}= cartCtx;
    const numberOfCartItems=items.reduce((curtNum,item)=>{
        return curtNum+item.amount;
    },0);
   
const btnClasses=`${classes.button} ${btnIsLight?classes.bump:""}`;
useEffect(()=>{
    if(items.length===0){
        return;
    }
    setBtnIsLight(true);
    const timer=setTimeout(()=>{
        setBtnIsLight(false);
    },300)
    return()=>{
        clearTimeout(timer)
    }
},[items]);
    return(
        <button className={btnClasses} onClick={props.onShown}>
            <span className={classes.icon}>
<CartIcon/>
            </span>
            <span>
                Your cart
            </span>
            <span className={ classes.badge}>
               {numberOfCartItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;