import * as types from "../constants/data";
import {dataReducer, initialState} from "./data-reducer";
import {ingredients} from "../../../cypress/support/constants/data";


describe('data-reducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should have handle GET_INGREDIENTS_REQUEST', () => {

        expect(dataReducer(initialState,{
            type: types.GET_INGREDIENTS_REQUEST,
        })).toEqual(
            {
                ...initialState,
                getIngredientsRequest: true,
            }
        )

    })
    it('should have handle GET_INGREDIENTS_FAILED', () => {
        expect(dataReducer(initialState, {
            type: types.GET_INGREDIENTS_FAILED,
        } )).toEqual({
            ...initialState,
            getIngredientsFailed: true,
        })

    })

    it('should have handle GET_INGREDIENTS_SUCCESS', () => {
        expect(dataReducer(initialState, {
            type: types.GET_INGREDIENTS_SUCCESS,
            ingredients
        } )).toEqual({
            ...initialState,
            getIngredientsSuccess: true,
            ingredients,
        })
    })

})
