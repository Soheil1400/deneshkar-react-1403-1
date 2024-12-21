import { configureStore } from '@reduxjs/toolkit'
import productSlice from "@/src/redux/slice/productSlice";
import historySlice from "@/src/redux/slice/historySlice";

export default configureStore({
    reducer: {
        product: productSlice,
        history: historySlice
    }
})