import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cardSlice from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    counter: cardSlice, 

  },
});

export default store;
