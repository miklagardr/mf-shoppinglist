import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/fetchProducts";

const productsSlice = createSlice({
    name : 'products', 
    initialState : {
        products : [],
        error : false,  
    }, 

   extraReducers(builders) {
    builders.addCase(fetchProducts.fulfilled,(state,action) => {
        state.products = action.payload;
    }); 
    builders.addCase(fetchProducts.rejected , (state,action) => {
        state.error = true; 
    });
   }
})

export const productsReducer = productsSlice.reducer; 