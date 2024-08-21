import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/product/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        
    },
});

export default store;

//store - the central hub of our application state
// reducer - similar to our set hooks. the define how our state changes.
// slices - Breaks our state into more managable pieces.