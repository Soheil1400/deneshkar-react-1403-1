import { configureStore } from '@reduxjs/toolkit'
import productSlice from "@/src/redux/slice/productSlice";

export default configureStore({
    reducer: {
        product: productSlice
    }
})