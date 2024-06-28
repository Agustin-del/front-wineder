import { createReducer } from "@reduxjs/toolkit";
import { eraseRole, getRole } from "../actions/roleActions";

const initialState = {
    role:""
}

const roleReducer = createReducer(initialState, (builder) => {
    builder.addCase(getRole, (state, action) => {
        return {
            ...state,
            role: action.payload
        };
    })
    .addCase(eraseRole, (state) => {
        return {
            ...state,
            role: ""
        };
    });
}); 

export default roleReducer