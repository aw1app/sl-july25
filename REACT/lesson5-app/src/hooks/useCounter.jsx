// Custom Hook: useCounter
// Takes an initial value and provides count, increment, and decrement functions

import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        // Optional: prevent decrementing below zero
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return { count, increment, decrement };
}

export default useCounter;