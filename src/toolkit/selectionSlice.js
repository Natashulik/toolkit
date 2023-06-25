import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedButton: "all",
    sortType: ''
  }

export const selectionSlice = createSlice ({
    name: "selection", 
    initialState,
    reducers: {
        pressButton: (state, action) => {
            state.selectedButton = action.payload;
        },
        setSelectSort: (state, action) => {
            state.sortType = action.payload;
        },
    }
})

export const {pressButton, setSelectSort } = selectionSlice.actions;
export default selectionSlice.reducer;