import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiBaseUrl } from "../../apiBaseUrl";

export const getAllUser = createAsyncThunk('admin/getAllUser', async(username) => {
    const response = await axios.get(`${apiBaseUrl}/admin/getAllUser/${username}`)
    
    return response.data
})