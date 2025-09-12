import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [x,SetX] = useState(10);
    const [y,SetY] = useState(10);


    useEffect(

        () => {
            setSeconds(prevSeconds => prevSeconds + 1);
        },

        [x, y]
    ); // [] - run only once , [x,y] - run whenever x or y changes

    

    const clickMeToChangeX = () => {
       SetX( prev => prev + 1);
        console.log("x",x);
    }

    const clickMeToChangeY = () => {
       SetY( prev => prev + 1);
        console.log("y",y);
    }

    return (
        <>
            <h1>Timer: {seconds} seconds</h1>
            <button onClick={() => setSeconds(0)}>Reset</button> <br/>

            <button onClick={clickMeToChangeX}>clickMeToChangeX</button>
            <button onClick={clickMeToChangeY}>clickMeToChangeY </button>
            {x} {y}
        </>
    );
};

export default Timer;

