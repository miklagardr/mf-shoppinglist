import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaFirstOrderAlt } from "react-icons/lia";


function MyOrders() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const { username, orders } = useSelector((state) => {
    return {
      username: state.user.user.username,
      orders: state.user.orders,
    };
  });

  useEffect(() => {
    dispatch(fetchOrder(username));
  }, []);

let renderedOrders; 

 const getDate = (dateString) => {
   var date = new Date(dateString);
   var formattedDateTime = date.toLocaleString({ 
     hour: '2-digit', 
     minute: '2-digit',
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
   });
   return formattedDateTime;
 }


if(orders) {
     renderedOrders = orders.map((order) => {
        return (
          <div
            onClick={() => {
              setDetails((prevState) => ({
                ...prevState,
                [order.orderid]: !prevState[order.orderid],
              }));
            }}
            className="border rounded-md mt-10 mb-5"
            key={order.orderid}
          >
            <div className="flex justify-between p-3">
              <div>Order no : {order.orderid}</div>
              <div>Date : {getDate(order.date)}</div>
              <div className="flex items-center space-x-2">
                <div>${order.orderlist.ordertotalprice} </div>
                <div className="text-xl">
                  {details[order.orderid] ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
            </div>
            {details[order.orderid] && (
              <div>
                {order.orderlist.products.map((product) => {
                  return (
                    <div
                      className="flex justify-center space-x-16 border-y items-center container bg-red-50 border-blue-300"
                      key={product.productID}
                    >
                      <img
                        className="w-20 h-20 object-contain ml-8"
                        src={product.images[0]}
                      />
                      <div>{product.title}</div>
                      <div className="ml-8 border rounded-full p-3">{product.quantity}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      });
}
  

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center text-3xl my-10">My Orders</h1>
        {orders ?  <div>{renderedOrders}</div> : <div className="text-center mt-44">
            <div className="text-9xl flex justify-center"> <LiaFirstOrderAlt /> </div>
            No Order :/</div>}
      </div>
    </div>
  );
}

export default MyOrders;
