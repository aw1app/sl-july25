import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
     <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId/:x1" element={<UserProfile />} />
            </Routes>
            <Footer />
     </>
    );
}

export default App;