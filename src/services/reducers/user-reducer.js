import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,

    GET_REGISTRATION_REQUEST,
    GET_REGISTRATION_SUCCESS,
    GET_REGISTRATION_FAILED,
    IS_AUTH_CHECKED,
    SET_USER,

    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,

    SAVE_PASSWORD_FAILED,
    SAVE_PASSWORD_REQUEST,
    SAVE_PASSWORD_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS, GET_USER_FAILED,

} from "../actions/user-action";

const initialState = {
    isAuthChecked: false,

    user: null,

    accessToken: '',
    refreshToken: '',

    getRegistrationRequest: false,
    getRegistrationSuccess: false,
    getRegistrationFailed: false,

    getUserRequest: false,
    getUserSuccess: false,
    getUserFailed: false,

    userUpdateRequest: false,
    userUpdateSuccess: false,
    userUpdateFailed: false,

    resetPasswordRequest: false,
    resetPasswordSuccess: false,
    resetPasswordFailed: false,

    save_password_failed: false,
    save_password_request: false,
    save_password_success: false,

    loginRequest: false,
    loginSuccess: false,
    loginFailed: false,

    logoutRequest: false,
    logoutSuccess: false,
    logoutFailed: false,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: action.isAuthChecked
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case GET_REGISTRATION_REQUEST:
            return {
                ...state,
                getRegistrationSuccess: true
            };
        case GET_REGISTRATION_SUCCESS:
            return {
                ...state,
                getRegistrationFailed: false,
                getRegistrationRequest: false,
                getRegistrationSuccess: true,
                user: {
                    password: '',
                    ...action.user
                },
                refreshToken: action.refreshToken,
                accessToken: action.accessToken,
            };
        case GET_REGISTRATION_FAILED:
            return {
                ...state,
                getRegistrationRequest: false,
                getRegistrationFailed: true
            };
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetPasswordRequest: true
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordFailed: false,
                resetPasswordRequest: false,
                resetPasswordSuccess: true
            }
        case RESET_PASSWORD_FAILED:
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordFailed: true
            }

        case SAVE_PASSWORD_FAILED:
            return {
                ...state,
                save_password_failed: true,
                save_password_request: false,
            }
        case SAVE_PASSWORD_REQUEST:
            return {
                ...state,
                save_password_request: true,
                save_password_failed: false
            }
        case SAVE_PASSWORD_SUCCESS:
            return {
                ...state,
                save_password_request: false,
                save_password_failed: false,
                save_password_success: true
            }

        case GET_USER_REQUEST:
            return {
                ...state,
                getUserRequest:true,
            }
        case GET_USER_SUCCESS:
            return {
               ...state,
                getUserRequest: false,
                getUserSuccess: true,
                user: action.user
            }
        case GET_USER_FAILED:
            return {
                ...state,
                getUserRequest: false,
                getUserFailed: true,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loginRequest: true,
                loginFailed: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loginRequest: false,
                loginFailed: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginRequest: false,
                loginFailed: true
            };

        case LOGOUT_REQUEST:
            return {...state, };
        case LOGOUT_SUCCESS:
            return {...state, };
        case LOGOUT_FAILED:
            return {...state, };

        default:
            return state;
    }
}
