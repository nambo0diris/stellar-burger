import {Product, ProductWithUUID} from "../interfaces/interfaces";
import {v4 as uuidv4} from "uuid";

export const getProductWithUUID = (product: Product): ProductWithUUID => {
    return {
        ...product,
        uuid: uuidv4()
    }
}

// @ts-ignore
export const setCookie = (name, value, props) => {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 10000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }

    document.cookie = updatedCookie;
}
export const getCookie = (name:string) => {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// @ts-ignore
export const deleteCookie = (name) => {
    setCookie(name, null, {expires: -1});
}

export const checkResponse = (res:any) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
}
export const checkSuccess = (res:any) => {
    return res?.success ? res : Promise.reject(`Ответ не success: ${res}`);
}
