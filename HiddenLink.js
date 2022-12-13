import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slice/authSlice';

export const ShowOnLogin = ({ children }) => {
    const isLogin = useSelector(selectIsLoggedIn)
    // console.log(isLogin);
    if (isLogin) {
        return (
            children
        )
    } else {
        return null
    }

}
export const ShowOnLogOut = ({ children }) => {
    const isLogin = useSelector(selectIsLoggedIn)
    if (!isLogin) {
        return (
            children
        )
    } else {
        return null
    }
}
// export default HiddenLink