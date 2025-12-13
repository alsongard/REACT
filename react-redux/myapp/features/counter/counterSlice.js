import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", // string name for the slice
    initialState: {
        value: false
    },
    reducers: {
        login:state=>{state.value  = true},
        logout: state=>{state.value = false}
    }
});


export const {login, logout} = counterSlice.actions;

export default counterSlice.reducer;
