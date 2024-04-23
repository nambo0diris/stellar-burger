import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";

export const setCurrentIngredientAction = (currentIngredient) => ({
    type:SET_CURRENT_INGREDIENT,
    currentIngredient
})
export const removeCurrentIngredientAction = () => ({
    type:REMOVE_CURRENT_INGREDIENT,
})
