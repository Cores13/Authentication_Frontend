import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;