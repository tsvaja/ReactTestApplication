import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';

function Profile() {
    const navigate = useNavigate();
    const auth = useAuth();
    function logoutHandler() {
        auth.logout();
        navigate('/login', )
      }
    
    return (
        <div>

            Welcome {auth.user},
            <br />
            <button onClick={() => logoutHandler()}>Logout</button>
            <br />

        </div>
    )
}

export default Profile