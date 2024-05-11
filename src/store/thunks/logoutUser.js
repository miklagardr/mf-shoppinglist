import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

export const logoutUser = createAsyncThunk('user/logout', async (user) => {
    const response = await axios.post(`${apiBaseUrl}/user/logout`,null,{
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.data 
})