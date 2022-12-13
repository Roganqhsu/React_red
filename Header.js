import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// firebase
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
// redux
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import styles from './Header.module.scss';
// components
import { ShowOnLogin, ShowOnLogOut } from '../hiddenLink/HiddenLink';

// Icon
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
// package
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
// import { set } from 'immer/dist/internal';
const Logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>e<span>Shop.</span></h2>
    </Link>
  </div>
)
  ;
const activeLink = (
  ({ isActive }) => isActive ? `${styles.active}` : ''
)
const Cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart <FaShoppingCart />
      <p>10</p>
    </Link>
  </span>
)
const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // RWD漢堡選單
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const hideMenu = () => {
    setShowMenu(false);
  };
  // 登出
  const apple = () => {

    setIsLoading(true)
    signOut(auth).then(() => {
      setIsLoading(false)
      toast.success('Success log out')
      setDisplayName('');
    }).catch((error) => {
      // An error happened.
      console.log(error);
      setIsLoading(true)

    });

  }
  // 登入狀態
  // 1.登入狀態陣列
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch()
  // Manage Users in Firebase
  // onAuthStateChanged
  // 2.執行函式
  useEffect(
    () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          if (user.displayName == null) {
            const u1 = user.email.substring(0, user.email.indexOf('@'))
            const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
            setDisplayName(uName)
          } else {
            setDisplayName(user.displayName)

          }
          dispatch(
            SET_ACTIVE_USER({
              email: user.email,
              userName: user.displayName ? user.displayName : displayName + 'guest',
              userID: user.uid
            })
          )
        } else {
          setDisplayName('');
          dispatch(REMOVE_ACTIVE_USER())

        }
      });
    }, []
  )


  return (
    <header>
      {isLoading && <Loader />}
      <div className={styles.header}>
        {/* 左側logo */}
        {Logo}
        {/* 右半邊側邊攔 */}
        <nav
          className={
            // styles['show-nav']
            showMenu ? styles['show-nav'] : styles['hide-nav']
          }
        >
          {/* 黑屏 */}
          <div
            className={
              `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
              //   showMenu ? `${styles['nav-wrapper'] } ${styles['show-nav-wrapper']}` : styles['nav-wrapper']
            }
            onClick={hideMenu}
          ></div>
          {/*  {/* 中間連結 > home、contact  */}
          <ul>
            <li>
              <NavLink className={activeLink} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to='/contact'>contact</NavLink>
            </li>
          </ul>
          {/* 右邊連結 >*/}
          <div
            onClick={hideMenu}
            className={styles['header-right']}>
            {/*  Login、Register、MyOrder、 */}
            <span className={styles.links}>
              <ShowOnLogin>
                <a style={{ color: 'orangered' }}><FaUserCircle size={16} /> HI{displayName}</a>
              </ShowOnLogin>
              <ShowOnLogOut>
                <NavLink className={activeLink} to='/login'>Login</NavLink>
              </ShowOnLogOut>
              <NavLink className={activeLink} to='/register'>Register</NavLink>
              <ShowOnLogin>

                <NavLink className={activeLink} to='/order-history'>My Order</NavLink>
              </ShowOnLogin>
              <ShowOnLogin>
                <a style={{ cursor: 'pointer' }} onClick={apple}>LogOut</a>
              </ShowOnLogin>
              {/* <HiOutlineMenu style={{ fontSize: '28px' }} onClick={apple} /> */}

            </span >

            {/* Cart */}
            {Cart}
          </div>

        </nav>

        <div className={styles["menu-icon"]}>
          {Cart}
          <HiOutlineMenu style={{ fontSize: '28px' }} onClick={toggleMenu} />
          <HiOutlineMenu style={{ fontSize: '28px' }} onClick={apple} />

        </div>
      </div>
    </header>
  )
}

export default Header;
