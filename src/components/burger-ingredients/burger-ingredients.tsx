import React, {useEffect, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {ParsedDataProps, Product} from "../../interfaces/interfaces";
import CategoryWrapper from "./category-wrapper/category-wrapper";
import styles from "./burger-ingredients.module.css";
import {useSelector} from "react-redux";
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('bun');
    // @ts-ignore
    const {ingredients} = useSelector(state => state.dataReducer)
    // @ts-ignore
    const productList: ParsedDataProps = ingredients.reduce((acc, product) => {
        if (!acc[product.type]){
            acc[product.type] = [];
        }
        acc[product.type].push(product);
        return acc;
    }, {} as { [key: string]: Product[] });
    console.log(productList)
    const tabClickHandler = (tab:string) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    const [bunsRef, bunsInView] = useInView({ threshold: 0 });
    const [saucesRef, saucesInView] = useInView({ threshold: 0 });
    const [mainRef, mainInView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (bunsInView) {
            setCurrent("bun");
        } else if (saucesInView) {
            setCurrent("sauce");
        } else if (mainInView) {
            setCurrent("main");
        }
    }, [bunsInView, saucesInView, mainInView]);

    return (
        <div>
            <div className={`${styles.tabs_wrapper }`}>
                <Tab value="bun" active={current === 'bun'} onClick={()=>{tabClickHandler("bun")}}>
                    Булки
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={()=>{tabClickHandler("main")}}>
                    Начинки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={()=>{tabClickHandler("sauce")}}>
                    Соусы
                </Tab>
            </div>
            <div className={`${styles.categories} mt-10`}>
                <CategoryWrapper innerRef={bunsRef} type={"bun"} products={productList.bun}/>
                <CategoryWrapper innerRef={mainRef} type={"main"} products={productList.main}/>
                <CategoryWrapper innerRef={saucesRef} type={"sauce"} products={productList.sauce}/>
            </div>
        </div>
    );
};

export default BurgerIngredients;