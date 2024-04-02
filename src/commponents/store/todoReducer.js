import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data";

const todoSlice = createSlice({
    name: 'inetStore',
    initialState: {
        product: data,
        buscket: [],
    },
    reducers: {
       addProduct(state, action){
        if(action.payload === null || undefined) return

            state.product.push({
                id: new Date().toISOString(),
                name: action.payload,
                description: action.payload,
                completed: false,
            })
       },
       addBusket(state, action){
            state.buscket = [...state.buscket, action.payload]
       }
    },
})
export const {addProduct,addBusket} = todoSlice.actions
export default todoSlice.reducer