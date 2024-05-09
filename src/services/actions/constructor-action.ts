import {ADD_SELECTED_INGREDIENTS, INGREDIENT_MOVE, REMOVE_SELECTED_INGREDIENTS} from "../constants";
import {ISelectedIngredients} from "../../interfaces/interfaces";

export interface IAddSelectedIngredientsAction {
    readonly type: typeof ADD_SELECTED_INGREDIENTS,
    readonly selectedIngredients: ISelectedIngredients
}

export interface IRemoveSelectedIngredientsAction {
    readonly type: typeof REMOVE_SELECTED_INGREDIENTS
}

export interface IMoveIngredientsAction {
    readonly type: typeof INGREDIENT_MOVE,
    readonly dragIndex: number,
    readonly hoverIndex: number
}

export type TConstructorActions =
    IAddSelectedIngredientsAction |
    IRemoveSelectedIngredientsAction |
    IMoveIngredientsAction

export const addSelectedIngredientsAction = (selectedIngredients: ISelectedIngredients): IAddSelectedIngredientsAction => ({
    type: ADD_SELECTED_INGREDIENTS,
    selectedIngredients
})
export const removeSelectedIngredientsAction = (): IRemoveSelectedIngredientsAction => ({
    type: REMOVE_SELECTED_INGREDIENTS,
})
export const moveIngredientsAction = (dragIndex: number, hoverIndex: number): IMoveIngredientsAction => ({
    type: INGREDIENT_MOVE,
    dragIndex,
    hoverIndex
})


