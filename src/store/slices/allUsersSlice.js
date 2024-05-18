import { createSlice } from "@reduxjs/toolkit";
import {getAllUser} from "../thunks/fetchAllUser";
import { deleteUserByAdmin, getAllOrders } from "../thunks/admin";

const allUsersSlice = createSlice({
    name : 'users', 
    initialState : {
        users : [{}],
        orders : [{}], 
    },
    extraReducers(builders){
        builders.addCase(getAllUser.fulfilled , (state,action)=> {
            state.users = action.payload; 
        })
        builders.addCase(deleteUserByAdmin.fulfilled , (state,action) => {
            state.users = action.payload; 
        })   
        builders.addCase(getAllOrders.fulfilled , (state,action) => {
            state.orders = action.payload; 
        }
        )
    }
})
export const allUsersReducer = allUsersSlice.reducer; 