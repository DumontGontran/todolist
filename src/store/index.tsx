import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Infos {
    todos: Object[]
    todo: {
        title: string,
        description: string,
        dueDate: string
    }
}

interface SetInfos {
    type: string,
    payload: string
}

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [],
        todo: {
            title: '',
            description: '',
            dueDate: new Date().toDateString()
        }
    },
    reducers: {
        setTitle: (state: Infos, action: SetInfos): void => {
            console.log(action.payload)
            state.todo.title = action.payload
        },
        setDescription: (state: Infos, action: SetInfos): void => {
            console.log(action.payload)
            state.todo.description = action.payload
        },
        setDueDate: (state: Infos, action: SetInfos): void => {
            console.log(action.payload)
            state.todo.dueDate = action.payload
        },
        sendTodo: (state: Infos): any => {
            state.todos = [...state.todos, state.todo]
            console.log(state.todos)
        }
    }
})

export const store = configureStore({
    reducer: {
        Todo: todoSlice.reducer
    }
})