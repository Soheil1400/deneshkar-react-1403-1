import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "@/src/redux/slice/cartSlice";
import historyCartSlice from "@/src/redux/slice/historyCart";

export default configureStore({
    reducer: {
        cart: cartSlice,
        historyCard: historyCartSlice
    }
})