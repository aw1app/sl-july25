import { Link } from 'react-router-dom';

function Header() {
    const randomUserId = Math.floor(Math.random() * 1000) + 1;
    const x1 = Math.floor(Math.random() * 1000) + 1;

    return (
        <header>
            <h1>Route Parameters Demo</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={`/user/${randomUserId}/${x1}`}>User Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;