import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";
import {TIngredientsDetailsActions} from "../actions/ingredient-details-action";
import {Product} from "../../interfaces/interfaces";


export type TIngredientDetailsState = {
    currentIngredient: Product | null
}
const initialState: TIngredientDetailsState = {
    currentIngredient: null
}
export const ingredientDetailsReducer = (state = initialState, action: TIngredientsDetailsActions):TIngredientDetailsState => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT:
            return {
                ...state,
                currentIngredient: action.currentIngredient
            }
        case REMOVE_CURRENT_INGREDIENT:
            return {
                ...state,
                currentIngredient: null
            }
        default:
            return state
    }
}
