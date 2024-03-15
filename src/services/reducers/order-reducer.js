import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_RESET} from "../actions/order-action";

const initialState = {
    getOrderRequest: false,
    getOrderSuccess: false,
    getOrderFailed: false,
    name: null,
    success: null,
    order: {
        number:null
    }
}
export const orderReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                getIngredientsRequest: true,
            }
        case GET_ORDER_FAILED:
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: true
            }
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                getIngredientsFailed: false,
                getIngredientsRequest: false,
                name: action.name,
                success: action.success,
                order: action.order,
            }
        case GET_ORDER_RESET:
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