import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Infos {
    todos: Array<any>
    todo: {
        id: number,
        isDone: boolean,
        title: string,
        description: string,
        dueDate: string
    }
}

interface SetInfos {
    type: string,
    payload: string
}

interface EventInfos {
    type: string,
    payload: number
}

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [],
        todo: {
            id: 0,
            isDone: false,
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
            state.todo.dueDate = action.payload.split('-').reverse().join('/')
        },
        sendTodo: (state: Infos): void => {
            state.todo.id++
            state.todos = [...state.todos, (state.todo)]
            console.log(state.todos)
        },
        todoDone: (state: Infos, action: EventInfos): void => {
            const id: number = state.todos.findIndex((todo: { id: number }) => (todo.id) === action.payload)
        
            state.todos[id].isDone = true
        },
        todoDelete: (state: Infos, action: EventInfos): void => {
            const id: number = state.todos.findIndex((todo: { id: number }) => (todo.id) === action.payload)

            if (state.todos[id].isDone === false) {
                let confirm: boolean = window.confirm("Do you really want to delete this task ?")
                
                if (confirm === true) {
                    state.todos = [...state.todos.filter((todo: { id: number }) => todo.id !== action.payload)]
                }
            } else {
                state.todos = [...state.todos.filter((todo: { id: number }) => todo.id !== action.payload)]
            }
        }
    }
})

export const store = configureStore({
    reducer: {
        Todo: todoSlice.reducer
    }
})