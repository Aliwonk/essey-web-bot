import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendURL } from "../../../config";

export const fetchAllShopData = createAsyncThunk("shop/fetchAllShopData", async () => {
  const response = await fetch(`${backendURL}/shop/all`);
  const data = response.json();
  return data;
});
export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: false,
    listShop: [{ id: 1, name: "Super Pizza", annotation: "Yammy pizza" }],
  },
  reducers: {
    getShop: (state) => {
      console.log(state.shop);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShopData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllShopData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listShop = action.payload;
      })
      .addCase(fetchAllShopData.rejected, (state, action) => {
        state.isLoading = false;
        state.shop = [];
      })
  },
});

export const { getShop } = shopSlice.actions;
export default shopSlice.reducer;
