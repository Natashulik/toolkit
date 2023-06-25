import { configureStore } from '@reduxjs/toolkit';
import inputSlice from './inputSlice';
import taskSlice from './taskSlice';
import selectionSlice from './selectionSlice';

export const store =  configureStore({
  reducer: {
    input: inputSlice,
    task: taskSlice,
    selection: selectionSlice
  },
});
