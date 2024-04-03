import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data";

const todoSlice = createSlice({
    name: 'inetStore',
    initialState: {
        products: data,
        buscket: [],
    },
    reducers: {
        addProduct(state, action) {
            state.products = [...state.products, action.payload]            
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },
        addBusket(state, action) {
            state.buscket = [...state.buscket, action.payload]
        }
    },
})
export const { addProduct, addBusket, removeProduct } = todoSlice.actions
export default todoSlice.reducer