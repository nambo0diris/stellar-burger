import React, {useEffect} from 'react';
import Layout from "../components/layout/layout";
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../interfaces/interfaces";
import {SET_CURRENT_INGREDIENT} from "../services/actions/ingredient-details-action";

const Ingredient = () => {
    // @ts-ignore
    const {ingredients} = useSelector(state => state.dataReducer);
    // @ts-ignore
    const {currentIngredient} = useSelector(state => state.ingredientDetailsReducer)
    const location = useLocation();
    const dispatch = useDispatch();


    useEffect(() => {
        if (location && ingredients) {
            const ingredientId = location.pathname.split('/')[2];
            const currentIngredient = ingredients.find((ingredient:Product) => ingredient._id===ingredientId)
            dispatch({type:SET_CURRENT_INGREDIENT, currentIngredient})
        }
    },[location, ingredients])

    return (
        <div style={{margin:"auto"}}>
            <h1 className={"text text_type_main-medium mt-30"} style={{textAlign:"center"}}>Детали ингредиента</h1>
            {
                currentIngredient &&
                <IngredientDetails/>
            }
        </div>
    );
};

export default Ingredient;