import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserResponseDto } from '../../api';

export type AuthState = Readonly<{
  token: string | null;
  refreshToken: string | null;
  user: any | null;
}>;

export const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null,
};

/* eslint no-param-reassign: "off" */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess(state, action: PayloadAction<any>) {
      state.token = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
    },
    authFailure() {
      return initialState;
    },
    setCurrentUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    logout() {
      return initialState;
    },
  },
});

const { actions, reducer } = authSlice;
export const { authSuccess, authFailure, setCurrentUser, logout } = actions;
export default reducer;