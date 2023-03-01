import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shop";


export default configureStore({
  reducer: {
    shop: shopReducer,
  },
});
