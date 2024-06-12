import { createSlice } from "@reduxjs/toolkit";

const initState = {
    search: "",
    status: "All",
    priorities: []
};

/* const filterReducer = (state = initState, action) => {
    // console.log("filterReducer called", { state, action });
    switch (action.type) {
        case SearchFilterChange:
            return {
                ...state,
                search: action.payload
            }
        case StatusFilterChange:
            return {
                ...state,
                status: action.payload
            }
        case PriorityFilterChange:
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
} */
export const StatusFilterChange = "filter/statusFilterChange"
export const PriorityFilterChange = "filter/priorityFilterChange"
export const SearchFilterChange = "filter/searchFilterChange"


const filterReducer = createSlice({
    name: "filters",
    initialState: initState,
    reducers: {
        [SearchFilterChange]: (state, actions) => {
            state.search = actions.payload;
        },
        [StatusFilterChange]: (state, actions) => {
            state.status = actions.payload;
        },
        [PriorityFilterChange]: (state, actions) => {
            state.priorities = actions.payload;
        }
    }
})

export default filterReducer;