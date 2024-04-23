import {
    forgotPasswordRequest,
    getUserRequest,
    loginRequest,
    logoutRequest, refreshTokenRequest,
    registrationRequest,
    savePasswordRequest, TRegistrationForm, TSavePasswordData, updateUserRequest
} from "../../utils/api";

import {
    GET_REGISTRATION_FAILED,
    GET_REGISTRATION_REQUEST,
    GET_REGISTRATION_SUCCESS,
    GET_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    IS_AUTH_CHECKED,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_FAILED,
    LOGOUT_REQUEST, LOGOUT_SUCCESS,
    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    SAVE_PASSWORD_FAILED,
    SAVE_PASSWORD_REQUEST,
    SAVE_PASSWORD_SUCCESS,
    SET_USER,
    USER_UPDATE_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS
} from "../constants";
import {deleteCookie, getCookie, setCookie} from "../../utils/utils";
import {UnknownAction} from "redux";
import {IUserData} from "../../components/profile-data/profile-data";



export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST,
}
export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS,
}
export interface ILoginFailedAction {
    readonly type: typeof LOGIN_FAILED,
}
export interface ISetUserAction {
    readonly type: typeof SET_USER,
    user:IUserData | null
}
export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS,
    user: IUserData
}
export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED
}
export interface IAuthCheckedAction {
    readonly type: typeof IS_AUTH_CHECKED,
    isAuthChecked: boolean
}
export interface IUserUpdateRequestAction {
    readonly type: typeof USER_UPDATE_REQUEST,
}
export interface IUserUpdateSuccessAction {
    readonly type: typeof USER_UPDATE_SUCCESS,
    user: IUserData
}
export interface IUserUpdateFailedAction {
    readonly type: typeof USER_UPDATE_FAILED,
}
export interface IGetRegistrationRequestAction {
    readonly type: typeof GET_REGISTRATION_REQUEST,
}
export interface IGetRegistrationSuccessAction {
    readonly type: typeof GET_REGISTRATION_SUCCESS,
    user:IUserData,
    refreshToken:string,
    authToken:string
}
export interface IGetRegistrationFailedAction {
    readonly type: typeof GET_REGISTRATION_FAILED,
}
export interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST,
}
export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS,
}
export interface ILogoutFailedAction {
    readonly type: typeof LOGOUT_FAILED,
}
export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST,
}
export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS,
}
export interface IResetPasswordFailedAction {
    readonly type: typeof RESET_PASSWORD_FAILED,
}
export interface ISavePasswordRequestAction {
    readonly type: typeof SAVE_PASSWORD_REQUEST,
}
export interface ISavePasswordSuccessAction {
    readonly type: typeof SAVE_PASSWORD_SUCCESS,
}
export interface ISavePasswordFailedAction {
    readonly type: typeof SAVE_PASSWORD_FAILED,
}
export interface ILoginData {
    email:string,
    password: string
}

export type TUserActions =
    ILoginRequestAction |
    ILoginSuccessAction |
    ILoginFailedAction |
    ISetUserAction |
    IGetUserRequestAction |
    IGetUserSuccessAction |
    IGetUserFailedAction |
    IAuthCheckedAction |
    IUserUpdateRequestAction |
    IUserUpdateSuccessAction |
    IUserUpdateFailedAction |
    IGetRegistrationRequestAction |
    IGetRegistrationSuccessAction |
    IGetRegistrationFailedAction |
    ILogoutRequestAction |
    ILogoutSuccessAction |
    ILogoutFailedAction |
    IResetPasswordRequestAction |
    IResetPasswordSuccessAction |
    IResetPasswordFailedAction |
    ISavePasswordRequestAction |
    ISavePasswordSuccessAction |
    ISavePasswordFailedAction

export const loginRequestAction = (): ILoginRequestAction & UnknownAction => ({
    type: LOGIN_REQUEST
})

export const loginSuccessAction = (): ILoginSuccessAction & UnknownAction => ({
    type: LOGIN_SUCCESS
})

export const loginFailedAction = (): ILoginFailedAction & UnknownAction => ({
    type: LOGIN_FAILED
})


export const setUserAction = (user: IUserData | null): ISetUserAction & UnknownAction => ({
        type: SET_USER,
        user
})


export const getUserRequestAction = (): IGetUserRequestAction & UnknownAction => ({
    type: GET_USER_REQUEST,
})


export const getUserSuccessAction = (user: IUserData): IGetUserSuccessAction & UnknownAction => ({
    type: GET_USER_SUCCESS,
    user
})


export const getUserFailedAction = (): IGetUserFailedAction & UnknownAction => ({
    type: GET_USER_FAILED
})



export const authCheckedAction = (isAuthChecked: boolean): IAuthCheckedAction & UnknownAction => ({
    type: IS_AUTH_CHECKED,
    isAuthChecked
})


export const userUpdateRequestAction = (): IUserUpdateRequestAction & UnknownAction => ({
    type: USER_UPDATE_REQUEST
})



export const userUpdateSuccessAction = (user: IUserData): IUserUpdateSuccessAction & UnknownAction => ({
    type: USER_UPDATE_SUCCESS,
    user
})

export const userUpdateFailedAction = (): IUserUpdateFailedAction & UnknownAction => ({
    type: USER_UPDATE_FAILED
})



export const getRegistrationRequestAction = (): IGetRegistrationRequestAction & UnknownAction => ({
    type: GET_REGISTRATION_REQUEST
})

export const getRegistrationSuccessAction = (user:IUserData, refreshToken:string, authToken:string):IGetRegistrationSuccessAction & UnknownAction => ({
    type: GET_REGISTRATION_SUCCESS,
    user,
    refreshToken,
    authToken
})


export const getRegistrationFailedAction = (): IGetRegistrationFailedAction & UnknownAction => ({
    type: GET_REGISTRATION_FAILED
})



export const logoutRequestAction = (): ILogoutRequestAction => ({type: LOGOUT_REQUEST})
export const logoutSuccessAction = (): ILogoutSuccessAction => ({type: LOGOUT_SUCCESS})
export const logoutFailedAction = (): ILogoutFailedAction => ({type: LOGOUT_FAILED})



export const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({type: RESET_PASSWORD_REQUEST})
export const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({type: RESET_PASSWORD_SUCCESS})
export const resetPasswordFailedAction = (): IResetPasswordFailedAction => ({type: RESET_PASSWORD_FAILED})



export const savePasswordRequestAction = (): ISavePasswordRequestAction => ({type: SAVE_PASSWORD_REQUEST})
export const savePasswordSuccessAction = (): ISavePasswordSuccessAction => ({type: SAVE_PASSWORD_SUCCESS})
export const savePasswordFailedAction = (): ISavePasswordFailedAction => ({type: SAVE_PASSWORD_FAILED})



export const login = ({email, password}: ILoginData) => {
    return function (dispatch:any) {
        dispatch(loginRequestAction())
        loginRequest({email, password})
            .then((res: any) => {
                dispatch(loginSuccessAction())
                const authToken = res.accessToken.split('Bearer ')[1];
                const refreshToken = res.refreshToken
                setCookie("accessToken", authToken, {expires: 20});
                window.localStorage.setItem('refreshToken', refreshToken);
                dispatch(setUserAction(res.user))
            }).catch(error => {
                dispatch(loginFailedAction())
                console.log(error)
            })
    }
}
export const getUser = () => {
    return async function (dispatch:any) {
        if (getCookie("accessToken")) {
            dispatch(getUserRequestAction());
            return await getUserRequest()
                .then((res:any) => {
                    dispatch(getUserSuccessAction(res?.user))
                }).catch(error => {
                    dispatch(getUserFailedAction())
                    console.log(error)
                })
        }
    }
}

export const checkUserAuth = () => {
    return function (dispatch:any) {
        if (localStorage.getItem("refreshToken")) {
            dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem("refreshToken")
                    deleteCookie("accessToken")
                    dispatch(setUserAction(null))
                }).finally(() => {
                    dispatch(authCheckedAction(true))
                })
        } else {
            dispatch(authCheckedAction(true))
        }
    }
}

export const updateUser = (userData: IUserData) => {
    return function (dispatch:any) {
        dispatch(userUpdateRequestAction())
        updateUserRequest(userData).then((res:any) => {
            dispatch(userUpdateSuccessAction(res.user))
        }).catch(error=>{
            console.log(error)
            dispatch(userUpdateFailedAction())
        })
    }
}

export const registration = (form: TRegistrationForm) => {
    return function (dispatch: any) {
        registrationRequest(form)
            .then((res:any) => {
                dispatch(getRegistrationRequestAction());
                if (!res) {
                    dispatch(getRegistrationFailedAction());
                } else {
                    const {user, accessToken, refreshToken} = res;
                    const authToken = accessToken.split('Bearer ')[1];
                    dispatch(getRegistrationSuccessAction(user, refreshToken, authToken));
                    setCookie("accessToken", authToken, {expires: 20});
                    window.localStorage.setItem('refreshToken', refreshToken);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const refreshToken = () => {
    return function (dispatch:any) {
        refreshTokenRequest()
            .then((res:any) => {
                const {accessToken, refreshToken} = res;
                const authToken = accessToken.split('Bearer ')[1];
                setCookie("accessToken", authToken, {expires: 20});
                window.localStorage.setItem('refreshToken', refreshToken);
            })
    }
}
export const logout = () => {
    return function (dispatch:any) {
        dispatch(logoutRequestAction())
        logoutRequest()
            .then(() => {
                dispatch(logoutSuccessAction())
                localStorage.removeItem('refreshToken')
                deleteCookie('accessToken')
                dispatch(setUserAction(null))
            })
            .catch(error => {
                dispatch(logoutFailedAction())
                console.log(error)
            })
    }
}


export const forgotPassword = (email:string) => {
    return function (dispatch:any) {
        dispatch(resetPasswordRequestAction())
        forgotPasswordRequest(email)
            .then(() => {
                dispatch(resetPasswordSuccessAction())
            })
            .catch(error => {
                dispatch(resetPasswordFailedAction())
                console.log(error)
            })
    }
}



export const savePassword = (data:TSavePasswordData) => {
    return function (dispatch:any) {
        dispatch(savePasswordRequestAction())
        savePasswordRequest(data)
            .then(res => {
                dispatch(savePasswordSuccessAction())
            })
            .catch(error => {
                dispatch(savePasswordFailedAction())
                console.log(error)
            })

    }
}
