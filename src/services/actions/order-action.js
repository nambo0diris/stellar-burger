import {fetchData} from "../../utils/fetch-data";
import {config} from "../../config";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_RESET = 'GET_ORDER_RESET';


export function getOrder(ingredients){
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        })
        fetchData(config.orderDetails, {ingredients}).then(res => {
            console.log(res)
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    name: res.name,
                    success: res.success,
                    order: res.order,
                })
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            }
        }).catch(error => {
            throw error;
        })
    }
}
