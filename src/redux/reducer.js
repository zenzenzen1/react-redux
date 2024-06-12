// import { combineReducers } from "redux";
// import filterReducer from "./reduce_slice/FilterSlice";
// import todoListReducer from "./reduce_slice/TodoListSlice";

// const initState = {
//     filters: {
//         search: "",
//         status: "All",
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1,
//             name: "Learn React",
//             completed: false,
//             priority: "High"
//         },
//         {
//             id: 2,
//             name: "Learn Redux",
//             completed: false,
//             priority: "Medium"
//         },
//         {
//             id: 3,
//             name: "Learn JavaScript",
//             completed: false,
//             priority: "Low"
//         },
//     ],
//     test: {
//         demo: () => {
//             console.log("demo called");
//         }
//     }
// };


// const rootReducer = combineReducers({
//     filters: filterReducer,
//     todoList: todoListReducer
// });
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }

//     /* 
//         {
//             type: "todolist/addTodo",
//             payload: {
//                 id: 4,
//                 name: "Learn Python",
//                 completed: false,
//                 priority: "Low"
//             }
//         }
//     */

// //     /* switch (action.type) {
// //         case "todoList/addTodo":
// //             return {
// //                 ...state,
// //                 todoList: [...state.todoList, action.payload]
// //             }
// //         case "filter/searchFilterChange":
// //             return {
// //                 ...state,
// //                 filters: {
// //                     ...state.filters,
// //                     search: action.payload
// //                 }
// //             }
// //         default:
// //             console.log("default called");
// //             return state;
// //     } */
// // }

// export default rootReducer;