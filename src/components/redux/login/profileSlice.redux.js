import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice( {
    name: "profile",
    initialState:{
        loginIn: false,
        profile: {},
        slider: false
    },
    reducers:{
        login:(( state, action ) => {
            state.loginIn = !(state.loginIn);
            if(state.loginIn) state.profile = action.payload
            else state.profile = {}
        }),
        slider:( ( state, action ) => {
            state.slider = !(state.slider);
        })
    }
} )

export const { slider, login } = profileSlice.actions;
export default profileSlice.reducer;