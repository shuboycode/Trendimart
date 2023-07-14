import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cardSlice from "./slices/cardSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    counter: cardSlice, 
    cart: cartSlice
  },
});

export default store;
