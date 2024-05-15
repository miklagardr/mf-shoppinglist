import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../apiBaseUrl";

export const fetchUser = createAsyncThunk('user/fetch', async() => {
    const response = await axios.get(`${apiBaseUrl}/user/getUser` , {
        withCredentials : true, 
    }); 
    return response.data
})