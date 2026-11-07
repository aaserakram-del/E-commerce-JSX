import Home from './pages/Home'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from './pages/Shope';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';

import Layout from './components/Layout';




export default function App() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {

    AOS.init({
      duration: 700,
      once: false,
      offset: 120,
    });

  }, []);



  return (

    <BrowserRouter>


      <Routes>


        <Route element={<Layout cart={cart} setCart={setCart}/>}>


          <Route path="/" element={<Home />} />


          <Route path="/shop" element={<Shop />} />


          <Route path="/product/:id"
            element={
              <ProductDetails
                cart={cart}
                setCart={setCart}
              />
            }
          />


          <Route path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
              />
            }
          />


          <Route path="/Login" element={<Login />} />


        </Route>


      </Routes>


    </BrowserRouter>

  )

}