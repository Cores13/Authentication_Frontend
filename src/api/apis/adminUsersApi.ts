/* tslint:disable */
/* eslint-disable */
/**
 * Takeda API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from '../configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ForgotPasswordRequestDto, ForgotPasswordResetDto, ForgotPasswordVerifyCodeDto, LoginRequestDto, RefreshTokenRequestDto, TokenResponseDto, UpdateMePasswordRequestDto, UserResponseDto, UserResponseDtoPagedResponse, UserRoleEnum, UsersApiApiUsersForgotPasswordRequestPostRequest, UsersApiApiUsersForgotPasswordResetPasswordPostRequest, UsersApiApiUsersForgotPasswordVerifyCodePostRequest, UsersApiApiUsersIdGetRequest, UsersApiApiUsersMeChangePasswordPutRequest, UsersApiApiUsersMePutRequest } from '../api';

/**
 * AdminUsersApi - axios parameter creator
 * @export
 */
export const AdminUsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [includes] 
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {number} [fromId] 
         * @param {string} [updatedAfter] 
         * @param {string} [orderByKey] 
         * @param {boolean} [isDescending] 
         * @param {boolean} [isFullSize] 
         * @param {string} [query] 
         * @param {string} [filter] 
         * @param {TypeEnum} [type] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersGet: async (includes?: string, pageSize?: number, page?: number, fromId?: number, updatedAfter?: string, orderByKey?: string, isDescending?: boolean, isFullSize?: boolean, query?: string, filter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['Includes'] = includes;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (fromId !== undefined) {
                localVarQueryParameter['FromId'] = fromId;
            }

            if (updatedAfter !== undefined) {
                localVarQueryParameter['UpdatedAfter'] = (updatedAfter as any instanceof Date) ?
                    (updatedAfter as any).toISOString() :
                    updatedAfter;
            }

            if (orderByKey !== undefined) {
                localVarQueryParameter['OrderByKey'] = orderByKey;
            }

            if (isDescending !== undefined) {
                localVarQueryParameter['IsDescending'] = isDescending;
            }

            if (isFullSize !== undefined) {
                localVarQueryParameter['IsFullSize'] = isFullSize;
            }

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }

            if (filter !== undefined) {
                localVarQueryParameter['Filter'] = filter;
            }

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiAdminUsersIdDelete', 'id', id)
            const localVarPath = `/api/admin/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiAdminUsersIdGet', 'id', id)
            const localVarPath = `/api/users/getone/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {UserRoleEnum} [role] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersNewAdminPost: async (id?: number, name?: string, email?: string, password?: string, role?: UserRoleEnum, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (id !== undefined) { 
                localVarFormParams.append('Id', id as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('Name', name as any);
            }
    
            if (email !== undefined) { 
                localVarFormParams.append('Email', email as any);
            }
    
            if (password !== undefined) { 
                localVarFormParams.append('Password', password as any);
            }

            if (role !== undefined) { 
                localVarFormParams.append('Role', role as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersPost: async (id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (id !== undefined) { 
                localVarFormParams.append('Id', id as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('Name', name as any);
            }
    
            if (phoneNumber !== undefined) { 
                localVarFormParams.append('PhoneNumber', phoneNumber as any);
            }
    
            if (specialisation !== undefined) { 
                localVarFormParams.append('Specialisation', specialisation as any);
            }
    
            if (title !== undefined) { 
                localVarFormParams.append('Title', title as any);
            }
    
            if (email !== undefined) { 
                localVarFormParams.append('Email', email as any);
            }
    
            if (approved !== undefined) { 
                localVarFormParams.append('Approved', approved as any);
            }
    
            if (role !== undefined) { 
                localVarFormParams.append('Role', new Blob([JSON.stringify(role)], { type: "application/json", }));
            }
    
            if (password !== undefined) { 
                localVarFormParams.append('Password', password as any);
            }
    
            if (profileImage !== undefined) { 
                localVarFormParams.append('ProfileImage', profileImage as any);
            }
    
            if (categories !== undefined) { 
                localVarFormParams.append('Categories', categories as any);
            }
    
            if (adminAccessMedCenter !== undefined) { 
                localVarFormParams.append('AdminAccessMedCenter', adminAccessMedCenter as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersPut: async (id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (id !== undefined) { 
                localVarFormParams.append('Id', id as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('Name', name as any);
            }
    
            if (phoneNumber !== undefined) { 
                localVarFormParams.append('PhoneNumber', phoneNumber as any);
            }
    
            if (specialisation !== undefined) { 
                localVarFormParams.append('Specialisation', specialisation as any);
            }
    
            if (title !== undefined) { 
                localVarFormParams.append('Title', title as any);
            }
    
            if (email !== undefined) { 
                localVarFormParams.append('Email', email as any);
            }
    
            if (approved !== undefined) { 
                localVarFormParams.append('Approved', approved as any);
            }
    
            if (role !== undefined) { 
                localVarFormParams.append('Role', new Blob([JSON.stringify(role)], { type: "application/json", }));
            }
    
            if (password !== undefined) { 
                localVarFormParams.append('Password', password as any);
            }
    
            if (profileImage !== undefined) { 
                localVarFormParams.append('ProfileImage', profileImage as any);
            }
    
            if (categories !== undefined) { 
                localVarFormParams.append('Categories', categories as any);
            }
    
            if (adminAccessMedCenter !== undefined) { 
                localVarFormParams.append('AdminAccessMedCenter', adminAccessMedCenter as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminUsersApi - functional programming interface
 * @export
 */
export const AdminUsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminUsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [includes] 
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {number} [fromId] 
         * @param {string} [updatedAfter] 
         * @param {string} [orderByKey] 
         * @param {boolean} [isDescending] 
         * @param {boolean} [isFullSize] 
         * @param {string} [query] 
         * @param {string} [filter] 
         * @param {TypeEnum} [type] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersGet(includes?: string, pageSize?: number, page?: number, fromId?: number, updatedAfter?: string, orderByKey?: string, isDescending?: boolean, isFullSize?: boolean, query?: string, filter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseDtoPagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersGet(includes, pageSize, page, fromId, updatedAfter, orderByKey, isDescending, isFullSize, query, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {UserRoleEnum} [role] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersNewAdminPost(id?: number, name?: string, email?: string, password?: string, role?: UserRoleEnum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersNewAdminPost(id, name, email, password, role, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersPost(id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersPost(id, name, phoneNumber, specialisation, title, email, approved, role, password, profileImage, categories, adminAccessMedCenter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAdminUsersPut(id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiAdminUsersPut(id, name, phoneNumber, specialisation, title, email, approved, role, password, profileImage, categories, adminAccessMedCenter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminUsersApi - factory interface
 * @export
 */
export const AdminUsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminUsersApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [includes] 
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {number} [fromId] 
         * @param {string} [updatedAfter] 
         * @param {string} [orderByKey] 
         * @param {boolean} [isDescending] 
         * @param {boolean} [isFullSize] 
         * @param {string} [query] 
         * @param {string} [filter] 
         * @param {TypeEnum} [type] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersGet(includes?: string, pageSize?: number, page?: number, fromId?: number, updatedAfter?: string, orderByKey?: string, isDescending?: boolean, isFullSize?: boolean, query?: string, filter?: string, options?: any): AxiosPromise<UserResponseDtoPagedResponse> {
            return localVarFp.apiAdminUsersGet(includes, pageSize, page, fromId, updatedAfter, orderByKey, isDescending, isFullSize, query, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiAdminUsersIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersIdGet(id: number, options?: any): AxiosPromise<UserResponseDto> {
            return localVarFp.apiAdminUsersIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {UserRoleEnum} [role] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersNewAdminPost(id?: number, name?: string, email?: string, password?: string, role?: UserRoleEnum, options?: any): AxiosPromise<UserResponseDto> {
            return localVarFp.apiAdminUsersNewAdminPost(id, name, email, password, role, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersPost(id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options?: any): AxiosPromise<UserResponseDto> {
            return localVarFp.apiAdminUsersPost(id, name, phoneNumber, specialisation, title, email, approved, role, password, profileImage, categories, adminAccessMedCenter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [id] 
         * @param {string} [name] 
         * @param {string} [phoneNumber] 
         * @param {string} [specialisation] 
         * @param {string} [title] 
         * @param {string} [email] 
         * @param {boolean} [approved] 
         * @param {UserRoleEnum} [role] 
         * @param {string} [password] 
         * @param {any} [profileImage] 
         * @param {string} [categories] 
         * @param {boolean} [adminAccessMedCenter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAdminUsersPut(id?: number, name?: string, phoneNumber?: string, specialisation?: string, title?: string, email?: string, approved?: boolean, role?: UserRoleEnum, password?: string, profileImage?: any, categories?: string, adminAccessMedCenter?: boolean, options?: any): AxiosPromise<UserResponseDto> {
            return localVarFp.apiAdminUsersPut(id, name, phoneNumber, specialisation, title, email, approved, role, password, profileImage, categories, adminAccessMedCenter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apiAdminUsersGet operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersGetRequest
 */
export interface AdminUsersApiApiAdminUsersGetRequest {
    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly includes?: string

    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly pageSize?: number

    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly fromId?: number

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly updatedAfter?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly orderByKey?: string

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly isDescending?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly isFullSize?: boolean

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly query?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersGet
     */
    readonly filter?: string
}

/**
 * Request parameters for apiAdminUsersIdDelete operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersIdDeleteRequest
 */
export interface AdminUsersApiApiAdminUsersIdDeleteRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersIdDelete
     */
    readonly id: number
}

/**
 * Request parameters for apiAdminUsersIdGet operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersIdGetRequest
 */
export interface AdminUsersApiApiAdminUsersIdGetRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersIdGet
     */
    readonly id: number
}

/**
 * Request parameters for apiAdminUsersIdRejectPost operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersIdRejectPostRequest
 */
export interface AdminUsersApiApiAdminUsersIdRejectPostRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersIdRejectPost
     */
    readonly id: number
}

/**
 * Request parameters for apiAdminUsersNewAdminPost operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersNewAdminPostRequest
 */
export interface AdminUsersApiApiAdminUsersNewAdminPostRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersNewAdminPost
     */
    readonly id?: number

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersNewAdminPost
     */
    readonly name?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersNewAdminPost
     */
    readonly email?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersNewAdminPost
     */
    readonly password?: string

    /**
     * 
     * @type {UserRoleEnum}
     * @memberof AdminUsersApiApiAdminUsersNewAdminPost
     */
    readonly role?: UserRoleEnum
}

/**
 * Request parameters for apiAdminUsersPost operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersPostRequest
 */
export interface AdminUsersApiApiAdminUsersPostRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly id?: number

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly name?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly phoneNumber?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly specialisation?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly title?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly email?: string

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly approved?: boolean

    /**
     * 
     * @type {UserRoleEnum}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly role?: UserRoleEnum

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly password?: string

    /**
     * 
     * @type {any}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly profileImage?: any

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly categories?: string

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersPost
     */
    readonly adminAccessMedCenter?: boolean
}

/**
 * Request parameters for apiAdminUsersPut operation in AdminUsersApi.
 * @export
 * @interface AdminUsersApiApiAdminUsersPutRequest
 */
export interface AdminUsersApiApiAdminUsersPutRequest {
    /**
     * 
     * @type {number}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly id?: number

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly name?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly phoneNumber?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly specialisation?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly title?: string

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly email?: string

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly approved?: boolean

    /**
     * 
     * @type {UserRoleEnum}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly role?: UserRoleEnum

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly password?: string

    /**
     * 
     * @type {any}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly profileImage?: any

    /**
     * 
     * @type {string}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly categories?: string

    /**
     * 
     * @type {boolean}
     * @memberof AdminUsersApiApiAdminUsersPut
     */
    readonly adminAccessMedCenter?: boolean
}

/**
 * AdminUsersApi - object-oriented interface
 * @export
 * @class AdminUsersApi
 * @extends {BaseAPI}
 */
export class AdminUsersApi extends BaseAPI {
    /**
     * 
     * @param {AdminUsersApiApiAdminUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersGet(requestParameters: AdminUsersApiApiAdminUsersGetRequest = {}, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersGet(requestParameters.includes, requestParameters.pageSize, requestParameters.page, requestParameters.fromId, requestParameters.updatedAfter, requestParameters.orderByKey, requestParameters.isDescending, requestParameters.isFullSize, requestParameters.query, requestParameters.filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AdminUsersApiApiAdminUsersIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersIdDelete(requestParameters: AdminUsersApiApiAdminUsersIdDeleteRequest, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersIdDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AdminUsersApiApiAdminUsersIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersIdGet(requestParameters: AdminUsersApiApiAdminUsersIdGetRequest, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AdminUsersApiApiAdminUsersNewAdminPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersNewAdminPost(requestParameters: AdminUsersApiApiAdminUsersNewAdminPostRequest = {}, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersNewAdminPost(requestParameters.id, requestParameters.name, requestParameters.email, requestParameters.password, requestParameters.role, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AdminUsersApiApiAdminUsersPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersPost(requestParameters: AdminUsersApiApiAdminUsersPostRequest = {}, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersPost(requestParameters.id, requestParameters.name, requestParameters.phoneNumber, requestParameters.specialisation, requestParameters.title, requestParameters.email, requestParameters.approved, requestParameters.role, requestParameters.password, requestParameters.profileImage, requestParameters.categories, requestParameters.adminAccessMedCenter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AdminUsersApiApiAdminUsersPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public apiAdminUsersPut(requestParameters: AdminUsersApiApiAdminUsersPutRequest = {}, options?: any) {
        return AdminUsersApiFp(this.configuration).apiAdminUsersPut(requestParameters.id, requestParameters.name, requestParameters.phoneNumber, requestParameters.specialisation, requestParameters.title, requestParameters.email, requestParameters.approved, requestParameters.role, requestParameters.password, requestParameters.profileImage, requestParameters.categories, requestParameters.adminAccessMedCenter, options).then((request) => request(this.axios, this.basePath));
    }
}