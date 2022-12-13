import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// firebase
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAuth,  } from "firebase/auth";



// components
import { auth } from '../../firebase/config'
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
// img
import loginImg from '../../assets/login.png'
import { FaGoogle } from 'react-icons/fa';

// package
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState('');
  
  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const u1 = user.email.substring(0, user.email.indexOf('@'));
        const uName =u1.charAt(0).toUpperCase() + u1.slice(1);
        toast.success(`HI ${uName}`);
        setIsLoading(false);
        // navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        toast.error(`QQ ${errorMessage}`);
        setIsLoading(false);

      });
    // loginWithGoogle
  }

  const provider = new GoogleAuthProvider

  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        // toast.success(result)
        console.log(result);
        alert('success')
      }).catch((error) => {
        // toast.error(error)
        alert('error')
        console.log(error);
      });
  }
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className={styles.auth}>
        {/* 照片 */}
        <div className={styles.img}>
          <img src={loginImg} width='400' alt='LoginImg' />
        </div>
        {/* 表單 */}
        <Card>
          <div className={styles.form}>
            {/* 輸入區域 */}
            <form onSubmit={login}>
              <h2>
                Login
              </h2>
              <input onChange={(e) => {
                setEmail(e.target.value);
              }} type='text' placeholder='account' />
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} type='password' placeholder='password' />
              <button type='submit' className='--btn --btn-block --btn-primary'>
                Login
              </button>
              {/* <div className={styles.links}>
            <Link to='/'>Forget Password</Link>
          </div> */}
              <Link className={styles.links} to='/reset'>Forget Password</Link>
              <p>
                -- or --
              </p>
            </form>
            <button type='button' onClick={signWithGoogle} className='--btn --btn-block --btn-danger'>
              <FaGoogle />&ensp; Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to='/register' >Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  )
}

export default Login
