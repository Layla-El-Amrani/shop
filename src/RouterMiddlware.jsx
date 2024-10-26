
import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";



import Home from './Component/Home';
import About from './Component/About';
import Cart from './Component/Cart';

export default function RouterMiddlware({setCount})  {
  const [cartItem,setCartItem] = useState([])

  return (
  
      <Routes>
        <Route path="/" exact element={<Home setCartItem={setCartItem} setCount={setCount}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>} />
      </Routes>

  );
};

