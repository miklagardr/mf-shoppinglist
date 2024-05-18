import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../apiBaseUrl";

export const deleteUserByAdmin = createAsyncThunk('admin/deleteuser' , async(user) => {
    const response = await axios.delete(`${apiBaseUrl}/admin/deleteUserByAdmin` , {
        data : user
    })
    return response.data; 
})

export const getAllOrders = createAsyncThunk('admin/getOrders' , async() => {
    const response = await axios.get(`${apiBaseUrl}/admin/getOrders`)
    return response.data; 
})

export const addProduct = createAsyncThunk('admin/addNewProduct' , async(product) => {
    console.log('API Request Data:', product)
    const response = await axios.post(`${apiBaseUrl}/admin/addNewProduct` , product)
    return response.data; 
})