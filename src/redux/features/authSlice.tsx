import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'authSlice',

  initialState,
  reducers: {
    signup: (state, action) => {
      console.log('Payload ====> ', action.payload);

      state.userInfo = action.payload;
    },
  },
});
export const {signup} = authSlice.actions;

export default authSlice.reducer;
