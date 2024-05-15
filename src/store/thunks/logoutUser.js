import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../apiBaseUrl";

export const logoutUser = createAsyncThunk('user/logout', async (user) => {
    const response = await axios.post(`${apiBaseUrl}/user/logout`,null,{
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.data 
})