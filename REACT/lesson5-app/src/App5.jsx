import CompX from "./components/CompX";
import useCounter from "./hooks/useCounter";


function App() {
    const { count, increment, decrement } = useCounter(0);


    return (

        <>
            Count: {count}

            <button onClick={increment} >INCREMENT </button>
            <button onClick={decrement} >DECREMENT </button>


            <br/><br/>
            <CompX />

        </>
    )
}


export default App;