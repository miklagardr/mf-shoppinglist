import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

export const loginUser = createAsyncThunk('user/login', async (user) => {
    const response = await axios.post(`${apiBaseUrl}/user/login`, user, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
          },
    });
    console.log(response.headers)
    return response.data
})


