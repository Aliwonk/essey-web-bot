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

export const fetchGoodsDataByIdShop = createAsyncThunk(
  "shop/fetchGoodsDataByIdShop",
  async (id) => {
    const response = await fetch(`${backendURL}/goods/all/${id}`);
    const data = await response.json();
    return data;
  }
);

export const fetchGoodsDataById = createAsyncThunk(
  "shop/fetchGoodsDataById",
  async (id) => {
    const response = await fetch(`${backendURL}/goods/${id}`);
    const data = await response.json();
    return data;
  }
);

const shopData = [
  {
    id: 1,
    name: "Speed Pizza",
    annotation: "Пицца со скоростью света",
    category: "Рестораны",
    logotype:
      "https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg",
    additInf: [],
    goods: [
      {
        category: "Еда",
        createdDate: "2023-02-24T13:36:29.075Z",
        description: "Вкусная пицца",
        id: 1,
        name: "Пицца",
        price: 350,
        unit: "Штучный",
        shop: {
          id: 1,
          name: "Speed Pizza",
        },
      },
      {
        category: "Напитки",
        createdDate: "2023-02-24T13:37:04.434Z",
        description: "Сок из брусники",
        id: 2,
        name: "Брусничный сок",
        price: 30,
        unit: "Штучный",
        updatedDate: "2023-02-24T18:24:51.000Z",
        shop: {
          id: 1,
          name: "Speed Pizza",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Speed Pizza",
    annotation: "Пицца со скоростью света",
    category: "Магазины",
    logotype:
      "https://papik.pro/uploads/posts/2022-01/thumbs/1643629489_3-papik-pro-p-pitstsa-logotip-3.jpg",
    goods: [
      {
        category: "Еда",
        createdDate: "2023-02-24T13:36:29.075Z",
        description: "Вкусная пицца",
        id: 3,
        name: "Пицца",
        price: 350,
        unit: "Штучный",
        shop: {
          id: 2,
          name: "Speed Pizza",
        },
      },
      {
        category: "Напитки",
        createdDate: "2023-02-24T13:37:04.434Z",
        description: "Сок из брусники",
        id: 4,
        name: "Брусничный сок",
        price: 30,
        unit: "Штучный",
        updatedDate: "2023-02-24T18:24:51.000Z",
        shop: {
          id: 2,
          name: "Speed Pizza",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Speed Pizza",
    annotation: "Пицца со скоростью света",
    category: "Рестораны",
    logotype:
      "https://img.freepik.com/premium-vector/pizzeria-and-coffee-shop-logo_8580-556.jpg",
  },
  {
    id: 4,
    name: "Speed Pizza",
    annotation: "Пицца со скоростью света",
    category: "Магазины",
    logotype: "https://freelance.ru/img/portfolio/pics/00/26/37/2504452.jpg",
  },
  {
    id: 5,
    name: "Speed Pizza",
    annotation: "Пицца со скоростью света",
    category: "Рестораны",
    logotype:
      "https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg",
  },
];

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoadingListShop: false,
    isLoadingGoodsShop: false,
    isLoadingGoods: false,
    isLoadingShop: false,
    shop: {},
    goods: {},
    goodsShop: [],
    goodsCategory: [],
    listShopForCategory: shopData,
    listShop: shopData,
  },
  reducers: {
    getShop: (state) => {
      console.log(state.shop);
    },
    changeCategoryShop: (state, action) => {
      if (action.payload === "Все") {
        state.listShop = state.listShopForCategory;
        return;
      }
      state.listShop = state.listShopForCategory.filter(
        (shop) => shop.category === action.payload
      );
    },
    changeCategoryGoods: (state, action) => {
      if (action.payload === "Все") {
        state.goodsShop = state.goodsCategory;
        return;
      }
      state.goodsShop = state.goodsCategory.filter(
        (goods) => goods.category === action.payload
      );
    },
    getGoods: (state, action) => {
      console.log(state);
      state.goods = state.goodsShop.filter((goods) => goods.id === action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShopData.pending, (state) => {
        state.isLoadingListShop = true;
      })
      .addCase(fetchAllShopData.fulfilled, (state, action) => {
        state.isLoadingListShop = false;
        state.listShopForCategory = action.payload;
        state.listShop = action.payload;
      })
      .addCase(fetchAllShopData.rejected, (state, action) => {
        state.isLoadingListShop = false;
        state.shop = [];
      });

    builder
      .addCase(fetchShopData.pending, (state) => {
        state.isLoadingShop = true;
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        state.isLoadingShop = false;
        state.shop = action.payload;
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.isLoadingShop = false;
        state.shop = {};
      });

    builder
      .addCase(fetchGoodsDataByIdShop.pending, (state) => {
        state.isLoadingGoodsShop = true;
      })
      .addCase(fetchGoodsDataByIdShop.fulfilled, (state, action) => {
        state.isLoadingGoodsShop = false;
        state.goodsShop = action.payload;
        state.goodsCategory = action.payload;
      })
      .addCase(fetchGoodsDataByIdShop.rejected, (state, action) => {
        state.isLoadingGoodsShop = false;
        state.goodsShop = {};
      });

    builder
      .addCase(fetchGoodsDataById.pending, (state) => {
        state.isLoadingGoods = true;
      })
      .addCase(fetchGoodsDataById.fulfilled, (state, action) => {
        state.isLoadingGoods = false;
        state.goods = action.payload;
      })
      .addCase(fetchGoodsDataById.rejected, (state, action) => {
        state.isLoadingGoods = false;
        state.goods = {};
      });
  },
});

export const { getShop, changeCategoryShop, getGoods, changeCategoryGoods } = shopSlice.actions;
export default shopSlice.reducer;
