import {MAKE_ORDER_FAILED, MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS, MAKE_ORDER_RESET} from "../actions/order-action";

const initialState = {
    makeOrderRequest: false,
    makeOrderSuccess: false,
    makeOrderFailed: false,
    name: null,
    success: null,
    order: {
        number:null
    }
}
export const orderReducer = (state= initialState, action) => {
    switch (action.type) {
        case MAKE_ORDER_REQUEST:
            return {
                ...state,
                makeOrderRequest: true,
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
                order: {
                   number: null
                }
            }
        default:
            return state
    }
}
