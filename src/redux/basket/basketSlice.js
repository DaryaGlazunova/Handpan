import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInBasket: [],
  totalPrice: 0,
  totalAmount: 0,
};

const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const calcTotalAmount = (items) => {
  return items.reduce((count, obj) => obj.count + count, 0);
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.itemsInBasket.find(
        (obj) => obj.id == action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.itemsInBasket.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.itemsInBasket);
      state.totalAmount = calcTotalAmount(state.itemsInBasket);
    },

    removeItem(state, action) {
      state.itemsInBasket = state.itemsInBasket.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.itemsInBasket);
      state.totalAmount = calcTotalAmount(state.itemsInBasket);
    },

    clearItems(state) {
      state.itemsInBasket = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },

    minusItem(state, action) {
      const findItem = state.itemsInBasket.find(
        (obj) => obj.id === action.payload
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.itemsInBasket);
      state.totalAmount = calcTotalAmount(state.itemsInBasket);
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } =
  basketSlice.actions;

export default basketSlice.reducer;
