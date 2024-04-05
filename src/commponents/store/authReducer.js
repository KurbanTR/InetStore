import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const createAccount = createAsyncThunk(
    'user/createAccount',
    async ({email,password}, {dispatch}) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        dispatch(setToken(userCredentials.user.accessToken))
        dispatch(setEmail(userCredentials.user.email))
    }
)
export const loginInAccount = createAsyncThunk(
    'user/loginInAccount',
    async ({email,password},{dispatch}) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        dispatch(setToken(userCredentials.user.accessToken))
        dispatch(setEmail(userCredentials.user.email))
    }
)
export const signOutFromAccount = createAsyncThunk(
    'user/signOutFromAccount',
    async (_, {dispatch}) => {
        await signOut(auth)
        dispatch(setToken(null))
        dispatch(setEmail(null))
    }
)

const authSlise = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
    },
    reducers: {
        setToken(state, actions) {
            state.token = actions.payload
        },
        setEmail(state, actions) {
            state.email = actions.payload
        }
    },
})
export const { setToken, setEmail } = authSlise.actions
export default authSlise.reducer