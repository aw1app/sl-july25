// fetch data from any url

import { useEffect, useState } from "react";

// Custom Hook: useFetch
// Takes a URL and fetches data, managing loading and error states

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true when starting fetch
            setError(null);   // Clear any previous errors
            
            try {
                
                const response = await fetch(url);
                if (!response.ok) { // Check for HTTP errors
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);

            } catch (error) {
                setError(error.message); // Store the error message
            } finally {
                setLoading(false); // Set loading to false once fetching is complete (success or error)
            }
        };

        fetchData();
    }, [url]); // Rerun effect if URL changes

    return { data, error, loading }; // Return loading state as well
}

export default useFetch;
