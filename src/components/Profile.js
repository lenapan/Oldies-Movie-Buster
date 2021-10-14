import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="col-4">
                {/* {JSON.stringify(user, null, 2)} */}

                <span className="profileName">Hi {user.name}</span>
                {/* <span>{user.email}</span> */}
                <img src={user.picture} alt={user.name} className="rounded-circle profileImg" />

            </div>
        )
    )
}

export default Profile

