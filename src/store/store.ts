import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../services/baseApi";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>