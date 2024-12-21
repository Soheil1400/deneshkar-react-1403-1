import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex( product => product.id === action.payload)
            state.splice(index, 1)
        }
    }
})

export const {} = productSlice.actions

export default productSlice.reducer