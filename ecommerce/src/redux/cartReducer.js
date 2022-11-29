import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        cartAdd(state, action) {
            state.push({
                id: action.payload.id,
                price: action.payload.price,
            })
        },
        cartRemove({ state }, action) {
            return state.filter(({ id }) => id !== action.payload.id);
        }
    }
});

export const { cartAdd, cartRemove } = cartSlice.actions;
export default cartSlice.reducer;