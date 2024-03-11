import React, {useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {ParsedDataProps, Product} from "../../interfaces/interfaces";
import CategoryWrapper from "./category-wrapper/category-wrapper";
import styles from "./burger-ingredients.module.css";
import {useSelector} from "react-redux";

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

    const tabClickHandler = (tab:string) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }

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
                {Object.entries(productList).map((product, index) => {
                    return <CategoryWrapper key={index} type={product[0]} products={product[1]}/>;
                })}
            </div>
        </div>
    );
};

export default BurgerIngredients;