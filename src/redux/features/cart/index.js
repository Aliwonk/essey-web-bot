import { createSlice } from "@reduxjs/toolkit";
// import { getCookie } from "../../../utils/getData";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCart: JSON.parse(window.localStorage.getItem("dataCart")) || [],
    total: JSON.parse(window.localStorage.getItem("cartAmount")) || 0,
  },
  reducers: {
    changeDataCart: (state, action) => {
      state.dataCart = action.payload;
    },
    changeTotal: (state, action) => {
      state.total = action.payload;
    },
    deleteGoods: (state, action) => {
      const newData = state.dataCart.map((data) => {
        data.goods = data.goods.filter((goods) => {
          if (goods.id === action.payload) {
            state.total = state.total - goods.price * goods.count;
            window.localStorage.setItem("cartAmount", state.total);
          }
          return goods.id !== action.payload;
        });
        return data;
      });
      state.dataCart = newData.filter(data => data.goods.length > 0);
      window.localStorage.setItem("dataCart", JSON.stringify(newData.filter(data => data.goods.length > 0)));
    },
  },
});

export const { changeDataCart, changeTotal, deleteGoods } = cartSlice.actions;
export default cartSlice.reducer;
