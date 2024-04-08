import {combineReducers} from "redux";
import {dataReducer} from "./data-reducer";
import {orderReducer} from "./order-reducer";
import {constructorReducer} from "./constructor-reducer";
import {ingredientDetailsReducer} from "./ingredient-details-reducer";
import {userReducer} from "./user-reducer";

export const rootReducer = combineReducers({
    userReducer,
    dataReducer,
    orderReducer,
    constructorReducer,
    ingredientDetailsReducer
});
