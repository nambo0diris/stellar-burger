import {makeOrderRequest} from "../../utils/api";

export const MAKE_ORDER_REQUEST = 'MAKE_ORDER_REQUEST';
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_RESET = 'MAKE_ORDER_RESET';


export function makeOrder(ingredients){
    return function (dispatch) {
        dispatch({type: MAKE_ORDER_REQUEST})
        makeOrderRequest({ingredients})
            .then(res => {
                dispatch({
                    type: MAKE_ORDER_SUCCESS,
                    name: res.name,
                    success: res.success,
                    order: res.order,
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({type: MAKE_ORDER_FAILED})
            })
    }
}
