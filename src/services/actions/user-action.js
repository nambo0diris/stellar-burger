import {
    forgotPasswordRequest,
    getUserRequest,
    loginRequest,
    logoutRequest,
    registrationRequest,
    savePasswordRequest
} from "../../utils/api";
import {deleteCookie, getCookie, setCookie} from "../../utils/utils";

export const SET_USER = "SET_USER";

export const IS_AUTH_CHECKED = "IS_AUTH_CHECKED"
export const GET_REGISTRATION_REQUEST = "GET_REGISTRATION_REQUEST";
export const GET_REGISTRATION_SUCCESS = "GET_REGISTRATION_SUCCESS";
export const GET_REGISTRATION_FAILED = "GET_REGISTRATION_FAILED";


export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const SAVE_PASSWORD_FAILED = "SAVE_PASSWORD_FAILED";
export const SAVE_PASSWORD_REQUEST = "SAVE_PASSWORD_REQUEST";
export const SAVE_PASSWORD_SUCCESS = "SAVE_PASSWORD_SUCCESS";


const setUser = (user) => ({
    type: SET_USER,
    user
})

export const getUser = () => {
    return async function (dispatch) {
        if (getCookie("accessToken")) {
            dispatch({type: GET_USER_REQUEST});
            return await getUserRequest()
                .then(res => {
                   if(res.ok){
                       return res
                   }
                })
                .then(res => res.json())
                .then(res => {
                    dispatch({type: GET_USER_SUCCESS, user: res.user})
                })
        }
    }
}

export const updateUser = () => {
    return function (dispatch) {
        dispatch()
        updateUser()
    }
}
export const checkUserAuth = () => {
    return function (dispatch) {
        if (localStorage.getItem("refreshToken")) {
            dispatch(getUser()).catch(() => {
                localStorage.removeItem("refreshToken")
                deleteCookie("accessToken")
                dispatch({type: SET_USER, user: null})
            }).finally(()=>{
                dispatch({type:IS_AUTH_CHECKED, isAuthChecked: true})
            })
        } else {
            dispatch({type:IS_AUTH_CHECKED, isAuthChecked: true})
        }
    }
}

export const registration = (form) => {
    return function (dispatch) {
        registrationRequest(form)
            .then((res) => {
                dispatch({type: GET_REGISTRATION_REQUEST});
                if (!res) {
                    dispatch({type: GET_REGISTRATION_FAILED});
                } else {
                    const {user, accessToken, refreshToken} = res;
                    const authToken = accessToken.split('Bearer ')[1];
                    dispatch({type: GET_REGISTRATION_SUCCESS, user, refreshToken, authToken});
                    setCookie("accessToken", authToken, {expires: 20});
                    window.localStorage.setItem('refreshToken', refreshToken);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export const logout = () => {
    return function (dispatch) {
        dispatch({type: LOGIN_REQUEST})
        logoutRequest()
            .then(res => {
                if (res.ok) {
                    return res
                }
            })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                    dispatch({type: LOGIN_SUCCESS})
                    localStorage.removeItem('refreshToken')
                    deleteCookie('accessToken')
                    dispatch({type: SET_USER, user: null})
                } else {
                    dispatch({type: LOGIN_FAILED})
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const login = ({email, password}) => {
    return function (dispatch) {
        dispatch({type: LOGIN_REQUEST})
        loginRequest(email, password)
            .then(res=> {
                if (res.ok) {
                    return res
                }
            })
            .then((res) => res.json())
            .then(res => {
                if (res.success) {
                    dispatch({type: LOGIN_SUCCESS})
                    const authToken = res.accessToken.split('Bearer ')[1];
                    const refreshToken = res.refreshToken
                    setCookie("accessToken", authToken, {expires: 20});
                    window.localStorage.setItem('refreshToken', refreshToken);
                    dispatch(setUser(res.user))

                } else {
                    dispatch({type: LOGIN_FAILED})
                }
            }).catch(error => {
                console.log(error)
        })
    }
}
export const forgotPassword = (email) => {
    return async function (dispatch) {
        dispatch({type: RESET_PASSWORD_REQUEST})
        await forgotPasswordRequest(email)
            .then(res => {
               if (res.ok) {
                   return res
               }
            })
            .then(res => res?.json())
            .then(res => {
                if (res.success) {
                    dispatch({type: RESET_PASSWORD_SUCCESS})
                } else {
                    dispatch({type: RESET_PASSWORD_FAILED})
                }
            }).catch(error => {
                console.log(error)
            })
    }
}

export const savePassword = (data) => {
    return function (dispatch) {
        dispatch({type: SAVE_PASSWORD_REQUEST})
        savePasswordRequest(data)
            .then(res=>{
                if (res.ok) {
                    return res
                }
            })
            .then(res=>res.json())

    }
}
