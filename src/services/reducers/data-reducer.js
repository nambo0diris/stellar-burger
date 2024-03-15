import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../actions/data-action";

const initialState = {
    getIngredientsRequest: false,
    getIngredientsSuccess: false,
    getIngredientsFailed: false,
    ingredients: [],

}
export const dataReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                getIngredientsRequest: true,
            }
        case GET_INGREDIENTS_FAILED:
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: true
            }
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                getIngredientsFailed: false,
                getIngredientsRequest: false,
                ingredients: action.ingredients
            }
        default:
            return state;
    }
}