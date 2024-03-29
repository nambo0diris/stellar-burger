import {config} from "../config";
import {getCookie} from "./utils";

interface IRegRequest {
    name: string,
    email: string,
    password: string
}

export const registrationRequest = async (form: IRegRequest): Promise<void | Response> => {
    return await fetch(config.registerAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    }).then(res => {
        if (res.ok) {
            return res
        }
    }).then(res => res?.json())
        .catch(error => {
        console.log(error)
    });
}

export const getUserRequest = async (): Promise<Response> => {
    return await fetch(config.getUserAPI, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
}


interface IPatchUser {
    email?:string
    name?:string
    password?:string
}
export const updateUser = async (user:IPatchUser) => {
    return await fetch("", {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(user),
    })
}
export const loginRequest = async (email:string, password:string) => {
    return await fetch(config.loginAPI, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
}
export const logoutRequest = async () => {
    return await fetch(config.logoutAPI, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    })
}
export const refreshToken = async () => {
    return await fetch(config.refreshTokenAPI, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    });
}
export const forgotPasswordRequest = async (email: string) => {
    return await fetch(`${config.resetPasswordAPI}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ email }),
    })
}

interface ISavePasswordData {
    email: string,
    code: string
}
export const savePasswordRequest = async (data: ISavePasswordData) => {
    return await fetch(config.savePasswordAPI, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}
