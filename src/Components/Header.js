
import Meals from "../Components/Meals.jpg";
import classes from "./Header.module.css";

const Header=(props)=>{

    return(
        <>
        <div >
            <header className={classes.header}>
            <h3>REACT MEALS</h3>
            
            <button>  Cart</button>
            
            </header>
            </div>
            <div className={classes['image']} >
                <img src={Meals }  ></img>
            </div>
        
</>
    );
}
export default Header;