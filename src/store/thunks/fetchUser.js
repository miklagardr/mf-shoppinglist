import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

export const fetchUser = createAsyncThunk('user/fetch', async() => {
    const response = await axios.get(`${apiBaseUrl}/user/getUser` , {
        withCredentials : true, 
    }); 
    return response.data
})