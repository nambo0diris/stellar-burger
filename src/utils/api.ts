import {config} from "../config";
import {checkResponse, checkSuccess, getCookie} from "./utils";



interface IRegRequest {
    name: string,
    email: string,
    password: string
}

export const registrationRequest = (form: IRegRequest): Promise<void | Response> => {
    console.log(form)
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(form)
    }
    return request(config.registerEndpoint, options)
}

export const getUserRequest = (): Promise<Response> => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        }
    }
    return request(config.getUserEndpoint, options)
}


interface IPatchUser {
    email?:string
    name?:string
    password?:string
}
export const updateUserRequest = (user:IPatchUser) => {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify(user),
    }
    return request(config.getUserEndpoint, options)

}
export const loginRequest = (email:string, password:string) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    }
    return request(config.loginEndpoint, options)
}
export const logoutRequest = () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    }
    return request(config.logoutEndpoint, options)
}
export const refreshTokenRequest = () => {
    const options = {
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    }
    return request(config.refreshTokenEndpoint, options)
}
export const forgotPasswordRequest = (email: string) => {
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({ email }),
    }
    return request(config.resetPasswordEndpoint, options)
}

interface ISavePasswordData {
    email: string,
    code: string
}
export const savePasswordRequest = (data: ISavePasswordData) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }
    return request(config.savePasswordEndpoint, options)
}

export const getIngredientsRequest = () => {
    return request(config.productsEndpoint, null)
}
export const makeOrderRequest = (ingredients:any) => {
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(ingredients)
    }
    return request(config.orderDetailsEndpoint, options)
}

export const request = (endpoint:string, options:any) => {
    return fetch(`${config.baseAPIUrl}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess)
}


