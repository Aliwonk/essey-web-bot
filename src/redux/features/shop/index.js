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
          "https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg",
      },
      {
        id: 2,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://papik.pro/uploads/posts/2022-01/thumbs/1643629489_3-papik-pro-p-pitstsa-logotip-3.jpg",
      },
      {
        id: 3,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://img.freepik.com/premium-vector/pizzeria-and-coffee-shop-logo_8580-556.jpg",
      },
      {
        id: 4,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://freelance.ru/img/portfolio/pics/00/26/37/2504452.jpg",
      },
      {
        id: 5,
        name: "Speed Pizza",
        annotation: "Пицца со скоростью света",
        category: "Магазины",
        logotype:
          "https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg",
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
