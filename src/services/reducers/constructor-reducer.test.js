import {constructorReducer} from "./constructor-reducer";
import * as types from "../constants/constructor";

describe('constructor reducer', () => {
    it('should return the initial state', () => {
        const initState = {
            dragIndex: null,
            hoverIndex: null,
            selectedIngredients: {bun: [], ingredients:[]}
        }
        expect(constructorReducer(initState,{})).toEqual(
            {
                dragIndex: null,
                hoverIndex: null,
                selectedIngredients: {bun: [], ingredients:[]}
            }
        )
    })

    it('should have handle ADD_SELECTED_INGREDIENTS', () => {
        const selectedIngredients = {
            ingredients: [
                {
                    "_id": "643d69a5c3f7b9001cfa093e",
                    "name": "Филе Люминесцентного тетраодонтимформа",
                    "type": "main",
                    "proteins": 44,
                    "fat": 26,
                    "carbohydrates": 85,
                    "calories": 643,
                    "price": 988,
                    "image": "https://code.s3.yandex.net/react/code/meat-03.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
                    "__v": 0,
                    "uuid": "a55c395c-909b-4dfb-acf5-91715262eda1"
                }
            ],
            bun: [
                {
                    "_id": "643d69a5c3f7b9001cfa093d",
                    "name": "Флюоресцентная булка R2-D3",
                    "type": "bun",
                    "proteins": 44,
                    "fat": 26,
                    "carbohydrates": 85,
                    "calories": 643,
                    "price": 988,
                    "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    "__v": 0,
                    "uuid": "22a8797d-bcdd-4a1c-b78f-9f10d739fc93"
                },
                {
                    "_id": "643d69a5c3f7b9001cfa093d",
                    "name": "Флюоресцентная булка R2-D3",
                    "type": "bun",
                    "proteins": 44,
                    "fat": 26,
                    "carbohydrates": 85,
                    "calories": 643,
                    "price": 988,
                    "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    "__v": 0,
                    "uuid": "a6f00e3e-525c-4c11-9bcc-21597c7eb6d9"
                }
            ]
        }
        expect(constructorReducer([],{
            type: types.ADD_SELECTED_INGREDIENTS,
            selectedIngredients
        })).toEqual({
            selectedIngredients: {
                ingredients: [
                    {
                        "_id": "643d69a5c3f7b9001cfa093e",
                        "name": "Филе Люминесцентного тетраодонтимформа",
                        "type": "main",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/meat-03.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
                        "__v": 0,
                        "uuid": "a55c395c-909b-4dfb-acf5-91715262eda1"
                    }
                ],
                bun: [
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "22a8797d-bcdd-4a1c-b78f-9f10d739fc93"
                    },
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "a6f00e3e-525c-4c11-9bcc-21597c7eb6d9"
                    }
                ]
            }
        })
    })

    it('should have handle REMOVE_SELECTED_INGREDIENTS', () => {
        expect(constructorReducer([],{
            type: types.REMOVE_SELECTED_INGREDIENTS
        })).toEqual({
            selectedIngredients: {bun: [], ingredients:[]}
        })
    })

    it('should have handle INGREDIENT_MOVE', () => {
        expect(constructorReducer({
            selectedIngredients: {
                bun: [
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "22a8797d-bcdd-4a1c-b78f-9f10d739fc93"
                    },
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "a6f00e3e-525c-4c11-9bcc-21597c7eb6d9"
                    }
                ],
                ingredients: [
                    {
                        "_id": "643d69a5c3f7b9001cfa093e",
                        "name": "Филе Люминесцентного тетраодонтимформа",
                        "type": "main",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/meat-03.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
                        "__v": 0,
                        "uuid": "a55c395c-909b-4dfb-acf5-91715262eda1"
                    },
                    {
                        "_id": "643d69a5c3f7b9001cfa0941",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0,
                        "uuid": "949eb06a-ef2c-448b-a627-e2aea5ea2d6b"
                    }
                ]
            },
            dragIndex: 0,
            hoverIndex: 1
        }, {
            type: types.INGREDIENT_MOVE,
            dragIndex: 0,
            hoverIndex: 1
        })).toEqual({
            selectedIngredients: {
                bun: [
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "22a8797d-bcdd-4a1c-b78f-9f10d739fc93"
                    },
                    {
                        "_id": "643d69a5c3f7b9001cfa093d",
                        "name": "Флюоресцентная булка R2-D3",
                        "type": "bun",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        "__v": 0,
                        "uuid": "a6f00e3e-525c-4c11-9bcc-21597c7eb6d9"
                    }
                ],
                ingredients: [
                    {
                        "_id": "643d69a5c3f7b9001cfa0941",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0,
                        "uuid": "949eb06a-ef2c-448b-a627-e2aea5ea2d6b"
                    },
                    {
                        "_id": "643d69a5c3f7b9001cfa093e",
                        "name": "Филе Люминесцентного тетраодонтимформа",
                        "type": "main",
                        "proteins": 44,
                        "fat": 26,
                        "carbohydrates": 85,
                        "calories": 643,
                        "price": 988,
                        "image": "https://code.s3.yandex.net/react/code/meat-03.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
                        "__v": 0,
                        "uuid": "a55c395c-909b-4dfb-acf5-91715262eda1"
                    }
                ]
            },
            dragIndex: 0,
            hoverIndex: 1
        })
    })
})

