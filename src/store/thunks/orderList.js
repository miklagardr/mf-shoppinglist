import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../apiBaseUrl";

export const createOrderList = createAsyncThunk('order/createOrderList', async (order) =>   {
    console.log('API Request Data:', order.ordertotalprice)
    const response = await axios.post(`${apiBaseUrl}/orderlist/create` , {
        username : order.username,
        products : order.products,
        ordertotalprice : order.ordertotalprice
    },
    { 
        headers:{
            'Content-Type' : 'application/json', 
        },
    })
    return response.data
})

export const fetchOrderList = createAsyncThunk('order/fetchOrderList', async (username) => {
    console.log('API Request Data Usernamee:', username)
    const response = await axios.get(`${apiBaseUrl}/orderlist/fetch/${username}` , {
        headers:{
            'Content-Type' : 'application/json', 
        }
    })
    return response.data 
})

export const addOrderList = createAsyncThunk('order/addOrderList', async(order) => {
    console.log('API Request Data 2:', order.ordertotalprice , order.product, order.username );
    const response = await axios.put(`${apiBaseUrl}/orderlist/addproduct`,{
        username : order.username,
        products : order.product,
        productsprice : order.ordertotalprice

    }, {
        headers:{
            'Content-Type' : 'application/json', 
        }
    })
    return response.data
})

export const deleteOrderList = createAsyncThunk('order/deleteOrderList' , async (order) => {
    console.log('API Request Data 3:', order.ordertotalprice , order.product, order.username );
    const response = await axios.delete(`${apiBaseUrl}/orderlist/deleteproduct`,
    {
        data: {
            username: order.username,
            products: order.product,
            productsprice: order.ordertotalprice,
          },
         
        headers:{
            'Content-Type' : 'application/json', 
        }
    })
    
    return response.data
})

export const createOrder = createAsyncThunk('order/createOrder', async (order) =>   {

    const response = await axios.post(`${apiBaseUrl}/order/createOrder` ,order,
    { 
        headers:{
            'Content-Type' : 'application/json', 
        },
    })
    return response.data
})