// src/App.js

import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch(); // Get dispatch function

  // Action creators for increment and decrement
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };


  return (
    
    <div>
      <h1>Redux Demo</h1>

        <Counter count={count} increment={increment} decrement={decrement} />
        <Counter count={count} increment={increment} decrement={decrement} />

    </div>
    
  );
}

export default App;
