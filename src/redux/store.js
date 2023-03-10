import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shop";
import cartReducer from './features/cart';

export default configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
