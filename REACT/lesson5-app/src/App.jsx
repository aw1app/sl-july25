import useFetch from "./hooks/useFetch";


function App() {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/3");// 


    // Conditional rendering based on loading, error, and data states
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }



    return (

        <>
         <p>Title: {data.title}</p>
            <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </>
    );


}


export default App;