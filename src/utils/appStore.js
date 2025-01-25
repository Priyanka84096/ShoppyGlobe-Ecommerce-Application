
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice'

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
export default appStore;