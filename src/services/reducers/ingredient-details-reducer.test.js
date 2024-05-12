import {ingredientDetailsReducer} from "./ingredient-details-reducer";
import * as types from "../constants/ingredient-details";

describe(`ingredientDetailsReducer`, () => {
    it(`should return the initial state`, () => {
        expect(ingredientDetailsReducer(undefined, {})).toEqual({
            currentIngredient: null
        })
    })

    it(`should should have handle SET_CURRENT_INGREDIENT`, () => {
        const currentIngredient = {
            _id: '643d69a5c3f7b9001cfa093d',
            name: 'Флюоресцентная булка R2-D3',
            type: 'bun',
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: 'https://code.s3.yandex.net/react/code/bun-01.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
            __v: 0
        }
        expect(ingredientDetailsReducer({currentIngredient:null}, {
            type: types.SET_CURRENT_INGREDIENT,
            currentIngredient
        })).toEqual({
            currentIngredient : {
                _id: '643d69a5c3f7b9001cfa093d',
                name: 'Флюоресцентная булка R2-D3',
                type: 'bun',
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                __v: 0
            }
        })
    })
    it(`should should have handle REMOVE_CURRENT_INGREDIENT`, () => {
        expect(ingredientDetailsReducer(undefined, {
            type: types.REMOVE_CURRENT_INGREDIENT,
        })).toEqual({
            currentIngredient: null
        })
    })
})
