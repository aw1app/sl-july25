import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";


function CompB() {
    // Consume the context to get the current theme value    
    const {counter, setCounter} = useContext(CounterContext);

    return <>
    <p>(INSIDE Comp B ) Current counter : {counter }</p>
    <button onClick={ ( )=> setCounter ( prev => prev + 1 ) }></button>
    </>;
}

export default CompB;

