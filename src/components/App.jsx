import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';

import { useState, useEffect } from 'react';

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [latestRoll, setLatestRoll] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const updateCart = (Roll) => {
    setCartSize(cartSize + 1);
    setCartTotal(cartTotal + parseFloat(Roll.price));
    setLatestRoll(Roll);
  };

  useEffect(() => {
    setShowPopup(true);
    let timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [cartSize]);

  return (
    <div className="App">
      <Navbar cartSize={cartSize} cartTotal={cartTotal} roll={latestRoll} showPopup={showPopup} />
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
