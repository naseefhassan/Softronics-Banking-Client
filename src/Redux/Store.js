import { configureStore } from "@reduxjs/toolkit";
import AuthReduceer from './Slice'
import AccountReducer from './AccountSlice'

const store=configureStore({
    reducer:{
        auth:AuthReduceer,
        account:AccountReducer,
    }
})

export default store