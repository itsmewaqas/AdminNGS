import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
    loginDetail: any[]; // Replace `any` with a proper type if available
    loading: boolean;
    error: any;          // Or `string | null`
    isAuth: boolean;
}

const initialState: AuthState = {
    loginDetail: [],
    loading: false,
    error: null,
    isAuth: false
};

const loginDetail = createSlice({
    name: 'loginDetail',
    initialState,
    reducers: {
        loginMethod: (state, action) => {
            state.loginDetail = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.loginDetail = []; 
            localStorage.clear();
            state.isAuth = false;
        }
    }
});

console.log(loginDetail.actions);

export default loginDetail.reducer;
export const { loginMethod, logout } = loginDetail.actions;










