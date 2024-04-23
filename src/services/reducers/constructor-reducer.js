import {ADD_SELECTED_INGREDIENTS, INGREDIENT_MOVE, REMOVE_SELECTED_INGREDIENTS} from "../constants";

const initialState = {
    dragIndex: null,
    hoverIndex: null,
    selectedIngredients: {bun: [], ingredients:[]}
}

export const constructorReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_SELECTED_INGREDIENTS:
            return {
                ...state,
                selectedIngredients: action.selectedIngredients
            }
        case REMOVE_SELECTED_INGREDIENTS:
            return {
                ...state,
                selectedIngredients: {bun: [], ingredients:[]}

            }
        case INGREDIENT_MOVE:
            const updatedIngredients = state.selectedIngredients.ingredients;
            const swap = updatedIngredients[action.dragIndex]
            updatedIngredients[action.dragIndex] = updatedIngredients[action.hoverIndex];
            updatedIngredients[action.hoverIndex] = swap;
            return {
                ...state,
                selectedIngredients: {
                    bun: [...state.selectedIngredients.bun],
                    ingredients: [...updatedIngredients]
                }
            }
        default:
            return state
    }
}
