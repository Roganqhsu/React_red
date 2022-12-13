import { configureStore } from '@reduxjs/toolkit';
// redux本身的Provider
import { Provider } from 'react-redux';
import Profile from '../components/Profile'
import userSlice from './userSlice';
// 初始化store
const store = configureStore({
    // reducer放function，用這些function來操作state
    reducer: {
        // key : value
        user: userSlice,
    }
})

function Redux() {
    return (
        // Provider
        <Provider store={store}>
            <div>
                <Profile />
            </div>
        </Provider>
    )
}

export default Redux