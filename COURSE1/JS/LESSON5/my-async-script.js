

// Simulating an asynchronous operation using Promises
function fetchData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Data retrieved successfully!")
                : reject("Failed to fetch data");
        }, 2000);
    }

    );
}

// Using async/await with error handling
async function fetchAsyncData() {
    try {
        const data = await fetchData();
        document.getElementById("output").innerText = `Async/Await Success: ${data}`;
        console.log("Async/Await Success:", data);
    } catch (error) {
        document.getElementById("output").innerText = `Async/Await Error: ${error}`;
        console.log("Async/Await Error:", error);
    }
}





// Fetch API for real-time data
async function fetchUserData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let userData = await response.json();
        document.getElementById("output").innerText = `Fetched user: ${userData.name}`;
        console.log(userData);
    } catch (error) {
        document.getElementById("output").innerText = `Error fetching user data: ${error}`;
        console.error("Fetch API Error:", error);
    }
}



