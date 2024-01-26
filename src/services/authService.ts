import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import { LoginRequestDto, RefreshTokenRequestDto } from '../api/api';
import { authSuccess } from '../redux/auth/authSlice';
import { defaultErrorHandler } from '../utils/error-handler';
import usersService from './userService';
import { TokensApi } from '../api';

// @ts-ignore
const tokensApi = new TokensApi({
  basePath: process.env.REACT_APP_API_BASE_URL,
});

const login = (data: LoginRequestDto) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      toast.dismiss();
      const response = await tokensApi.loginPost({ loginRequestDto: data });

      dispatch(authSuccess(response.data));
      dispatch(usersService.getMe());

      return Promise.resolve(response.data);
    } catch (error: any) {
      defaultErrorHandler(error.response?.data);
      return Promise.reject(error.response?.data);
    }
  };
};

const refreshToken = (data: RefreshTokenRequestDto) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      toast.dismiss();
      const response = await tokensApi.refreshTokenPost({
        refreshTokenRequestDto: data,
      });

      dispatch(authSuccess(response.data));
      dispatch(usersService.getMe());

      return Promise.resolve(response.data);
    } catch (error: any) {
      // defaultErrorHandler(error.response?.data);
      defaultErrorHandler(error.response);
      return Promise.reject(error.response?.data);
    }
  };
};

export default {
  login,
  refreshToken,
};