import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../apiBaseUrl";

export const deleteUserByAdmin = createAsyncThunk('admin/deleteuser' , async(user) => {
    const response = await axios.delete(`${apiBaseUrl}/admin/deleteUserByAdmin` , {
        data : user
    })
    return response.data; 
})