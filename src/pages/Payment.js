import React from "react";
import Navbar from "../components/Navbar";
import CreditCard from "../components/CreditCard";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const [pay , setPay] = useState(false)
  const [alert ,setAlert] = useState(false)
  const { shops, ordertotalprice, membership, username } = useSelector(
    (state) => {
      return {
        shops: state.shop.shop,
        ordertotalprice: state.shop.totalAmount,
        membership: state.user.user.membership,
        username: state.user.user.username,
      };
    }
  );
   
  const dispatch = useDispatch();
  let total;
  if (membership) {
    total = Math.floor(ordertotalprice * 0.9);
  } else {
    total = ordertotalprice;
  }
  const navigate = useNavigate();
  const renderedProducts = shops.map((shop) => {
    return (
      <div className="grid grid-cols-3 items-center">
        <img
          className="flex p-1 object-contain w-28 cursor-pointer col-span-1"
          src={shop.images[0]}
          alt={shop.name}
        />
        <div className="col-span-1">
          <h3 className="text-center">{shop.title}</h3>
        </div>
        <div className="col-span-1">
          <h3 className="text-center">{shop.quantity}</h3>
        </div>
      </div>
    );
  });

  const handleOrder = () => {
    if(!pay){
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      },5000)
      return 
    }
    let order = {
      username: username,
      products: shops,
      ordertotalprice: total,
    };
    dispatch(createOrder(order))
      .unwrap()
      .then(() => {
        navigate("/orders");
      });
  };
 

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center text-3xl mt-4">Payment</h1>
        <div className="grid grid-cols-2 grid-row-1 text-center mt-6 gap-5">
          <div>
            <h3>Order Summary</h3>
            <div className="border mb-5">{renderedProducts}</div>
          </div>
          <div>
            <h3>Payment</h3>
            <div className="mt-4">
              <CreditCard setPay={setPay}/>
              {alert && <div className="border bg-red-500 text-white mt-2 rounded-full">Please enter your cart informations or submit</div>}
              <div className="my-10">
                {membership && (
                  <span className="text-md block">Membership discount %10</span>
                )}
                <span className="text-2xl">Total : {total}</span>
              </div>
              <button
                onClick={handleOrder}
                className="border bg-blue-500 rounded-full p-2 text-xl mb-10"
              >
                Complete the Order
              </button>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
