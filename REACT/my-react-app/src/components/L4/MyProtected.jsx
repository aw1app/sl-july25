import { Navigate } from "react-router-dom";


function MyProtected({ isSignedIn, children }) {

    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
    
}


export default MyProtected;