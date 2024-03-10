import {fetchData} from "../../utils/fetch-data";
import {config} from "../../config";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export function getIngredients () {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        fetchData(config.productsAPI).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                })
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            }
        })
    }
}