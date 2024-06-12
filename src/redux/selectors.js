import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priorities;

// export const todoListSelector = (state) => {
//     // console.log(state);
//     const searchText = searchTextSelector(state);
//     return state.todoList.filter((t) => {
//         return t.name.toLowerCase().includes(searchText.toLowerCase());
//     });
// }

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritySelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((t) => {
            return t.name.toLowerCase().includes(searchText.toLowerCase())
                && (status === "All" ? true : (status === "Completed" ? t.completed : !t.completed))
                && (priorities.length === 0 ? true : priorities.includes(t.priority));
            // && ( (status === "Completed" ? t.completed : !t.completed) || status === "All") );
        });
    });


