import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Store } from 'redux';
import { AppState } from '../rootReducer';

/* eslint no-param-reassign: "off" */
const axiosAuthorizationHandler = (store: Store) => {
  axios.interceptors.request.use(
    (config: any) => {
      const state = store.getState() as AppState;

      if (state.auth.accessToken) {
        config.headers.Authorization = `Bearer ${state.auth.accessToken}`;
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
};

export default axiosAuthorizationHandler;