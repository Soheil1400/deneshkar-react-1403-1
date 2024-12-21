import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name: 'history',
    initialState: [],
    reducers: {
        addCartToHistory: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addCartToHistory} = historySlice.actions

export default historySlice.reducer