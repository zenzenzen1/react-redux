
const initState = {
    value: 0
}
let value = 0;
//Reducers
const rootReducer = (state = initState, action) => {
    /* 
        type: "todolist/increment",
        payload: 10
     */
    // action(state);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, value: state.value + 1};
        case 'DEC':
            return {value: state.value - 1};
        case "todolist/increment":
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }
    
}

// Actions
const DECREMENT = {
    type: "DEC"
}

const INCREMENT = {
    type: "todolist/increment",
    payload: 10
}

value += rootReducer(initState, INCREMENT).value;
value += rootReducer(initState, DECREMENT).value;
console.log(value);

// Action creators
const incrementCreator = (data) => {
    return {
        type: "INCREMENT",
        payload: data
    };
}
console.log(incrementCreator(10));

// Dispatch 
// eslint-disable-next-line no-undef
dispatch(incrementCreator(10));

