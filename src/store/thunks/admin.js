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

export const uploadPhoto = createAsyncThunk('media/uploadPhoto' , async(formData) => {
    const response = await axios.post(`${apiBaseUrl}/media/uploadProductImg` , formData)
    return response.data; 
})