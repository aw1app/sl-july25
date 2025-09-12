import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';

function App() {
    return (
        <div>
          
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />

                {/* Parent route with children */}
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<DashboardProfile />} />
                </Route>
            </Routes>

       
        </div>
    );
}

export default App;