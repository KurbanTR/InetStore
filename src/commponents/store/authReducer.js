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
        localStorage.setItem('userToken', userCredentials.user.accessToken)
        localStorage.setItem('userToken', userCredentials.user.email)
    }
)
export const loginInAccount = createAsyncThunk(
    'user/loginInAccount',
    async ({email,password,nav},{dispatch}) => {
        try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        dispatch(setToken(userCredentials.user.accessToken))
        dispatch(setEmail(userCredentials.user.email))
        localStorage.setItem('token', userCredentials.user.accessToken)
        localStorage.setItem('email', userCredentials.user.email)
        nav('/profil')

        } catch (error) {
            console.log(error);
        }

    }
)
export const signOutFromAccount = createAsyncThunk(
    'user/signOutFromAccount',
    async (auth, {dispatch}) => {
        await signOut(auth)
        dispatch(setToken(null))
        dispatch(setEmail(null))
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
)

const authSlise = createSlice({
    name: 'user',
    initialState: {
        email: localStorage.getItem('email'),
        name: 'Нет имени',
        token: localStorage.getItem('token'),
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