import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existing = state.products.find(
        (product) => product.id === actions.payload.id
      );

      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...actions.payload, quantity: 1 });
      }
      state.total = Number(state.total) + Number(actions.payload.price);
    },

    removeSingle: (state, actions) => {
      const existing = state.products.find(
        (product) => product.id === actions.payload.id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== actions.payload.id
        );
      }

      state.total = Number(state.total) - Number(actions.payload.price);
    },

    removeFromCart: (state, actions) => {
      state.products = state.products.filter(
        (product) => product.id !== actions.payload.id
      );

      state.total =
        Number(state.total) -
        Number(actions.payload.price) * Number(actions.payload.quantity);
    },

    clearCart: (state) => {
      (state.products = []), (state.total = 0);
    },
  },
});
export const { addToCart, removeSingle, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
