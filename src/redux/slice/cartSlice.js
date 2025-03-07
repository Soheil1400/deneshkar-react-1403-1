import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
           const index = state.findIndex(item => item.id === action.payload.id)
            if (index === -1) {
                state.push({...action.payload, count: 1})
            } else {
                state[index].count = state[index].count + 1
            }
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            if (action.payload.count > 1) {
                state[index].count = state[index].count - 1
            } else {
                state.splice(index, 1)
            }
        },
        clearProduct: (state) => {
            state.splice(0, state.length)
        }
    }
})

export const {addProduct, deleteProduct, clearProduct} = cartSlice.actions

export default cartSlice.reducer