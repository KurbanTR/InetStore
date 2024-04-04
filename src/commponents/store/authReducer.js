import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const createAccount = createAsyncThunk(
    'user/createAccount',
    async ({email,password}) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
    }
)
export const loginInAccount = createAsyncThunk(
    'user/loginInAccount',
    async ({email,password}) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
    }
)
export const signOutFromAccount = createAsyncThunk(
    'user/signOutFromAccount',
    async () => {
        await signOut(auth)
    }
)

const authSlise = createSlice({
    name: 'user',
    initialState: {
        email: '',
        tokin: '',
    },
    reducers: {
        
    },
})
export const { addProduct, addBusket, removeProduct } = authSlise.actions
export default authSlise.reducer