import { configureStore } from "@reduxjs/toolkit";
//import { addShoppingList ,shopReducer , deleteShoppingList,deleteAllShoppingList } from "./slices/shopSlices";
import { shopReducer } from "./slices/shopSlices";
import { productsReducer } from "./slices/productsSlice";
import { userReducer } from "./slices/userSlice"; 
import { categoriesReducer } from "./slices/categoriesSlice";
import { allUsersReducer } from "./slices/allUsersSlice";


const store = configureStore({
    reducer : {
        products : productsReducer,
        shop : shopReducer,
        user : userReducer, 
        categories : categoriesReducer,
        users : allUsersReducer,
    }
})

export {
    store
}
export * from './thunks/fetchProducts'; 
export * from './thunks/createUser';
export * from './thunks/loginUser';
export * from './thunks/logoutUser';
export * from './thunks/fetchUser';
export * from './thunks/orderList';
export * from './thunks/editUser';
export * from './thunks/fetchAllUser'; 
export * from './thunks/deleteUserByAdmin'; 
