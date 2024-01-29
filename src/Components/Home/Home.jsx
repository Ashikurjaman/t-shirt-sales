import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shop from "../Shop/Shop";
import "./Home.css";
import Order from "../Order/Order";
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
  const t_shirtData = useLoaderData();

  const [cart, setCart] = useState([]);

  const handlerCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
        toast("Already Product Added!")
    } else {
      const orderCart = [...cart, tshirt];
      setCart(orderCart);
    }
  };
  const handleDelete = (id) => {
    const remaining = cart.filter(ts=>ts._id !==id) 
    setCart(remaining)
  };

  return (
    <div className="home_container">
      <div className="shopContainer">
        {t_shirtData.map((tshirt) => (
          <Shop key={tshirt._id} handlerCart={handlerCart} tshirt={tshirt} />
        ))}
      </div>
      <div className="cart-container">
        <Order cart={cart} handleDelete={handleDelete}></Order>
      </div>
    </div>
  );
};

export default Home;
