import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoReducer'
import authReducer from './authReducer'

export default configureStore({
    reducer: {
        todos: todoReducer,
        user: authReducer,
    }
})