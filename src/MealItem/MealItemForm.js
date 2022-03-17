import { useRef,useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../Card/Input";
const MealItemForm = (props) => {
  const[validItem,setValidItem]=useState(true);
  const amountInputRef=useRef();
  const submitHandler=event=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    if(enteredAmount.trim().length===0||
    enteredAmount<1||
    enteredAmount>5){
      setValidItem(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount",
            type: "Number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
          }}
        />
        <button className={classes.button}>+ADD</button>
        {!validItem && <p>please enter a amount (1-5)</p>}
      </form>
    </div>
  );
};
export default MealItemForm;
