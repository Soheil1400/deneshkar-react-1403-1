import { createSlice } from '@reduxjs/toolkit'

export const historyCartSlice = createSlice({
    name: 'historyCart',
    initialState: [],
    reducers: {
        addToHistoryCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addToHistoryCart} = historyCartSlice.actions

export default historyCartSlice.reducer