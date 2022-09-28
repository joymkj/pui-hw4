import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';
import CartPopup from './CartPopup';

import { useState, useEffect } from 'react';

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [latestRoll, setLatestRoll] = useState('');

  const updateCart = (Roll) => {
    setCartSize(cartSize + 1);
    setCartTotal(cartTotal + parseFloat(Roll.price));
    setLatestRoll(Roll);
  };

  useEffect(() => {
    console.log(latestRoll);
    console.log(cartSize);
    console.log(cartTotal);
  }, [cartSize]);

  return (
    <div className="App">
      <CartPopup roll={latestRoll} />
      <Navbar cartSize={cartSize} cartTotal={cartTotal} />

      <div className="Gallery">
        <Product id="original" updateCart={updateCart} />
        <Product id="apple" updateCart={updateCart} />
        <Product id="raisin" updateCart={updateCart} />
        <Product id="walnut" updateCart={updateCart} />
        <Product id="double_chocolate" updateCart={updateCart} />
        <Product id="strawberry" updateCart={updateCart} />
      </div>
    </div>
  );
}

export default App;
