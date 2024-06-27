import { createAction } from "@reduxjs/toolkit";

export const getRole = createAction("role/getRole", role => {
    return {
        payload: role
    }
})

export const eraseRole = createAction("role/eraseRole")