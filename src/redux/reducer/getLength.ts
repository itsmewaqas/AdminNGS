import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
    getLength: number;  
}

const initialState: AuthState = {
    getLength: 0,  
};

const getLengthSlice = createSlice({
    name: 'getLength',
    initialState,
    reducers: {
        setLength: (state, action) => {
            state.getLength = action.payload; 
        },
    }
});

console.log(getLengthSlice.actions);
export default getLengthSlice.reducer;
export const { setLength } = getLengthSlice.actions;































