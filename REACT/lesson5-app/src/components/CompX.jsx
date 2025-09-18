import useCounter from "../hooks/useCounter";

function CompX(){


    const { count, increment, decrement } = useCounter(5);


    return (

        <>
            <h2> INSIDE Comp X </h2>
            Count: {count}

            <button onClick={increment} >INCREMENT </button>
            <button onClick={decrement} >DECREMENT </button>

        </>
    )



}


export default CompX;