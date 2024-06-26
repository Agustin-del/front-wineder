import { createAction } from "@reduxjs/toolkit";

export const login = createAction("auth/login", (token) => {
    return {
        payload:token
    }
})

export const logout = createAction("auth/logout")