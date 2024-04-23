import React, {useEffect} from 'react';
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import {Location, Params, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../interfaces/interfaces";
import {Dispatch} from "redux";
import {setCurrentIngredientAction} from "../services/actions/ingredient-details-action";

const Ingredient = () => {
    // @ts-ignore
    const {ingredients} = useSelector(state => state.dataReducer);
    // @ts-ignore
    const {currentIngredient} = useSelector(state => state.ingredientDetailsReducer)
    const location: Location = useLocation();
    const dispatch: Dispatch = useDispatch();
    const {id}: Readonly<Params<string>> = useParams();

    useEffect(() => {
        if (location && ingredients) {
            const currentIngredient = ingredients.find((ingredient:Product) => ingredient._id === id)
            dispatch(setCurrentIngredientAction(currentIngredient))
        }
    },[location, ingredients])

    return (
        <>
            {currentIngredient &&
                <IngredientDetails/>
            }
        </>
    );
};

export default Ingredient;
