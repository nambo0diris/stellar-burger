import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";
import {Product} from "../../interfaces/interfaces";
import {UnknownAction} from "redux";


export interface ISetCurrentIngredientAction {
    readonly type: typeof SET_CURRENT_INGREDIENT,
    readonly currentIngredient: Product
}
export interface IRemoveCurrentIngredientAction {
    readonly type: typeof REMOVE_CURRENT_INGREDIENT,

}

export type TIngredientsDetailsActions =
    ISetCurrentIngredientAction |
    IRemoveCurrentIngredientAction


export const setCurrentIngredientAction = (currentIngredient: Product): ISetCurrentIngredientAction & UnknownAction => ({
    type:SET_CURRENT_INGREDIENT,
    currentIngredient
})
export const removeCurrentIngredientAction = (): IRemoveCurrentIngredientAction & UnknownAction => ({
    type:REMOVE_CURRENT_INGREDIENT,
})
