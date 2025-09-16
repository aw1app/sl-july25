import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState(null);

  useEffect (

    () => {
     

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));

             
            return cleanup;
    },

    []
  );

  const cleanup = () => {
    console.log("INSIDE cleanup ...");
    setUsers(null);
  }


  return (
    <>

      <h1>useEffect Demo</h1>
      
      <ul>
        {users &&  
         
          users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))
        
        }

        {!users &&  
        <p> Loading ...</p>}       
      

      </ul>

    </>
  )
}

export default App
