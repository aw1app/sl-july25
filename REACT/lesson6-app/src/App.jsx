// src/App.js

import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import AddTodo from "./components/AddTodo.jsX";
import TodoList from "./components/TodoList";

function App() {
  const count = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch(); // Get dispatch function

  const todoList = useSelector(state => state.todoListReducer); // Get the todoList state

  // Action creators for increment and decrement for Counter component
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };


  // Action creator to add a todo
  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  // Action creator to remove a todo
  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };


  return (
    
    <div>
      <h1>Combine Reducer Demo</h1>

        <Counter count={count} increment={increment} decrement={decrement} />
        <Counter count={count} increment={increment} decrement={decrement} />

        <br/>
        <h1>Todo App with Redux</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todoList} removeTodo={removeTodo} />


    </div>
    
  );
}

export default App;
