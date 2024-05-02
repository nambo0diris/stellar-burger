import {} from "../constants";
import {TOrderActions} from "../actions/order-action";
import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_RESET,
    GET_ORDER_SUCCESS,
    REMOVE_CURRENT_ORDER,
    SET_CURRENT_ORDER,
    MAKE_ORDER_FAILED,
    MAKE_ORDER_REQUEST,
    MAKE_ORDER_RESET,
    MAKE_ORDER_SUCCESS
} from "../constants/";
import {IOrderTypes} from "../../interfaces/interfaces";


export type TOderState = {
    makeOrderRequest: boolean,
    makeOrderSuccess: boolean,
    makeOrderFailed: boolean,
    getOrderRequest: boolean,
    getOrderSuccess: boolean,
    getOrderFailed: boolean,
    name: null | string,
    success: null | boolean,
    currentOrder: IOrderTypes | null,
    order: IOrderTypes | null
}

const initialState: TOderState = {
    makeOrderRequest: false,
    makeOrderSuccess: false,
    makeOrderFailed: false,
    getOrderRequest: false,
    getOrderSuccess: false,
    getOrderFailed: false,
    name: null,
    success: null,
    currentOrder: null,
    order: null
}
export const orderReducer = (state= initialState, action: TOrderActions):TOderState => {
    switch (action.type) {
        case MAKE_ORDER_REQUEST:
            return {
                ...state,
                makeOrderRequest: true,
                order: null,
                name: null
            }
        case MAKE_ORDER_FAILED:
            return {
                ...state,
                makeOrderRequest: false,
                makeOrderFailed: true
            }
        case MAKE_ORDER_SUCCESS:
            return {
                ...state,
                makeOrderSuccess: true,
                makeOrderFailed: false,
                makeOrderRequest: false,
                name: action.name,
                success: action.success,
                order: action.order,
            }
        case MAKE_ORDER_RESET:
            return {
               ...state,
                name: null,
                success: null,
                order: null
            }

        case GET_ORDER_REQUEST:
            return  {
                ...state,
                getOrderRequest: true,

            }
        case GET_ORDER_FAILED:
            return  {
                ...state,
                getOrderRequest: false,
                getOrderSuccess: false,
                getOrderFailed: true
            }
        case GET_ORDER_SUCCESS:
            return  {
                ...state,
                getOrderRequest: false,
                getOrderSuccess: true,
                getOrderFailed: false,
                currentOrder: action.currentOrder
            }
        case SET_CURRENT_ORDER:
            return {
                ...state,
                currentOrder: action.currentOrder
            }
        case REMOVE_CURRENT_ORDER:
            return {
                ...state,
                currentOrder: null,
            }
        default:
            return state
    }
}
