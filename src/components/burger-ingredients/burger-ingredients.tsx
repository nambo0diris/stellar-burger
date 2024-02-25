import React, {FC, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIngredientsProps} from "../../interfaces/interfaces";
import CategoryWrapper from "./category-wrapper/category-wrapper";
import styles from "./burger-ingredients.module.css";
const BurgerIngredients: FC<BurgerIngredientsProps> = ({data, addProduct}) => {
    const [current, setCurrent] = useState('one');

    return (
        <div>
            <div className={`${styles.tabs_wrapper }`}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles.categories} mt-10`}>
                {Object.entries(data).map((product, index) => {
                    return <CategoryWrapper key={index} type={product[0]} products={product[1]} addProduct={addProduct}/>;
                })}
            </div>
        </div>
    );
};

export default BurgerIngredients;