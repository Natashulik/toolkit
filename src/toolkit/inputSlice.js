import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    isEmpty: false,
}

export const inputSlice = createSlice ({
    name: "input", 
    initialState,
    reducers: {
        setInputText: (state, action) => {
            state.text = action.payload;
        },
        setIsEmpty: (state, action) => {
            state.isEmpty = action.payload;
        },
    }
})

export const {setInputText,setIsEmpty } = inputSlice.actions;

export default inputSlice.reducer;