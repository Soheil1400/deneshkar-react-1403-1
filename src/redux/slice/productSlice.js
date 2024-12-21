import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const index = state.findIndex( product => product.id === action.payload.id)
            if (index === -1) {
                state.push({...action.payload, count: 1})
            } else {
                state[index].count = state[index].count + 1
            }
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex( product => product.id === action.payload.id)
            if (action.payload.count > 1) {
                state[index].count = state[index].count - 1
            } else {
                state.splice(index, 1)
            }
        }
    }
})

export const {addProduct, deleteProduct} = productSlice.actions

export default productSlice.reducer