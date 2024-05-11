import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../thunks/fetchProducts";

const categoriesSlice = createSlice({
    name : 'categories', 
    initialState : {
        categories : [],
        error : false,  
    }, 
    extraReducers(builders) {
        builders.addCase(fetchCategories.fulfilled,(state,action) => {
            state.categories = action.payload;
        }); 
        builders.addCase(fetchCategories.rejected , (state,action) => {
            state.error = true; 
        });  
    }
})
export const categoriesReducer = categoriesSlice.reducer;