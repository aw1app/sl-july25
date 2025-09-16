import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import MyProtected from './components/L4/MyProtected';
import Products from './pages/Products';
import MenuBar from './components/L4/MenuBar';



function App() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const signin = () => {
        setIsSignedIn(true);
    };

    const signout = () => {
        setIsSignedIn(false);
    };


    return (
        <>
            <MenuBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId/:x1" element={<UserProfile />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/products"
                    element={
                        <MyProtected isSignedIn={isSignedIn}>
                            <Products />
                            <Footer />                         
                        </MyProtected>
                    }
                />

                <Route path="/*" element={<NotFoundPage />} />
            </Routes>


            {isSignedIn ? (
                <div className="d-grid mt-2">
                    <button className="btn btn-danger" onClick={signout}>
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="d-grid mt-2">
                    <button className="btn btn-dark" onClick={signin}>
                        Sign in
                    </button>
                </div>
            )}

            
        </>
    );
}

export default App;

