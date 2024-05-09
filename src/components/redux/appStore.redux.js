
import { configureStore } from "@reduxjs/toolkit"

import profileReducer from "./login/profileSlice.redux"

const appStore = configureStore({
    reducer: {
        profile: profileReducer
    }
});

export default appStore;