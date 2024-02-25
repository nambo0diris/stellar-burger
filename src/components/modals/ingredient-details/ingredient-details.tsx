import React, {FC, SyntheticEvent} from 'react';
import {Product} from "../../../interfaces/interfaces";
import styles from "./ingredient-details.module.css"
interface IngredientDetailsProps {
    product: Product
}
const IngredientDetails: FC<IngredientDetailsProps> = ({product}) => {
    return (
            <>
                <img src={product.image_large} alt={product.name} className={styles.ingredient_pic}/>
                <h1 className={`mt-4 mb-8 text text_type_main-medium`}>{product.name}</h1>
                <div className={`text text_type_main-small ${styles.nutritional_values}`}>
                    <div className={`${styles.nutritional_value}`}>
                        <div className={styles.nutritional_value_title}>Калории, ккал</div>
                        <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{product.calories}</div>
                    </div>
                    <div className={`${styles.nutritional_value}`}>
                        <div className={styles.nutritional_value_title}>Белки, г</div>
                        <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{product.proteins}</div>
                    </div>
                    <div className={`${styles.nutritional_value}`}>
                        <div className={styles.nutritional_value_title}>Жиры, г</div>
                        <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{product.fat}</div>
                    </div>
                    <div className={`${styles.nutritional_value}`}>
                        <div className={styles.nutritional_value_title}>Углеводы, г</div>
                        <div className={`text text_type_digits-default ${styles.nutritional_value_numb}`}>{product.carbohydrates}</div>
                    </div>
                </div>
            </>
    );
};

export default IngredientDetails;