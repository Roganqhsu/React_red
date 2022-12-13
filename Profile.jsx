import React from 'react'
import NotLogin from './NotLogin';
import Login from './Login';
import { useSelector } from 'react-redux';
const Profile = () => {
    const state = useSelector((state) => state.user);
    return (
        <div>Profile
            {state.profile.login ? <Login /> : <NotLogin />}
        </div>
    )
}

export default Profile