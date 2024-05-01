import { ingredientsRequest} from "../../utils/api";
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
} from "../constants";
import {Product} from "../../interfaces/interfaces";


export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS,
    readonly ingredients: Product[]
}


export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST,
}

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED,
}

export type TDataActions =
    IGetIngredientsSuccessAction |
    IGetIngredientsRequestAction |
    IGetIngredientsFailedAction


export const getIngredientsSuccessAction = (data: Product[]):IGetIngredientsSuccessAction => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data
});

export const getIngredientsRequestAction = (): IGetIngredientsRequestAction => ({
    type: GET_INGREDIENTS_REQUEST
});

export const getIngredientsFailedAction = ():IGetIngredientsFailedAction => ({
    type: GET_INGREDIENTS_FAILED
});




export function getIngredients () {
    return function (dispatch: any) {
        dispatch(getIngredientsRequestAction())
        ingredientsRequest()
            .then((res:any)=> {
                dispatch(getIngredientsSuccessAction(res.data))
            })
            .catch(error => {
                dispatch(getIngredientsFailedAction())
                console.log(error)
            })
    }
}
