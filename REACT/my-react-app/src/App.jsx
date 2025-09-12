import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardProfile1 from './pages/DashboardProfile1';
import DashboardProfile2 from './pages/DashboardProfile2';


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
                    <Route path="profile1" element={<DashboardProfile1 />} />
                    <Route path="profile2" element={<DashboardProfile2 />} />
                </Route>
            </Routes>

       
        </div>
    );
}

export default App;