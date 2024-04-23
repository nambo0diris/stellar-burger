import {makeOrderRequest} from "../../utils/api";
import {MAKE_ORDER_FAILED, MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS} from "../constants";


export const makeOrderRequestAction = () => ({
    type: MAKE_ORDER_REQUEST
})
export const makeOrderSuccessAction = (data) => ({
    type: MAKE_ORDER_SUCCESS,
    name: data.name,
    success: data.success,
    order: data.order,
})
export const makeOrderFailedAction = () => ({
    type: MAKE_ORDER_FAILED
})

export function makeOrder(ingredients){
    return function (dispatch) {
        dispatch(makeOrderRequestAction())
        makeOrderRequest({ingredients})
            .then(res => {
                dispatch(makeOrderSuccessAction(res))
            })
            .catch(error => {
                console.log(error)
                dispatch(makeOrderFailedAction())
            })
    }
}
