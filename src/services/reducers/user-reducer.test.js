import * as types from '../constants/user';
import {userReducer} from "./user-reducer";

describe('userReducer', () => {
    it('should return the initial state', () => {
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
        expect(userReducer(undefined, {})).toEqual(
            initialState
        );
    })

    it('should have handle IS_AUTH_CHECKED', () => {
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
        expect(userReducer(undefined, {
            type: types.IS_AUTH_CHECKED,
            isAuthChecked: true,
        })).toEqual({
            ...initialState,
            isAuthChecked: true,
        });
    })
    it('should have handle SET_USER', () => {
        const user  = {
            password: '',
            email: '',
            name: ''
        }
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
        expect(userReducer(undefined, {
            type: types.SET_USER,
            user
        })).toEqual({
            ...initialState,
            user
        });
    })
    it('should have handle GET_REGISTRATION_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.GET_REGISTRATION_REQUEST
        })).toEqual({
            ...initialState,
            getRegistrationRequest: true,
        });
    })
    it('should have handle GET_REGISTRATION_SUCCESS', () => {
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
        expect(userReducer(undefined, {
            type: types.GET_REGISTRATION_SUCCESS,
            user: {
                password: '',
                email: "",
                name: "",
            },
            refreshToken: "",
            authToken: "",
        })).toEqual({
            ...initialState,
            getRegistrationFailed: false,
            getRegistrationRequest: false,
            getRegistrationSuccess: true,
            user: {
                password: '',
                email: "",
                name: "",
            },
            refreshToken: "",
            accessToken: "",
        });
    })
    it('should have handle GET_REGISTRATION_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.GET_REGISTRATION_FAILED,
        })).toEqual({
            ...initialState,
            getRegistrationRequest: false,
            getRegistrationFailed: true
        });
    })
    it('should have handle RESET_PASSWORD_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.RESET_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            resetPasswordRequest: true
        });
    })
    it('should have handle RESET_PASSWORD_SUCCESS', () => {
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
        expect(userReducer(undefined, {
            type: types.RESET_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            resetPasswordFailed: false,
            resetPasswordRequest: false,
            resetPasswordSuccess: true
        });
    })
    it('should have handle RESET_PASSWORD_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.RESET_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            resetPasswordRequest: false,
            resetPasswordFailed: true
        });
    })
    it('should have handle SAVE_PASSWORD_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.SAVE_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            save_password_failed: true,
            save_password_request: false,
        });
    })
    it('should have handle SAVE_PASSWORD_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.SAVE_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            save_password_request: true,
            save_password_failed: false
        });
    })
    it('should have handle SAVE_PASSWORD_SUCCESS', () => {
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
        expect(userReducer(undefined, {
            type: types.SAVE_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            save_password_request: false,
            save_password_failed: false,
            save_password_success: true
        });
    })
    it('should have handle GET_USER_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.GET_USER_REQUEST
        })).toEqual({
            ...initialState,
            getUserRequest:true,
        });
    })
    it('should have handle GET_USER_SUCCESS', () => {
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
        const user= {
                password: '',
                email: "",
                name: "",
            }
        expect(userReducer(undefined, {
            type: types.GET_USER_SUCCESS,
            user
        })).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserSuccess: true,
            user
        });
    })
    it('should have handle GET_USER_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.GET_USER_FAILED
        })).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserFailed: true,
        });
    })
    it('should have handle LOGIN_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGIN_REQUEST
        })).toEqual({
            ...initialState,
            loginRequest: true,
            loginFailed: false
        });
    })
    it('should have handle LOGIN_SUCCESS', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGIN_SUCCESS
        })).toEqual({
            ...initialState,
            loginSuccess: true,
            loginRequest: false,
            loginFailed: false
        });
    })
    it('should have handle LOGIN_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGIN_FAILED
        })).toEqual({
            ...initialState,
            loginRequest: false,
            loginFailed: true
        });
    })
    it('should have handle LOGOUT_REQUEST', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGOUT_REQUEST
        })).toEqual({
            ...initialState,
            logoutRequest: true
        });
    })
    it('should have handle LOGOUT_SUCCESS', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGOUT_SUCCESS
        })).toEqual({
            ...initialState,
            logoutSuccess: true,
            logoutRequest: false
        });
    })
    it('should have handle LOGOUT_FAILED', () => {
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
        expect(userReducer(undefined, {
            type: types.LOGOUT_FAILED
        })).toEqual({
            ...initialState,
            logoutRequest: false,
            logoutFailed: true
        });
    })
})
