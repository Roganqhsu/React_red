import { createSlice } from '@reduxjs/toolkit';
// 初始化狀態內容
const initialState = {
    profile: {
        name: '',
        age: 0,
        email: '',
        login: false,
    }
}

const userSlice = createSlice({
    name: 'name',
    // 初始化狀態
    initialState: initialState,
    // 操作項目
    reducers: {
        setLogin(state, action) {
            console.log("action.payload"+action.payload);
            
            // 解構賦值
            const { name, age, email } = action.payload
            
            state.profile = {
                name,
                age,
                email,
                login : true
            }
        },
        setLogOut(state, action) {
            state.profile = initialState
        }
    }
});

export const { setLogin, setLogOut } = userSlice.actions;

export default userSlice.reducer