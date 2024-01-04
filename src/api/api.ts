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


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @enum {string}
 */
export enum ErrorCode {
    UserNotFound = 0,
    EmailInUse = 1,
    IdPresentInCreate = 2,
    InvalidEmailOrPassword = 3,
    ActionForbidden = 4,
    NotFound = 5,
    PropertyNotFound = 6,
    CantReauthenticate = 7,
    PhoneNumberNotVerified = 8,
    PhoneNumberAlreadyVerified = 9,
    PhoneNumberAlreadyInUse = 10,
    PhoneNumberFormatInvalid = 11,
    InvalidOrExpiredCode = 12,
    PasswordConfirmationNotSame = 13,
    SyncRequestAlreadyExists = 14,
    AlertNotFound = 15,
    EmailNotVerified = 16,
    PromotionNotFound = 17,
    GeofenceNotFound = 18,
    CodeResendTimeout = 19,
    ChatNotFound = 20,
    PromotionsNotFound = 21,
    BrandImageNotFound = 22,
    BrandImageIsActive = 23,
    UserNotVerified = 24,
    ValidationErrors = 10000,
    Required = 10001,
    NotValidEmailAddress = 10002,
    MinLength = 10003,
    MaxLength = 10004,
    Length = 10005,
    GreaterThanOrEqual = 10006,
    GreaterThan = 10007,
    LessThanOrEqual = 10008,
    LessThan = 10009,
    NotEqual = 10010,
    Predicate = 10011,
    Regex = 10012,
    Equal = 10013,
    ExactLength = 10014,
    Between = 10015,
    Empty = 10016,
    Invalid = 10017
}

/**
 * 
 * @export
 * @interface ErrorResponseDto
 */
export interface ErrorResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponseDto
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponseDto
     */
    messageCode?: number | null;
    /**
     * 
     * @type {HttpStatusCode}
     * @memberof ErrorResponseDto
     */
    code?: HttpStatusCode;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponseDto
     */
    stacktrace?: string | null;
    /**
     * 
     * @type {Array<ValidationFieldErrorDto>}
     * @memberof ErrorResponseDto
     */
    errors?: Array<ValidationFieldErrorDto> | null;
}
/**
 * 
 * @export
 * @interface FileResponseDto
 */
