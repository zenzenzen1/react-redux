// export const addTodoAction = {
//     type: "todoList/addTodo",
//     payload: {
//         id: 4,
//         name: "Learn Python",
//         completed: false,
//         priority: "Low"
//     }
// }
export const StatusFilterChange = "filter/statusFilterChange"
export const PriorityFilterChange = "filter/priorityFilterChange"
export const SearchFilterChange = "filter/searchFilterChange"
export const AddTodoAction = "todoList/addTodo"
export const TodoList_ChangeCompleteStatus = "todoList/changeCompleteStatus"

export const todoList_ChangeCompleteStatus = (id) => {
    return {
        type: TodoList_ChangeCompleteStatus,
        payload: id
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: PriorityFilterChange,
        payload: priorities
    }
}

export const statusFilterChange = (status) => {
    return {
        type: StatusFilterChange,
        payload: status
    }
}

export const addTodoAction = (todo) => {
    return {
        type: AddTodoAction,
        payload: todo
    }
}

export const searchFilterChange = (text) => {
    return {
        type: SearchFilterChange,
        payload: text
    }
}
