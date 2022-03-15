import classes from "./MealItemForm.module.css";
import Input from "../Card/Input";
const MealItemForm = (props) => {
  return (
    <div>
      <form className={classes.form}>
        <Input
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
      </form>
    </div>
  );
};
export default MealItemForm;
