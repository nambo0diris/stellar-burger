import {getOrderRequest, makeOrderRequest} from "../../utils/api";
import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST, GET_ORDER_RESET, GET_ORDER_SUCCESS,
    MAKE_ORDER_FAILED,
    MAKE_ORDER_REQUEST,
    MAKE_ORDER_RESET,
    MAKE_ORDER_SUCCESS
} from "../constants";
import {IMakeOrderData, IOrderTypes} from "../../interfaces/interfaces";
import {REMOVE_CURRENT_ORDER, SET_CURRENT_ORDER} from "../constants/";
import {Simulate} from "react-dom/test-utils";
import {AppThunk} from "../types/store-and-thunk-types";


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
    order: IOrderTypes
}
export interface ISetCurrentOrderAction {
    readonly type: typeof SET_CURRENT_ORDER,
    currentOrder: IOrderTypes
}
export interface IRemoveCurrentOrderAction {
    readonly type: typeof REMOVE_CURRENT_ORDER,
}

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST,
}

export interface IGetOrderFailedAction {
    readonly type: typeof GET_ORDER_FAILED,
}
export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS,
    currentOrder: IOrderTypes
}


export const getOrderRequestAction = (): IGetOrderRequestAction => ({
    type: GET_ORDER_REQUEST
})
export const getOrderFailedAction = (): IGetOrderFailedAction => ({
    type: GET_ORDER_FAILED
})
export const getOrderSuccessAction = (currentOrder:IOrderTypes): IGetOrderSuccessAction => ({
    type: GET_ORDER_SUCCESS,
    currentOrder
})


export type TOrderActions =
    IMakeOrderRequestAction |
    IMakeOrderFailedAction |
    IMakeOrderSuccessAction |
    IMakeOrderResetAction |
    ISetCurrentOrderAction |
    IRemoveCurrentOrderAction |
    IGetOrderRequestAction |
    IGetOrderFailedAction |
    IGetOrderSuccessAction


export const makeOrderRequestAction = (): IMakeOrderRequestAction  => ({
    type: MAKE_ORDER_REQUEST
})


export const makeOrderSuccessAction = (data: IMakeOrderData): IMakeOrderSuccessAction  => ({
    type: MAKE_ORDER_SUCCESS,
    name: data.name,
    success: data.success,
    order: data.order,
})

export const makeOrderResetAction = (): IMakeOrderResetAction  => ({
    type: MAKE_ORDER_RESET,
})

export const makeOrderFailedAction = (): IMakeOrderFailedAction  => ({
    type: MAKE_ORDER_FAILED
})

export const setCurrentOrder = (currentOrder: IOrderTypes): ISetCurrentOrderAction => ({
    type: SET_CURRENT_ORDER,
    currentOrder
})

export const removeCurrentOrder = (): IRemoveCurrentOrderAction => ({
    type: REMOVE_CURRENT_ORDER,
})

export function getOrder(number:string): AppThunk {
    return function (dispatch) {
        dispatch(getOrderRequestAction())
        getOrderRequest(number).then((res:any) => {
            dispatch(getOrderSuccessAction(res.orders[0]))
        }).catch(error => {
            console.log(error)
            dispatch(getOrderFailedAction())
        })
    }
}
export function makeOrder(ingredients: Array<string | undefined> ): AppThunk {
    return function (dispatch) {
        dispatch(makeOrderRequestAction())
        makeOrderRequest(ingredients)
            .then((res: any) => {
                console.log(res)
                dispatch(makeOrderSuccessAction(res))
            })
            .catch(error => {
                console.log(error)
                dispatch(makeOrderFailedAction())
            })
    }
}
