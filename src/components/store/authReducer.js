import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const updateProfileAccount = createAsyncThunk(
    'user/updateProfileEmail',
    async ({displayName}, {dispatch}) => {
        await updateProfile(auth.currentUser, {displayName: displayName})
        await dispatch(setName(auth.currentUser.displayName))
    }
)
export const createAccount = createAsyncThunk(
    'user/createAccount',
    async ({name,email,password,nav},{dispatch}) => {
        try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        dispatch(setToken(userCredentials.user.accessToken))
        dispatch(setEmail(userCredentials.user.email))
        dispatch(updateProfileAccount({displayName: name}))
        nav('/profil')

        } catch (error) {
            console.log(error);
        }
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
        dispatch(setName(userCredentials.user.displayName))
        nav('/profil')

        } catch (error) {
            console.log(error);
        }
    }
)
export const signOutFromAccount = createAsyncThunk(
    'user/signOutFromAccount',
    async (auth) => {
        await signOut(auth)
    }
)

const authSlise = createSlice({
    name: 'user',
    initialState: {
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        token: localStorage.getItem('token'),
    },
    reducers: {
        setToken(state, actions) {
            state.token = actions.payload;
            localStorage.removeItem('token')
            localStorage.setItem('token', actions.payload)
        },
        setEmail(state, actions) {
            state.email = actions.payload;
            localStorage.removeItem('email')
            localStorage.setItem('email', actions.payload)
        },
        setName(state, actions) {
            state.name = actions.payload;
            localStorage.removeItem('name')
            localStorage.setItem('name', actions.payload)
        },
        removeProfile(state){
            state.name = null
            state.email = null
            state.token = null
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            localStorage.removeItem('token')
        }
    },
})
export const { setToken, setEmail, setName, removeProfile } = authSlise.actions
export default authSlise.reducer