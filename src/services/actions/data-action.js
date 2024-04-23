import { ingredientsRequest} from "../../utils/api";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants";



export const getIngredientsSuccess = (data) => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data
});

export const getIngredientsRequest = () => ({
    type: GET_INGREDIENTS_REQUEST
});

export const getIngredientsFailed = () => ({
    type: GET_INGREDIENTS_FAILED
});




export function getIngredients () {
    return function (dispatch) {
        dispatch(getIngredientsRequest())
        ingredientsRequest()
            .then(res=> {
                dispatch(getIngredientsSuccess(res.data))
            })
            .catch(error => {
                dispatch(getIngredientsFailed())
                console.log(error)
            })
    }
}
