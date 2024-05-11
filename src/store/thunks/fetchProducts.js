import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

export const fetchProducts = createAsyncThunk('products/fetch',async () => {
    const response = await axios.get(`${apiBaseUrl}/products`);
    console.log(response.data); 
    return response.data;
})

export const fetchSingleProduct = createAsyncThunk('singleProduct/fetch' , async(productID) => {
    console.log('API Request productID:', productID)
    const response = await axios.get(`${apiBaseUrl}/products/${productID}`); 
    return response.data; 
})
// Single product dönücek 

export const fetchCategories = createAsyncThunk('categories/fetch', async(category) => {
    const response = await axios.get(`${apiBaseUrl}/category/${category}`);
    return response.data;
})