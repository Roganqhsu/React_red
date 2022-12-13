import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setLogOut } from '../store/userSlice'
const Login = () => {
    const state = useSelector((state) => state.user)
    const Dispatch=useDispatch()
    const logOut=()=>{
        Dispatch(
            setLogOut()
        )
    }
    return (
        <div>Login
            <p>Name : {state.profile.name}</p>
            <p>Age :　{state.profile.age}</p>
            <p>Email : {state.profile.email}</p>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Login