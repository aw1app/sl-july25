import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>This is the Dashboard page of the application.</p>

            <nav>
                <ul>
                    <li><Link to="profile1">Profile 1</Link></li>
                    <li><Link to="profile2">Profile 2</Link></li>
                </ul>
            </nav>

            {/* Child routes will render here */}
            <Outlet />
        </div>
    );
}

export default Dashboard;