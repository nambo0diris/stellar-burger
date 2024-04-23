import {makeOrderRequest} from "../../utils/api";
import {MAKE_ORDER_FAILED, MAKE_ORDER_REQUEST, MAKE_ORDER_RESET, MAKE_ORDER_SUCCESS} from "../constants";
import {IMakeOrderData} from "../../interfaces/interfaces";
import {UnknownAction} from "redux";


export interface IMakeOrderRequestAction {
    readonly type: typeof MAKE_ORDER_REQUEST,
}
export interface IMakeOrderFailedAction {
    readonly type: typeof MAKE_ORDER_FAILED,
}
export interface IMakeOrderResetAction {
    readonly type: typeof MAKE_ORDER_RESET,
}
export interface IMakeOrderSuccessAction {
    readonly type: typeof MAKE_ORDER_SUCCESS,
    name: string,
    success: boolean,
    order: {
        number: number
    }
}

export type TOrderActions =
    IMakeOrderRequestAction |
    IMakeOrderFailedAction |
    IMakeOrderSuccessAction |
    IMakeOrderResetAction


export const makeOrderRequestAction = (): IMakeOrderRequestAction & UnknownAction => ({
    type: MAKE_ORDER_REQUEST
})


export const makeOrderSuccessAction = (data: IMakeOrderData): IMakeOrderSuccessAction & UnknownAction => ({
    type: MAKE_ORDER_SUCCESS,
    name: data.name,
    success: data.success,
    order: data.order,
})

export const makeOrderResetAction = (): IMakeOrderResetAction & UnknownAction => ({
    type: MAKE_ORDER_RESET,
})

export const makeOrderFailedAction = (): IMakeOrderFailedAction & UnknownAction => ({
    type: MAKE_ORDER_FAILED
})

export function makeOrder(ingredients: Array<string>) {
    return function (dispatch:any) {
        dispatch(makeOrderRequestAction())
        makeOrderRequest(ingredients)
            .then((res:any) => {
                dispatch(makeOrderSuccessAction(res))
            })
            .catch(error => {
                console.log(error)
                dispatch(makeOrderFailedAction())
            })
    }
}
