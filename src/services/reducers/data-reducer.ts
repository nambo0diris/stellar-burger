import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants";
import {TDataActions} from "../actions/data-action";
import {Product} from "../../interfaces/interfaces";


export type TDataState = {
    getIngredientsRequest: boolean,
    getIngredientsSuccess: boolean,
    getIngredientsFailed: boolean,
    ingredients: Product[],
}

const initialState: TDataState = {
    getIngredientsRequest: false,
    getIngredientsSuccess: false,
    getIngredientsFailed: false,
    ingredients: [],

}
export const dataReducer = (state= initialState, action: TDataActions): TDataState => {
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
