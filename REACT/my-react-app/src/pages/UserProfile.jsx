import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId, x1 } = useParams();



    return (
        <div>
            <h2>User Profile</h2>
            <p>User ID: {userId}</p>
            <p>User ID: {x1}</p>
        </div>
    );
}

export default UserProfile;