import React, { useState } from 'react';
function UserGreeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn &&  <h2>Welcome, User!</h2> }  
            
            {!isLoggedIn && <h2>Please log in.</h2> }

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>

                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}
export default UserGreeting;