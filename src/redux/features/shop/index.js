import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendURL } from "../../../config";

export const fetchAllShopData = createAsyncThunk(
  "shop/fetchAllShopData",
  async () => {
    const response = await fetch(`${backendURL}/shop/all`);
    const data = response.json();
    return data;
  }
);
export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: false,
    listShop: [
      {
        id: 1,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: 'Рестораны',
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 2,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: 'Магазины',
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 3,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: 'Магазины',
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 4,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: 'Магазины',
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 5,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: 'Магазины',
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
    ],
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
      });
  },
});

export const { getShop } = shopSlice.actions;
export default shopSlice.reducer;
