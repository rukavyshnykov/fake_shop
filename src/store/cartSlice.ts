import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../services/types";

const initialState: CartProduct[] = []

export const slice = createSlice({
    initialState,
    name: 'cart',
    reducers: create => ({
        addProduct: create.reducer((state, action: PayloadAction<Product>) => {
            state.push({...action.payload, amount: 1})
        }),
        deleteProduct: create.reducer((state, action: PayloadAction<{id: number}>) => {
            const removeIndex = state.map(product => product.id).indexOf(action.payload.id)
            state.splice(removeIndex, 1);
        }),
        increaseAmount: create.reducer((state, action: PayloadAction<{id: number}>) => {
            const target = state.find(product => product.id === action.payload.id)
            if(target) {
                target.amount += 1
            }
        }),
        decreaseAmount: create.reducer((state, action: PayloadAction<{id: number}>) => {
            const target = state.find(product => product.id === action.payload.id)
            if(target) {
                target.amount -= 1
            }
        }),
    })
})

export const cartReducer = slice.reducer
export const cartActions = slice.actions