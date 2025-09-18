import { useReducer } from "react";
import counterReducer from "./reducers/CounterReducer";

const initialState = { count: 0 };

function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState);


    return (
        <>
            Count : {state.count}

            <button onClick={() => dispatch({ type: 'increment' })} >INCREMENT </button>
            <button onClick={() => dispatch({ type: 'decrement' })} >DECREMENT </button>

        </>
    );

}


export default App;