import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer"
import roleReducer from "./reducers/roleReducer";

export const store = configureStore({
    reducer: {
        authReducer,
        roleReducer
    }
})