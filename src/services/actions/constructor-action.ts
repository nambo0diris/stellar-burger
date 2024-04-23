import {ADD_SELECTED_INGREDIENTS, INGREDIENT_MOVE, REMOVE_SELECTED_INGREDIENTS} from "../constants";
import {ISelectedIngredients} from "../../interfaces/interfaces";

export interface IAddSelectedIngredientsAction {
    readonly type: typeof ADD_SELECTED_INGREDIENTS,
    readonly selectedIngredients: ISelectedIngredients
}

export const addSelectedIngredientsAction = (selectedIngredients: ISelectedIngredients) => ({
    type: ADD_SELECTED_INGREDIENTS,
    selectedIngredients
})
export const removeSelectedIngredientsAction = () => ({
    type: REMOVE_SELECTED_INGREDIENTS,
})
export const moveIngredientsAction = (dragIndex: number, hoverIndex: number) => ({
    type: INGREDIENT_MOVE,
    dragIndex,
    hoverIndex
})


