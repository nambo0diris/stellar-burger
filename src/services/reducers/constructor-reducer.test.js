import {constructorReducer, initialState} from "./constructor-reducer";
import * as types from "../constants/constructor";
import {selectedIngredients} from "../../../cypress/support/constants/data";

describe('constructor reducer', () => {
    it('should return the initial state', () => {

        expect(constructorReducer(initialState,{})).toEqual(
            {
                dragIndex: null,
                hoverIndex: null,
                selectedIngredients: {bun: [], ingredients:[]}
            }
        )
    })

    it('should have handle ADD_SELECTED_INGREDIENTS', () => {
        expect(constructorReducer(initialState,{
            type: types.ADD_SELECTED_INGREDIENTS,
            selectedIngredients
        })).toEqual({
            ...initialState,
            selectedIngredients
        })
    })

    it('should have handle REMOVE_SELECTED_INGREDIENTS', () => {
        expect(constructorReducer(initialState,{
            type: types.REMOVE_SELECTED_INGREDIENTS
        })).toEqual({
            ...initialState,
            selectedIngredients: {bun: [], ingredients:[]}
        })
    })

    it('should have handle INGREDIENT_MOVE', () => {
        expect(constructorReducer({
            ...initialState,
            selectedIngredients,
        }, {
            type: types.INGREDIENT_MOVE,
            dragIndex: 0,
            hoverIndex: 1
        })).toEqual({
            selectedIngredients: {
                ...selectedIngredients,
                ingredients: [
                    selectedIngredients.ingredients[1],
                    selectedIngredients.ingredients[0]
                ]
            },
            dragIndex: null,
            hoverIndex: null
        })
    })
})

