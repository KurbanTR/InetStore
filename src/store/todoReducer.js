import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

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

export const setProductData = createAsyncThunk(
    'products/setProductData',
    async({title, description, price, image}) => {
        await addDoc(productsCollectionRef, {title, description, price, image})
    }
)

export const updateProductData = createAsyncThunk(
    'products/updateProductData',
    async({title, description, prise, image, id}) => {
        const productsDocRef = doc(productsCollectionRef, id)
        await updateDoc(productsDocRef, {title, description, prise, image})
    }
)

export const deleteDefineDoc = createAsyncThunk(
    'products/deleteDefineDoc',
    async({id}) => {
        const defineProductRef = doc(productsCollectionRef, id)
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
            setProductData(action.payload)          
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