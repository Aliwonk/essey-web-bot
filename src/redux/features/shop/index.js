import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendURL } from "../../../config";

export const fetchAllShopData = createAsyncThunk(
  "shop/fetchAllShopData",
  async () => {
    const response = await fetch(`${backendURL}/shop/all`);
    const data = await response.json();
    return data;
  }
);

export const fetchShopData = createAsyncThunk(
  "shop/fetchShopData",
  async (id) => {
    const response = await fetch(`${backendURL}/shop/${id}`);
    const data = await response.json();
    return data;
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: false,
    shop: {},
    listShop: [
      {
        id: 1,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Рестораны",
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 2,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 3,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 4,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
      {
        id: 5,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://avatars.mds.yandex.net/get-altay/4324851/2a00000179335f79ba33b1dbc7918fefe5ac/XXL_height",
      },
    ],
  },
  reducers: {
    getShop: (state) => {
      console.log(state.shop);
    },
    changeCategoryShop: (state, action) => {
      if (action.payload === "Все") {
        // eslint-disable-next-line no-self-assign
        state.listShop = state.listShop;
      }
      state.listShop = state.listShop.filter(
        (shop) => shop.category === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShopData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllShopData.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.listShop = action.payload;
      })
      .addCase(fetchAllShopData.rejected, (state, action) => {
        state.isLoading = false;
        state.shop = [];
      });

    builder
      .addCase(fetchShopData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shop = action.payload;
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.isLoading = false;
        state.shop = {};
      });
  },
});

export const { getShop, changeCategoryShop } = shopSlice.actions;
export default shopSlice.reducer;