export interface FileResponseDto {
    /**
     * 
     * @type {number}
     * @memberof FileResponseDto
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FileResponseDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FileResponseDto
     */
    url?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FileResponseDto
     */
    newsId?: number | null;
    /**
     * 
     * @type {FileType}
     * @memberof FileResponseDto
     */
    type?: FileType;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum FileType {
    Full = 0,
    Preview = 1
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum HttpStatusCode {
    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102,
    EarlyHints = 103,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultiStatus = 207,
    AlreadyReported = 208,
    IMUsed = 226,
    MultipleChoices = 300,
    Ambiguous = 301,
    MovedPermanently = 302,
    Moved = 303,
    Found = 304,
    Redirect = 305,
    SeeOther = 306,
    RedirectMethod = 307,
    NotModified = 308,
    UseProxy = 400,
    Unused = 401,
    TemporaryRedirect = 402,
    RedirectKeepVerb = 403,
    PermanentRedirect = 404,
    BadRequest = 405,
    Unauthorized = 406,
    PaymentRequired = 407,
    Forbidden = 408,
    NotFound = 409,
    MethodNotAllowed = 410,
    NotAcceptable = 411,
    ProxyAuthenticationRequired = 412,
    RequestTimeout = 413,
    Conflict = 414,
    Gone = 415,
    LengthRequired = 416,
    PreconditionFailed = 417,
    RequestEntityTooLarge = 421,
    RequestUriTooLong = 422,
    UnsupportedMediaType = 423,
    RequestedRangeNotSatisfiable = 424,
    ExpectationFailed = 426,
    MisdirectedRequest = 428,
    UnprocessableEntity = 429,
    Locked = 431,
    FailedDependency = 451,
    UpgradeRequired = 500,
    PreconditionRequired = 501,
    TooManyRequests = 502,
    RequestHeaderFieldsTooLarge = 503,
    UnavailableForLegalReasons = 504,
    InternalServerError = 505,
    NotImplemented = 506,
    BadGateway = 507,
    ServiceUnavailable = 508,
    GatewayTimeout = 510,
    HttpVersionNotSupported = 511
}

/**
 * 
 * @export
 * @interface LoginRequestDto
 */
export interface LoginRequestDto {
    /**
     * 
     * @type {string}
     * @memberof LoginRequestDto
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginRequestDto
     */
    password?: string | null;
}
/**
 * 
 * @export
 * @interface RefreshTokenRequestDto
 */
export interface RefreshTokenRequestDto {
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenRequestDto
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenRequestDto
     */
    refreshToken?: string | null;
}
/**
 * 
 * @export
 * @interface TimeSpan
 */
export interface TimeSpan {
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    ticks?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    days?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    hours?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    milliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    minutes?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    seconds?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    totalDays?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    totalHours?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    totalMilliseconds?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    totalMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSpan
     */
    totalSeconds?: number;
}
/**
 * 
 * @export
 * @interface TokenResponseDto
 */
export interface TokenResponseDto {
    /**
     * 
     * @type {string}
     * @memberof TokenResponseDto
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TokenResponseDto
     */
    refreshToken?: string | null;
}

/**
 * 
 * @export
 * @interface ChangePasswordRequestDto
 */
export interface ChangePasswordRequestDto {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequestDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequestDto
     */
    passwordConfirmation?: string | null;
}
/**
 * 
 * @export
 * @interface UserResponseDto
 */
export interface UserResponseDto {
    /**
     * 
     * @type {number}
     * @memberof UserResponseDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserResponseDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponseDto
     */
    email?: string | null;
    /**
     * 
     * @type {UserRoleEnum}
     * @memberof UserResponseDto
     */
    role?: UserRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof UserResponseDto
     */
    createdOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponseDto
     */
    updatedOn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponseDto
     */
    emailVerifiedAt?: string | null;
}
/**
 * 
 * @export
 * @interface UserResponseDtoPagedResponse
 */
export interface UserResponseDtoPagedResponse {
    /**
     * 
     * @type {Array<UserResponseDto>}
     * @memberof UserResponseDtoPagedResponse
     */
    results?: Array<UserResponseDto> | null;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    totalResults?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    totalPages?: number;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum UserRoleEnum {
    SystemAdministrator = 1,
    Administrator = 2,
}

/**
 * 
 * @export
 * @interface ForgotPasswordRequestDto
 */
export interface ForgotPasswordRequestDto {
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordRequestDto
     */
    emailOrPhoneNumber?: string | null;
}

/**
 * 
 * @export
 * @interface ValidationFieldErrorDto
 */
export interface ValidationFieldErrorDto {
    /**
     * 
     * @type {string}
     * @memberof ValidationFieldErrorDto
     */
    field?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidationFieldErrorDto
     */
    error?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ValidationFieldErrorDto
     */
    extra?: any | null;
}

/**
 * Request parameters for apiUsersForgotPasswordRequestPost operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersForgotPasswordRequestPostRequest
 */
export interface UsersApiApiUsersForgotPasswordRequestPostRequest {
    /**
     * 
     * @type {ForgotPasswordRequestDto}
     * @memberof UsersApiApiUsersForgotPasswordRequestPost
     */
    readonly forgotPasswordRequestDto?: ForgotPasswordRequestDto
}

/**
 * 
 * @export
 * @interface UpdateMePasswordRequestDto
 */
export interface UpdateMePasswordRequestDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateMePasswordRequestDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateMePasswordRequestDto
     */
    passwordConfirmation?: string | null;
}

/**
 * 
 * @export
 * @interface ForgotPasswordVerifyCodeDto
 */
export interface ForgotPasswordVerifyCodeDto {
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordVerifyCodeDto
     */
    emailOrPhoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordVerifyCodeDto
     */
    code?: string | null;
}

/**
 * 
 * @export
 * @interface ForgotPasswordResetDto
 */
export interface ForgotPasswordResetDto {
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordResetDto
     */
    emailOrPhoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordResetDto
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForgotPasswordResetDto
     */
    password?: string | null;
}

/**
 * Request parameters for apiUsersForgotPasswordResetPasswordPost operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersForgotPasswordResetPasswordPostRequest
 */
export interface UsersApiApiUsersForgotPasswordResetPasswordPostRequest {
    /**
     * 
     * @type {ForgotPasswordResetDto}
     * @memberof UsersApiApiUsersForgotPasswordResetPasswordPost
     */
    readonly forgotPasswordResetDto?: ForgotPasswordResetDto
}

/**
 * Request parameters for apiUsersForgotPasswordVerifyCodePost operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersForgotPasswordVerifyCodePostRequest
 */
export interface UsersApiApiUsersForgotPasswordVerifyCodePostRequest {
    /**
     * 
     * @type {ForgotPasswordVerifyCodeDto}
     * @memberof UsersApiApiUsersForgotPasswordVerifyCodePost
     */
    readonly forgotPasswordVerifyCodeDto?: ForgotPasswordVerifyCodeDto
}

/**
 * Request parameters for apiUsersIdGet operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersIdGetRequest
 */
export interface UsersApiApiUsersIdGetRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiApiUsersIdGet
     */
    readonly id: number
}

/**
 * Request parameters for apiUsersMeChangePasswordPut operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersMeChangePasswordPutRequest
 */
export interface UsersApiApiUsersMeChangePasswordPutRequest {
    /**
     * 
     * @type {ChangePasswordRequestDto}
     * @memberof UsersApiApiUsersMeChangePasswordPut
     */
    readonly ChangePasswordRequestDto?: ChangePasswordRequestDto
}

/**
 * Request parameters for apiUsersMePut operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersMePutRequest
 */
export interface UsersApiApiUsersMePutRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiApiUsersMePut
     */
    readonly id?: number

    /**
     * 
     * @type {string}
     * @memberof UsersApiApiUsersMePut
     */
    readonly name?: string

    /**
     * 
     * @type {string}
     * @memberof UsersApiApiUsersMePut
     */
    readonly password?: string

    /**
     * 
     * @type {string}
     * @memberof UsersApiApiUsersMePut
     */
    readonly email?: string
}

/**
 * 
 * @export
 * @interface UserResponseDtoPagedResponse
 */
export interface UserResponseDtoPagedResponse {
    /**
     * 
     * @type {Array<UserResponseDto>}
     * @memberof UserResponseDtoPagedResponse
     */
    results?: Array<UserResponseDto> | null;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    totalResults?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof UserResponseDtoPagedResponse
     */
    totalPages?: number;
}