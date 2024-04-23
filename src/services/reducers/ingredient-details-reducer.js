import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";

const initialState = {
    currentIngredient: null
}
export const ingredientDetailsReducer = (state = initialState, action) => {
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
