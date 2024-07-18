import { createReducer } from "@reduxjs/toolkit"
import { login, logout } from "../actions/authActions"

const initialState = {
    token:localStorage.getItem ("token")||null,
    isAuthenticated: false
}

const authReducer = createReducer(initialState, builder => {
    builder.addCase(login, (state, action) => {
        return {
            ...state,
            isAuthenticated:true,
            token: action.payload
        }
    })
    .addCase(logout, (state) => {
        return {
            ...state,
            isAuthenticated: false,
            token: null
        }
    })
})

export default authReducer