import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";

export const productsCollectionRef = collection(db, 'product')
export const ProductData = createAsyncThunk(
    'products/ProductData',
    async(_,{dispatch}) => {
        const querySnapshot = await getDocs(productsCollectionRef)
        const userDataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setProducts(userDataArray))
    }
)

export const getProdustData = createAsyncThunk(
    'products/getProdustData',
    async({id},{dispatch}) => {
        const defineProductRef = doc(productsCollectionRef,id)
        const querySnapshot = await getDoc(defineProductRef)
        const product = querySnapshot.data()
        dispatch(setProduct(product))
    }
)

export const DeleteDefineDoc = createAsyncThunk(
    'products/DeleteDefineDoc',
    async({id}) => {
        const defineProductRef = doc(productsCollectionRef,id)
        await deleteDoc(defineProductRef)
    }
)

const todoSlice = createSlice({
    name: 'inetStore',
    initialState: {
        products: [],
        product: [],
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
        },
        setProducts(state, actions){
            state.products = actions.payload
        },
        setProduct(state, actions){
            state.product = actions.payload
        }
    },
})
export const { addProduct, addBusket, removeProduct, setProducts, setProduct } = todoSlice.actions
export default todoSlice.reducer