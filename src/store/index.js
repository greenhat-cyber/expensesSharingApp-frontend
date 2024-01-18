import { configureStore } from "@reduxjs/toolkit";

//Sign In
import signInSlice from "./signIn/SignInSlice";
import signUpSlice from "./signup/SignUpSlice";


export const store = configureStore({
    reducer: {
        signInSlice,
        signUpSlice,
    }
})