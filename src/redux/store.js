/* 
    redux core    

    import { createStore } from "redux";
    import rootReducer from "./reducer";
    import { composeWithDevTools } from "redux-devtools-extension";

    const composeEnhancers = composeWithDevTools();

    const store = createStore(rootReducer, composeEnhancers);

    export default store;
 */

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reduce_slice/FilterSlice";
import todoListReducer from "./reduce_slice/TodoListSlice";

// redux toolkit

const store = configureStore({
    reducer: {
        filters: filterReducer.reducer,
        todoList: todoListReducer.reducer
    },
});

export default store;