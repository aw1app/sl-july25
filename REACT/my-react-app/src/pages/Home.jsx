import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
        // if user logged

        navigate('/dashboard');

        // else

        // navigate('/login');

    };


    return (
        <div>
            <h2>Welcome to the Home Page!</h2>

             <button onClick={redirectToDashboard}>Go to Dashboard</button>
        </div>
    );
}

export default Home;