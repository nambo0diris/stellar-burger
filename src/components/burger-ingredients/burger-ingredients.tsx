import React, {useEffect, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {ParsedDataProps, Product} from "../../interfaces/interfaces";
import CategoryWrapper from "./category-wrapper/category-wrapper";
import styles from "./burger-ingredients.module.css";

import { useInView } from 'react-intersection-observer';
import {useSelector} from "../../services/types/store-and-thunk-types";

enum Ingredients {
    BUN = "bun",
    SAUCE = "sauce",
    MAIN = "main"
}
const BurgerIngredients = () => {
    const [current, setCurrent] = useState<Ingredients>(Ingredients.BUN);

    const {ingredients} = useSelector(state => state.dataReducer)

    const productList: ParsedDataProps = ingredients.reduce((acc, product) => {
        if (!acc[product.type]){
            acc[product.type] = [];
        }
        acc[product.type].push(product);
        return acc;
    }, {} as { [key: string]: Product[] });

    const tabClickHandler:(tab:Ingredients) => void = (tab) => {
        setCurrent(tab);
        const element:HTMLElement | null = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    const [bunsRef, bunsInView] = useInView({ threshold: 0 });
    const [saucesRef, saucesInView] = useInView({ threshold: 0 });
    const [mainRef, mainInView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (bunsInView) {
            setCurrent(Ingredients.BUN);
        } else if (saucesInView) {
            setCurrent(Ingredients.SAUCE);
        } else if (mainInView) {
            setCurrent(Ingredients.MAIN);
        }
    }, [bunsInView, saucesInView, mainInView]);

    return (
        <div>
            <div className={`${styles.tabs_wrapper }`}>
                <Tab value={Ingredients.BUN} active={current === Ingredients.BUN} onClick={()=>{tabClickHandler(Ingredients.BUN)}}>
                    Булки
                </Tab>
                <Tab value={Ingredients.SAUCE} active={current === Ingredients.SAUCE} onClick={()=>{tabClickHandler(Ingredients.SAUCE)}}>
                    Начинки
                </Tab>
                <Tab value={Ingredients.MAIN} active={current === Ingredients.MAIN} onClick={()=>{tabClickHandler(Ingredients.MAIN)}}>
                    Соусы
                </Tab>
            </div>
            <div className={`${styles.categories} mt-10`}>
                {
                    Object.entries(productList).length &&
                        <>
                            <CategoryWrapper innerRef={bunsRef} type={Ingredients.BUN} products={productList.bun}/>
                            <CategoryWrapper innerRef={mainRef} type={Ingredients.SAUCE} products={productList.main}/>
                            <CategoryWrapper innerRef={saucesRef} type={Ingredients.MAIN} products={productList.sauce}/>
                        </>
                }
            </div>
        </div>
    );
};

export default BurgerIngredients;
