import React from 'react';
import styles from "./ingredient-details.module.css";
import {useSelector} from "react-redux";
const IngredientDetails = () => {
    // @ts-ignore
    const {currentIngredient} = useSelector(state => state.ingredientDetailsReducer)
    return (
        <>
            <img src={currentIngredient.image_large} alt={currentIngredient.name} className={styles.ingredient_pic}/>
            <h1 className={`mt-4 mb-8 text text_type_main-medium`}>{currentIngredient.name}</h1>
            <div className={`text text_type_main-small ${styles.nutritional_values}`}>
                <div className={`${styles.nutritional_value}`}>
                    <div className={styles.nutritional_value_title}>Калории, ккал</div>
                    <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{currentIngredient.calories}</div>
                </div>
                <div className={`${styles.nutritional_value}`}>
                    <div className={styles.nutritional_value_title}>Белки, г</div>
                    <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{currentIngredient.proteins}</div>
                </div>
                <div className={`${styles.nutritional_value}`}>
                    <div className={styles.nutritional_value_title}>Жиры, г</div>
                    <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{currentIngredient.fat}</div>
                </div>
                <div className={`${styles.nutritional_value}`}>
                    <div className={styles.nutritional_value_title}>Углеводы, г</div>
                    <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{currentIngredient.carbohydrates}</div>
                </div>
            </div>
        </>
    );
};

export default IngredientDetails;