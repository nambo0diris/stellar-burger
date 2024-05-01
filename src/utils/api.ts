import {config} from "../config";
import {checkResponse, checkSuccess, getCookie, TCheckSuccess} from "./utils";



export const request = <T>(endpoint:string, options:any): Promise<T> => {
    return fetch(`${config.baseAPIUrl}${endpoint}`, options)
        .then(res=> checkResponse<Promise<T>>(res))
        .then(res => checkSuccess<TCheckSuccess<T>>(res))
}

export type TRegistrationForm = {
    email: string,
    password: string,
    name: string,
}

export const registrationRequest = <T>(form:TRegistrationForm): Promise<T> => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(form)
    }
    return request(config.registerEndpoint, options)
}

export const getUserRequest = <T>(): Promise<T> => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        }
    }
    return request(config.getUserEndpoint, options)
}


type TUser = {
    email?:string,
    name?:string,
    password?:string
}
export const updateUserRequest = <T>(user:TUser): Promise<T> => {
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

type TLogin = {
    email:string,
    password:string,
}
export const loginRequest = <T>({email, password}:TLogin): Promise<T> => {
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
export const logoutRequest = <T>():Promise<T> => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    }
    return request(config.logoutEndpoint, options)
}
export const refreshTokenRequest = <T>():Promise<T> => {
    const options = {
        body: JSON.stringify({token: localStorage.getItem("refreshToken")})
    }
    return request(config.refreshTokenEndpoint, options)
}
export const forgotPasswordRequest = <T>(email: string): Promise<T> => {
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

export type TSavePasswordData = {
    email: string,
    code: string
}

export const savePasswordRequest = <T>(data: TSavePasswordData):Promise<T> => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }
    return request(config.savePasswordEndpoint, options)
}

export const ingredientsRequest = <T>():Promise<T> => {
    return request(config.productsEndpoint, null)
}

export const makeOrderRequest = <T>(ingredients: Array<string>):Promise<T> => {
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ingredients})
    }
    return request(config.orderDetailsEndpoint, options)
}

export const getOrderRequest = (orderNumber:string) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }

    return request(config.getOrderInfoEndpoint+ `/` + orderNumber, options)
}

