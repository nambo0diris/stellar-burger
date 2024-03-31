import React, {FC, useEffect, useState} from 'react';
import {ProductCardProps} from "../../interfaces/interfaces";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./product-card.module.css"
import {useDispatch, useSelector} from "react-redux";
import {SET_CURRENT_INGREDIENT} from "../../services/actions/ingredient-details-action";
import { useDrag } from "react-dnd";
import {Link, useLocation} from "react-router-dom";
const ProductCard: FC<ProductCardProps> = ({product}) => {
    const location = useLocation();
    const ingredientId = product._id;
    const [count, setCount] = useState(0)
    const [{isDrag}, dragRef] = useDrag({
        type: "ingredients",
        item: product,
        collect: (monitor: { isDragging: () => any; }) => ({
            isDrag: monitor.isDragging()
        })
    });

    const dispatch = useDispatch();

    // @ts-ignore
    const {selectedIngredients} = useSelector(state => state.constructorReducer);

    const toOpenModal = () => {
        dispatch({type: SET_CURRENT_INGREDIENT, currentIngredient: product})
    }


    useEffect(()=> {
        // @ts-ignore
        const allIngredients = [...selectedIngredients.ingredients, ...selectedIngredients.bun];
        const counter = allIngredients.reduce((acc, current) => {
            return product._id === current._id ? acc + 1 : acc;
        },0)
        setCount(counter)
    },[selectedIngredients])

    return (
        <Link className={`${styles.product_card} mb-3`} key={ingredientId} to={`/ingredient/${ingredientId}`} state={{background: location}}>
            <div className={`${styles.product_card} mb-3`} onClick={toOpenModal} ref={dragRef}>
                <img src={product.image} alt={product.name} className={"ml-4 mr-4"}/>
                <div className={"text text_type_digits-default mt-1 mb-1"} >{product.price}</div>
                <div className={"text text_type_main-small"}>{product.name}</div>
                <Counter count={count} size="small" />
            </div>
        </Link>
    )
}

export default ProductCard;
