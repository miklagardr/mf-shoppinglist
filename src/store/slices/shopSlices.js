import { createSlice } from "@reduxjs/toolkit";
import {addOrderList, createOrderList , fetchOrderList , deleteOrderList , createOrder } from '../thunks/orderList'
import { logoutUser } from "../thunks/logoutUser";
const shopSlices = createSlice({
    name : 'shop', 
    initialState : {
        username : '', 
        shop : [],
        totalAmount : 0,
    }, 
    // reducers : {
    //       addShoppingList(state,action){
            
    //         const existingProduct = state.shop.find((product) => product._id === action.payload._id); 
            
    //         if (existingProduct) {
    //             existingProduct.price += action.payload.price / existingProduct.quantity;
    //             state.totalAmount += action.payload.price / existingProduct.quantity;
    //             existingProduct.quantity += 1;
    //         } else {
    //             state.totalAmount += action.payload.price;
    //             state.shop.push({ ...action.payload});
    //         }
            
    //     }, 
    //     deleteAllShoppingList(state,action){
    //         state.totalAmount -= action.payload.price;
    //         state.shop = state.shop.filter((shops) => shops._id !== action.payload._id)
    //     }, 
    //     deleteShoppingList(state,action){
    //         const existingProduct = state.shop.find((product) => product._id === action.payload._id);

    //         if (existingProduct) {
    //             if (existingProduct.quantity > 1) {
    //                 state.totalAmount -= existingProduct.price / existingProduct.quantity;
    //                 existingProduct.price -= existingProduct.price/ existingProduct.quantity;
    //                 existingProduct.quantity -= 1;
    //             } else {
    //                 state.totalAmount -= existingProduct.price; 
    //                 state.shop = state.shop.filter((product) => product._id !== action.payload._id);
    //             }
    //         }
    //     }
    // }

    extraReducers(builders){
        builders.addCase(createOrderList.fulfilled,(state,action) => {
            state.username = action.payload.username;
            state.shop = action.payload.products;
            state.totalAmount = action.payload.ordertotalprice;
        });
        builders.addCase(fetchOrderList.fulfilled,(state,action) => {
            state.username = action.payload.username;
            state.shop = action.payload.products;
            state.totalAmount = action.payload.ordertotalprice;
        });
        builders.addCase(addOrderList.fulfilled,(state,action) => {
            state.username = action.payload.username;
            state.shop = action.payload.products;
            state.totalAmount = action.payload.ordertotalprice;
        });
        builders.addCase(deleteOrderList.fulfilled,(state,action) => {
            state.username = action.payload.username;
            state.shop = action.payload.products;
            state.totalAmount = action.payload.ordertotalprice;
        });
        builders.addCase(createOrder.fulfilled , (state,action) => {
            state.shop = [];
            state.totalAmount = 0; 

        })
        builders.addCase(logoutUser.fulfilled,(state,action) => {
            state.username = ''; 
            state.shop = [];
            state.totalAmount = 0;
        })
    },
   })

// export const {
//     addShoppingList, 
//     deleteShoppingList,
//     deleteAllShoppingList
// } = shopSlices.actions

export const shopReducer = shopSlices.reducer; 

