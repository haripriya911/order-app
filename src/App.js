import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Meals from './Meals/Meals';
import Cart from './CartIcon/Cart';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <div >
      
     {  cartIsShown && <Cart onHideHandler={hideCartHandler}/>}
      <Header onShownHandler={showCartHandler}/>
      
      <Meals></Meals>
      
      
      
    </div>
  );
}

export default App;
