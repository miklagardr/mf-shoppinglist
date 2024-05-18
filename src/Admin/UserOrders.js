import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllOrders } from "../store";

function UserOrders() {
  const [dropDown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => {
    return {
      orders: state.users.orders,
    };
  });
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const handleOpenModal = () => {
    setDropdown(!dropDown);
  };

  // const renderedOrders = orders && orders.map((order) => {
  //   return (
  //     <div className="border rounded-md flex justify-between" key={order.orderid}>
  //         <div className="grid p-2">
  //           <span>Order Id : {order.orderid}</span>
  //           <span>Username : {order.orderlist.username}</span>
  //           <span className='flex'>Products : {order.orderlist.products.map((product , index) => {
  //             return (
  //             <div key={product.productID}>
  //               <span>{product.title}{index === order.orderlist.products.length-1 ? '' : ','}</span>
  //             </div>
  //             )
  //           })}</span>
  //           <span>Total Price : ${order.orderlist.ordertotalprice}</span>
  //           <span>Order Date : {order.date}</span>
  //         </div>
  //     </div>
  //   )
  // })

  return (
    <div className="container mb-5">
      <div
        className="border bg-gray-100 p-5 flex justify-between mb-4"
        onClick={handleOpenModal}
      >
        <div></div>
        <h2 className="text-xl text-center">Users Orders</h2>
        <div className="text-3xl">
          {!dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {dropDown && (
        <div>
          {orders.map((order) => {
            return (
              <div
                className="border rounded-md flex justify-between"
                key={order.orderid}
              >
                <div className="grid p-2">
                  <span>Order Id : {order.orderid}</span>
                  <span>Username : {order.orderlist.username}</span>
                  <span className="flex">
                    Products : 
                    {order.orderlist.products.map((product, index) => {
                      return (
                        <div key={product.productID}>
                          <span>
                            {product.title}
                            {index === order.orderlist.products.length - 1
                              ? ""
                              : ","}
                          </span>
                        </div>
                      );
                    })}
                  </span>
                  <span>Total Price : ${order.orderlist.ordertotalprice}</span>
                  <span>Order Date : {order.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserOrders;
