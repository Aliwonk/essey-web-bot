import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    listShop: [{ id: 1, name: "Super Pizza", annotation: "Yammy pizza" }],
  },
  reducers: {
    getShop: (state) => {
      console.log(state.shop);
    },
  },
});

export const { getShop } = shopSlice.actions;
export default shopSlice.reducer;