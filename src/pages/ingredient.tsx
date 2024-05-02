import React, {useEffect} from 'react';
import IngredientDetails from "../components/modals/ingredient-details/ingredient-details";
import {Location, Params, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "../services/types/store-and-thunk-types";
import {Product} from "../interfaces/interfaces";
import {setCurrentIngredientAction} from "../services/actions/ingredient-details-action";

const Ingredient = () => {
    const {ingredients} = useSelector(state => state.dataReducer);
    const {currentIngredient} = useSelector(state => state.ingredientDetailsReducer)
    const location: Location = useLocation();
    const dispatch = useDispatch();
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
