import { combineReducers } from "@reduxjs/toolkit";



// Reducer for managing the list of todos
const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]; // Add new todo
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload); // Remove todo by id
        default:
            return state;
    }
};


function counterReducer(state = {count:0}, action) {

    switch (action.type) {

        case 'INCREMENT':
            return { count: state.count + 1 };

        case 'DECREMENT':
            return { count: state.count - 1 };

        default:
            return state;
    }
}



// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
    todoListReducer: todoListReducer, // Assign todoListReducer to the 'todoList' state slice
    // Add other reducers here if your app grows
    counterReducer: counterReducer
});

export default rootReducer;
