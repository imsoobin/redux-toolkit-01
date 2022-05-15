import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import cartItems from '../../cartItems';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

export const getItems = createAsyncThunk(
    'cart/getItems', 
    async (data, {rejectWithValue}) => {
        try{
            const res = await axios.get(url)
            return res?.data
        }
        catch(e){
            return rejectWithValue('something went wrong')
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true
        },
        [getItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getItems.rejected]: (state) => {
            state.isLoading = false;
        },
    },
    reducers:{
        clearCartItem: (state) => {
            state.cartItems = []
        },
        removeItem: (state, {payload}) => {
            // const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => (
                item.id !== payload.id
            ))
        },
        increaseItem: (state, {payload}) => {
            const cartId = state.cartItems.find((item) => item.id === payload.id)
            // if(cartId.amount >= 5){
            //     return
            // }
            cartId.amount = cartId.amount + 1
        },
        descreaseItem: (state, {payload}) => {
            const cartId = state.cartItems.find((item) => item.id === payload.id)
            // if(cartId.amount <= 1){
            //     return
            // }
            cartId.amount = cartId.amount - 1
        },
        getTotalItem: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }
})
export const {
    clearCartItem, 
    removeItem, 
    increaseItem,
    descreaseItem,
    getTotalItem
} = cartSlice.actions;

export default cartSlice.reducer;

// console.log(cartSlice);