import { createSlice } from "@reduxjs/toolkit";


const initState = [
    {
        id: 1,
        name: "Learn React",
        completed: true,
        priority: "High"
    },
    {
        id: 2,
        name: "Learn Redux",
        completed: false,
        priority: "Medium"
    },
    {
        id: 3,
        name: "Learn JavaScript",
        completed: false,
        priority: "Low"
    },
    {
        id: 4,
        name: "Learn HTML",
        completed: true,
        priority: "Medium"
    },
    {
        id: 5,
        name: "Learn CSS",
        completed: false,
        priority: "Medium"
    },
    {
        id: 6,
        name: "Learn Bootstrap",
        completed: true,
        priority: "Low"
    },
    {
        id: 7,
        name: "Learn Node",
        completed: false,
        priority: "High"
    }
]


/* const todoListReducer = (state = initState, action) => {
    // console.log("todoListReducer called", { state, action });
    switch (action.type) {
        case AddTodoAction:
            return [...state, action.payload]
        case TodoList_ChangeCompleteStatus:
            // return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
            const newState = [...state];
            const i = state.findIndex(t => t.id === action.payload);
            const a = state[i];
            newState[i] = {...a, completed: !a.completed};
            return newState;
        default:
            // console.log("todoListReducer default called");
            return state;
    }
} */

export const AddTodoAction = "addTodo";
export const TodoList_ChangeCompleteStatus = "changeCompleteStatus";
export const TodoList_DeleteTodo = "deleteTodo";

const todoListReducer = createSlice({
    name: "todoList",
    initialState: initState,
    reducers: {
        [AddTodoAction]: (state, action) => {
            state.push(action.payload);
        },
        [TodoList_ChangeCompleteStatus]: (state, action) => {
            const i = state.findIndex(t => t.id === action.payload);
            const a = state[i];
            state[i] = { ...a, completed: !a.completed };
            // return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        },
        [TodoList_DeleteTodo]: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
})

export default todoListReducer;