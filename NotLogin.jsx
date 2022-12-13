import React, { useRef } from 'react'
// useDispatch用來定義
import { useDispatch } from 'react-redux'
// 引入函式
import { setLogin } from '../store/userSlice'
const NotLogin = () => {
    const nameRef = useRef();
    const ageRef = useRef()
    const emailRef = useRef()


    const dispatch = useDispatch()

    const login = () => {
        const nameValue = nameRef.current.value;
        const ageValue = ageRef.current.value
        const emailValue = emailRef.current.value;
        dispatch(
            setLogin({
                name: nameValue+"QQ",
                age:ageValue,
                email: emailValue,
            })
        )

    }

    return (
        <div>NotLogin
            <br />
            <label htmlFor="name">name:</label>
            <input name='name' id='name' placeholder='name' ref={nameRef}></input>
            <br />
            <label htmlFor="age">age:</label>
            <input name='age' id='age' placeholder='age' ref={ageRef}></input>
            <br />
            <label htmlFor="email">email:</label>
            <input name='email' id='email' placeholder='email' ref={emailRef}></input>
            <br />
            <button onClick={login}>login</button>
        </div>
    )
}

export default NotLogin