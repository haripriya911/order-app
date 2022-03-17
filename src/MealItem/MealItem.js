import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CardContext from "../Store/Card-Context";

const MealItem=(props)=>{
    const conCtx=useContext(CardContext)
    const price=`$ ${props.price}`;
    const addToCartHandler=amount=>{
        conCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    };
    return(
        
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
                </div>
            </li>
        
    )
}
export default MealItem;