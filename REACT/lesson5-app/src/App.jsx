import { useEffect, useReducer } from "react";




const initialState = {
    loading: true, // Indicates if data is currently being fetched
    error: null,   // Stores any error that occurs during fetching
    data:  {},      // Stores the fetched data
};


// The reducer function to handle different fetching actions
function reducer(state, action) {

    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state, // Keep existing state properties
                loading: false, // Fetching is complete
                error: null,    // Clear any previous errors
                data: action.payload, // Store the fetched data
            };
        case "FETCH_ERROR":
            return {
                ...state,
                loading: false, // Fetching is complete (with an error)
                error: action.payload, // Store the error message
                data: {},       // Clear any incomplete data
            };
        default:
            throw new Error("Unknown action type"); // Handle unexpected actions
    }

}



function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect hook to perform data fetching when the component mounts
    useEffect(

        () => {
            // Use an IIFE or async function inside useEffect to handle async logic
            async function fetchData() {
                
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/todos/7");  // Fetch a single todo item 
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();

                    dispatch({ type: "FETCH_SUCCESS", payload: data }); // Dispatch success action with data
                } catch (error) {
                    dispatch({ type: "FETCH_ERROR", payload: error.message }); // Dispatch error action with error message
                }
            }

            fetchData(); 
            console.log(" INSIDE useEffect")           

        }
        , []
    );

    // Conditional rendering based on loading, error, and data states
    if (state.loading) {
        return <div>Loading...</div>;
    }

    if (state.error) {
        return <div style={{ color: 'red' }}>Error: {state.error}</div>;
    }


    return (
        <>

            <div className="App">
                <h1>useReducer Demo with Vite</h1>
                <h2>Custom Hook Fetch Demo</h2>
                {/* Display fetched data */}


                <p>Title: {state.data.title}</p>
                <p>Completed: {state.data.completed ? "Yes" : "No"}</p>


            </div>

        </>
    );

}


export default App;