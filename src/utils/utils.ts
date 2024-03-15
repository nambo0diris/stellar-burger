import {Product, ProductWithUUID} from "../interfaces/interfaces";
import {v4 as uuidv4} from "uuid";

export const isBun = (product: Product):boolean => {
    return product.type === "bun";
}

const accInitialValue: Product = {
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: '',
    image_large: '',
    image_mobile: '',
    name: '',
    price: 0,
    proteins: 0,
    type: '',
    __v:0,
    _id: ''
}
export const getProductById = (ingredients: Product[], id: string): Product => {
    return  ingredients.reduce((acc, currentValue) => {
        if (currentValue._id === id) {
            return currentValue;
        }
        return acc;
    },accInitialValue)
}
export const getProductWithUUID = (product: Product): ProductWithUUID => {
    return {
        ...product,
        uuid: uuidv4()
    }
}