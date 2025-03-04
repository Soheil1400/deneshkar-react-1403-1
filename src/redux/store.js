import { configureStore } from '@reduxjs/toolkit'
import productSlice from "@/src/redux/slice/productSlice";
import cartSlice from "@/src/redux/slice/cartSlice";

export default configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
    }
})