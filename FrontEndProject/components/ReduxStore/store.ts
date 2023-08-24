import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../User/userSlice'

function createStore() {
    return configureStore({
        reducer: userReducer
    })
}

const store = createStore()
export default store
// Based on Aziz's example
export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch