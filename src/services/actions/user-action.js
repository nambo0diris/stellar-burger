import {
    forgotPasswordRequest,
    getUserRequest,
    loginRequest,
    logoutRequest,
    registrationRequest,
    savePasswordRequest, updateUserRequest
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

export const loginRequestAction = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccessAction = () => ({
    type: LOGIN_SUCCESS
})

export const loginFailedAction = () => ({
    type: LOGIN_FAILED
})

export const setUserAction = (user) => ({
        type: SET_USER,
        user
})

export const getUserRequestAction = () => ({
    type: GET_USER_REQUEST,
})
export const getUserSuccessAction = (user) => ({
    type: GET_USER_SUCCESS,
    user
})
export const getUserFailedAction = () => ({
    type: GET_USER_FAILED
})
export const authCheckedAction = (isChecked) => ({
    type: IS_AUTH_CHECKED,
    isAuthChecked: isChecked
})

export const userUpdateRequestAction = () => ({
    type: USER_UPDATE_REQUEST
})

export const userUpdateSuccessAction = (user) => ({
    type: USER_UPDATE_SUCCESS,
    user
})

export const userUpdateFailedAction = () => ({
    type: USER_UPDATE_FAILED
})

export const getRegistrationRequestAction = () => ({
    type: GET_REGISTRATION_REQUEST
})
export const getRegistrationSuccessAction = (user, refreshToken, authToken) => ({
    type: GET_REGISTRATION_SUCCESS,
    user,
    refreshToken,
    authToken
})
export const getRegistrationFailedAction = () => ({
    type: GET_REGISTRATION_FAILED
})

export const logoutRequestAction = () => ({type: LOGOUT_REQUEST})
export const logoutSuccessAction = () => ({type: LOGOUT_SUCCESS})
export const logoutFailedAction = () => ({type: LOGOUT_FAILED})

export const resetPasswordRequestAction = () => ({type: RESET_PASSWORD_REQUEST})
export const resetPasswordSuccessAction = () => ({type: RESET_PASSWORD_SUCCESS})
export const resetPasswordFailedAction = () => ({type: RESET_PASSWORD_FAILED})
export const savePasswordRequestAction = () => ({type: SAVE_PASSWORD_REQUEST})
export const savePasswordSuccessAction = () => ({type: SAVE_PASSWORD_SUCCESS})
export const savePasswordFailedAction = () => ({type: SAVE_PASSWORD_FAILED})



export const login = ({email, password}) => {
    return function (dispatch) {
        dispatch(loginRequestAction())
        loginRequest({email, password})
            .then(res => {
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
    return async function (dispatch) {
        if (getCookie("accessToken")) {
            dispatch(getUserRequestAction());
            return await getUserRequest()
                .then(res => {
                    console.log(res)
                    dispatch(getUserSuccessAction(res?.user))
                }).catch(error => {
                    dispatch(getUserFailedAction())
                    console.log(error)
                })
        }
    }
}

export const checkUserAuth = () => {
    return function (dispatch) {
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

export const updateUser = (userData) => {
    return function (dispatch) {
        dispatch(userUpdateRequestAction())
        updateUserRequest(userData).then(res => {
            dispatch(userUpdateSuccessAction(res.user))
        }).catch(error=>{
            console.log(error)
            dispatch(userUpdateFailedAction())
        })
    }
}

export const registration = (form) => {
    return function (dispatch) {
        registrationRequest(form)
            .then((res) => {
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
    return function (dispatch) {
        refreshToken()
            .then(res => {
                const {accessToken, refreshToken} = res;
                const authToken = accessToken.split('Bearer ')[1];
                setCookie("accessToken", authToken, {expires: 20});
                window.localStorage.setItem('refreshToken', refreshToken);
            })
    }
}
export const logout = () => {
    return function (dispatch) {
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


export const forgotPassword = (email) => {
    return function (dispatch) {
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

export const savePassword = (data) => {
    return function (dispatch) {
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
