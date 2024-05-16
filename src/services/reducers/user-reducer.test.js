import * as types from '../constants/user';
import {userReducer, initialState} from "./user-reducer";

describe('userReducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(initialState, {})).toEqual({...initialState});
    })

    it('should have handle IS_AUTH_CHECKED', () => {
        expect(userReducer(initialState, {
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
        expect(userReducer(undefined, {
            type: types.SET_USER,
            user
        })).toEqual({
            ...initialState,
            user
        });
    })
    it('should have handle GET_REGISTRATION_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.GET_REGISTRATION_REQUEST
        })).toEqual({
            ...initialState,
            getRegistrationRequest: true,
        });
    })
    it('should have handle GET_REGISTRATION_SUCCESS', () => {
        expect(userReducer(initialState, {
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
        expect(userReducer(initialState, {
            type: types.GET_REGISTRATION_FAILED,
        })).toEqual({
            ...initialState,
            getRegistrationRequest: false,
            getRegistrationFailed: true
        });
    })
    it('should have handle RESET_PASSWORD_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.RESET_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            resetPasswordRequest: true
        });
    })
    it('should have handle RESET_PASSWORD_SUCCESS', () => {
        expect(userReducer(initialState, {
            type: types.RESET_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            resetPasswordFailed: false,
            resetPasswordRequest: false,
            resetPasswordSuccess: true
        });
    })
    it('should have handle RESET_PASSWORD_FAILED', () => {
        expect(userReducer(initialState, {
            type: types.RESET_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            resetPasswordRequest: false,
            resetPasswordFailed: true
        });
    })
    it('should have handle SAVE_PASSWORD_FAILED', () => {
        expect(userReducer(initialState, {
            type: types.SAVE_PASSWORD_FAILED
        })).toEqual({
            ...initialState,
            save_password_failed: true,
            save_password_request: false,
        });
    })
    it('should have handle SAVE_PASSWORD_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.SAVE_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            save_password_request: true,
            save_password_failed: false
        });
    })
    it('should have handle SAVE_PASSWORD_SUCCESS', () => {
        expect(userReducer(initialState, {
            type: types.SAVE_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            save_password_request: false,
            save_password_failed: false,
            save_password_success: true
        });
    })
    it('should have handle GET_USER_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.GET_USER_REQUEST
        })).toEqual({
            ...initialState,
            getUserRequest:true,
        });
    })
    it('should have handle GET_USER_SUCCESS', () => {
        const user= {
                password: '',
                email: "",
                name: "",
            }
        expect(userReducer(initialState, {
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
        expect(userReducer(initialState, {
            type: types.GET_USER_FAILED
        })).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserFailed: true,
        });
    })
    it('should have handle LOGIN_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.LOGIN_REQUEST
        })).toEqual({
            ...initialState,
            loginRequest: true,
            loginFailed: false
        });
    })
    it('should have handle LOGIN_SUCCESS', () => {
        expect(userReducer(initialState, {
            type: types.LOGIN_SUCCESS
        })).toEqual({
            ...initialState,
            loginSuccess: true,
            loginRequest: false,
            loginFailed: false
        });
    })
    it('should have handle LOGIN_FAILED', () => {
        expect(userReducer(initialState, {
            type: types.LOGIN_FAILED
        })).toEqual({
            ...initialState,
            loginRequest: false,
            loginFailed: true
        });
    })
    it('should have handle LOGOUT_REQUEST', () => {
        expect(userReducer(initialState, {
            type: types.LOGOUT_REQUEST
        })).toEqual({
            ...initialState,
            logoutRequest: true
        });
    })
    it('should have handle LOGOUT_SUCCESS', () => {
        expect(userReducer(initialState, {
            type: types.LOGOUT_SUCCESS
        })).toEqual({
            ...initialState,
            logoutSuccess: true,
            logoutRequest: false
        });
    })
    it('should have handle LOGOUT_FAILED', () => {

        expect(userReducer(initialState, {
            type: types.LOGOUT_FAILED
        })).toEqual({
            ...initialState,
            logoutRequest: false,
            logoutFailed: true
        });
    })
})
