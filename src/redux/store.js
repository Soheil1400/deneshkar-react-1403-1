import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "@/src/redux/slice/cartSlice";

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})