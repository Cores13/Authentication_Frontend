/* eslint-disable import/no-anonymous-default-export */
import { Dispatch } from 'redux';
import { AdminUsersApiApiAdminUsersGetRequest, AdminUsersApiApiAdminUsersNewAdminPostRequest, AdminUsersApiApiAdminUsersPutRequest, ApiUsersResendVerificationEmailPostRequest, ApiUsersVerifyEmailPostRequest, UsersApiApiUsersForgotPasswordRequestPostRequest, UsersApiApiUsersForgotPasswordResetPasswordPostRequest, UsersApiApiUsersForgotPasswordVerifyCodePostRequest, UsersApiApiUsersMePutRequest } from '../api';
import { setCurrentUser } from '../redux/auth/authSlice';
import { defaultErrorHandler } from '../utils/error-handler';
import { UsersApi } from '../api/apis/usersApi';
import { AdminUsersApi } from '../api/apis/adminUsersApi';

// @ts-ignore
const usersApi = new UsersApi({
  basePath: process.env.REACT_APP_API_BASE_URL,
});

// @ts-ignore
const adminUsersApi = new AdminUsersApi({
  basePath: process.env.REACT_APP_API_BASE_URL,
});
const getMe = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await usersApi.apiUsersMeGet();
      dispatch(setCurrentUser(response.data));
      return Promise.resolve(response.data);
    } catch (error: any) {
      defaultErrorHandler(error.response?.data);
      return Promise.reject(error.response?.data);
    }
  };
};

const updateMe = async (data: UsersApiApiUsersMePutRequest) => {
  try {
    const response = await usersApi.apiUsersMePut(data);
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const addAdmin = async (data: AdminUsersApiApiAdminUsersNewAdminPostRequest) => {
  try {
    const response = await adminUsersApi.apiAdminUsersNewAdminPost(data);
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const getUserById = async (id: number) => {
  try {
    const response = await adminUsersApi.apiAdminUsersIdGet({ id });
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const getAll = async (data: AdminUsersApiApiAdminUsersGetRequest) => {
  try {
    const response = await adminUsersApi.apiAdminUsersGet(data);
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const update = async (data: AdminUsersApiApiAdminUsersPutRequest) => {
  try {
    const response = await adminUsersApi.apiAdminUsersPut(data);
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const deleteUser = async (id: number) => {
  try {
    const response = await adminUsersApi.apiAdminUsersIdDelete({ id });
    return Promise.resolve(response.data);
  } catch (error: any) {
    defaultErrorHandler(error.response?.data);
    return Promise.reject(error.response?.data);
  }
};

const forgotPasswordRequest = async (
  data: UsersApiApiUsersForgotPasswordRequestPostRequest
  ) => {
  try {
    const response = await usersApi.apiUsersForgotPasswordRequestPost(data);
    return Promise.resolve(response.data);
  } catch (e: any) {
    defaultErrorHandler(e.response?.data);
    return Promise.reject(e.response?.data);
  }
};

const forgotPasswordVerifyCode = async (
  data: UsersApiApiUsersForgotPasswordVerifyCodePostRequest
  ) => {
  try {
    const response = await usersApi.apiUsersForgotPasswordVerifyCodePost(
      data
    );
    return Promise.resolve(response.data);
  } catch (e: any) {
    defaultErrorHandler(e.response?.data);
    return Promise.reject(e.response?.data);
  }
};

const forgotPasswordResetPassword = async (
  data: UsersApiApiUsersForgotPasswordResetPasswordPostRequest
  ) => {
  try {
    const response = await usersApi.apiUsersForgotPasswordResetPasswordPost(
      data
    );
    return Promise.resolve(response.data);
  } catch (e: any) {
    defaultErrorHandler(e.response?.data);
    return Promise.reject(e.response?.data);
  }
}

const verifyEmail = async (
  data: ApiUsersVerifyEmailPostRequest
  ) => {
  try {
    const response = await usersApi.apiUsersVerifyEmailPost(
      data
    );
    return Promise.resolve(response.data);
  } catch (e: any) {
    defaultErrorHandler(e.response?.data);
    return Promise.reject(e.response?.data);
  }
}

const resendEmailVerificationLink = async (
  data: ApiUsersResendVerificationEmailPostRequest
  ) => {
  try {
    const response = await usersApi.apiUsersResendVerificationEmailPost(
      data
    );
    return Promise.resolve(response.data);
  } catch (e: any) {
    defaultErrorHandler(e.response?.data);
    return Promise.reject(e.response?.data);
  }
}

export default {
  getMe,
  addAdmin,
  getUserById,
  updateMe,
  getAll,
  update,
  deleteUser,
  forgotPasswordRequest,
  forgotPasswordVerifyCode,
  forgotPasswordResetPassword,
  verifyEmail,
  resendEmailVerificationLink
};