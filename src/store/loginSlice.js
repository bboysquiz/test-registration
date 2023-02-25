import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: false
  },
  reducers: {
    setLogin(state, action) {
      state.login = true;
    },
    setLogout(state, action) {
      state.login = false;
    }
  }
});

export const { setLogin, setLogout } = loginSlice.actions;


export default loginSlice.reducer;
