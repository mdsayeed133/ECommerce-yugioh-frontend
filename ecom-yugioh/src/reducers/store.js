import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import cardSlice from "./cardReducer/cardSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        card: cardSlice
    }
});