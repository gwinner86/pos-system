import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user : null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Login: (state, action) => {
          state.user = action.payload;
    },
    Logout: (state) => {
      state.user = null;
    }

  },
})


export const { Login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
