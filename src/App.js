import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Meals from './Meals/Meals';
import Cart from './CartIcon/Cart';
import CardProvider from './Store/CardProvider';


function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
  
      <CardProvider>
     {  cartIsShown && <Cart onHideHandler={hideCartHandler}/>}
      <Header onShownHandler={showCartHandler}/>
      
      <Meals></Meals>
    
      </CardProvider>

    
  );
}

export default App;
