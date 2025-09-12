import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <div>
            <h1>React App with Vite</h1>
            
            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About </Link></li>
                </ul>
            </nav>
           
           
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>


        </div>
    );
}

export default App;