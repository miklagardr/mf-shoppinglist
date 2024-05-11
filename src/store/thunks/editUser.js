import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

export const updateEmail = createAsyncThunk('user/updateEmail', async(email) => {
   
    const response = await axios.put(`${apiBaseUrl}/user/editEmail`,
    {
        Email: email,
    },
    {       
        withCredentials: true
    }, 
   
    {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    
);
    return response.data;
});

export const updatePassword = createAsyncThunk('user/updatePassword', async(data) => {
   
    const response = await axios.put(`${apiBaseUrl}/user/editPassword`,
       data,
    {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    
);
    return response.data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async(user) => {

    const response = await axios.delete(`${apiBaseUrl}/user/deleteUser`,
    {
        
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        data: user
    },
);
    return response.data;
});
// DELETE methodunda değerler tek bir obje içinde gönderilir. Bu yüzden data: user şeklinde gönderilir.
// Diğerlerinde objeler ayrı ayrı gönderilir.