import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{ id: 1, title: "shopping", type: "private", completed: false, editMode: false },
     { id: 2, title: "shopping", type: "private", completed: false, editMode: false },
     { id: 3, title: "more shopping", type: "private", completed: false, editMode: false }
    ]
  }

export const taskSlice = createSlice ({ 
    name: "task", 
    initialState,
    reducers: {
        setNewTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        changeTaskTitle: (state, action) => {
            const { id, newTitle } = action.payload;
            state.tasks = state.tasks.map(item => item.id !== action.payload.id ? item : { ...item, title: action.payload.newTitle })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        },
        editTask: (state, action) => {                   
            state.tasks = state.tasks.map(item => item.id === action.payload ? { ...item, editMode: !item.editMode } : item)
        },
        setIsCompleted: (state, action) => {
            state.tasks = state.tasks.map(item => item.id === action.payload.id ? { ...item, completed: !item.completed } : item)
        },
    }
})

export const {setNewTask, changeTaskTitle, deleteTask, editTask, setIsCompleted} = taskSlice.actions;
export default taskSlice.reducer;