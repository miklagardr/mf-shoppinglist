import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { GiBullyMinion } from "react-icons/gi";
import { PiTrashSimpleBold } from "react-icons/pi";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import {deleteShoppingList , deleteAllShoppingList , addShoppingList} from '../store'
import { addOrderList, deleteOrderList } from "../store";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shop, totalAmount } = useSelector((state) => {
    return state.shop;
  });
  const { user } = useSelector((state) => {
    return state.user;
  });

  const handleDelete = (product) => {
    const order = {
      username: user.username,
      product: product,
      ordertotalprice: product.price,
    };
    dispatch(deleteOrderList(order));
  };
  const handleAddPlus = (product) => {
    const order = {
      username: user.username,
      product: product,
      ordertotalprice: product.price,
    };
    dispatch(addOrderList(order));
  };
  const handleSingleProduct = (productID) => {
    navigate(`/singleproduct/${productID}`);
  };

  const renderedProducts = shop.map((shops) => {
    return (
      <div
        key={shops._id}
        className="border rounded flex justify-between h-24 mt-2 bg-white "
      >
        <div className="flex justify-center">
          <img
            onClick={() => handleSingleProduct(shops.productID)}
            className="flex p-1 object-contain w-28 cursor-pointer"
            src={shops.images[0]}
            alt={shops.name}
          />
          <div className="flex items-center border rounded h-fit self-center ml-2 p-1">
            <CiSquareMinus
              onClick={() => handleDelete(shops)}
              className="text-2xl cursor-pointer mr-1 transition duration-300 hover:bg-red-50"
            />
            {shops.quantity}
            <CiSquarePlus
              onClick={() => handleAddPlus(shops)}
              className="text-2xl cursor-pointer ml-1 transition duration-300 hover:bg-green-50"
            />
          </div>
        </div>
        <div className="grid justify-items-end mt-2 mr-5">
          <h2 className="text-xl font-bold">{shops.title}</h2>
          <p className="text-gray-600">Price: {shops.price * shops.quantity}</p>
          {/* <PiTrashSimpleBold  onClick={() => {handleDeleteRow(shops)}}  className='text-2xl cursor-pointer'/>  */}
        </div>
      </div>
    );
  });

  if (shop.length === 0) {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar />
        <h1 className="text-center text-3xl mt-12">No items in the cart</h1>
        <GiBullyMinion className="text-center text-9xl mx-auto mt-12" />
      </div>
    );
  }
  return (
    <div className="bg-gray-100 h-screen overflow-y-auto">
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-center mt-5">
          <h1 className="px-6 py-3 mb-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white text-xl tracking-widest uppercase">Cart</h1>
        </div>
        <div className="grid grid-cols-1 justify-center items-center text-center container">
          <div className="">
            <div>{renderedProducts}</div>
            <div className="text-end text-2xl mt-2">
              Total Order : {totalAmount}
            </div>
            <div className="flex justify-end mt-2">
              <button onClick={() => {
                navigate("/payment")
              }} className="mt-4 rounded-2xl text-center border bg-blue-200 justify-center cursor-pointer p-3 hover:bg-red-200 transition duration-500">
                Complete the order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
