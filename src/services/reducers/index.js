import {combineReducers} from "redux";
import {dataReducer} from "./data-reducer";
import {orderReducer} from "./order-reducer";
import {constructorReducer} from "./constructor-reducer";
import {ingredientDetailsReducer} from "./ingredient-details-reducer";

export const rootReducer = combineReducers({
    dataReducer,
    orderReducer,
    constructorReducer,
    ingredientDetailsReducer
});