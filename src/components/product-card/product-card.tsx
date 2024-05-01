import React, {FC, useEffect, useState} from 'react';
import {Product, ProductCardProps} from "../../interfaces/interfaces";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./product-card.module.css"
import {useDispatch, useSelector} from "react-redux";
import { useDrag } from "react-dnd";
import {Link, Location, useLocation} from "react-router-dom";
import {Dispatch} from "redux";
import {setCurrentIngredientAction} from "../../services/actions/ingredient-details-action";
const ProductCard: FC<ProductCardProps> = ({product}) => {
    const location: Location = useLocation();
    const ingredientId: string = product._id;
    const [count, setCount] = useState<number>(0)
    const [, dragRef] = useDrag({
        type: "ingredients",
        item: product,
        collect: (monitor: { isDragging: () => any; }) => ({
            isDrag: monitor.isDragging()
        })
    });

    const dispatch: Dispatch = useDispatch();

    // @ts-ignore
    const {selectedIngredients} = useSelector(state => state.constructorReducer);

    const toOpenModal:() => void = () => {
        dispatch(setCurrentIngredientAction(product))
    }

    useEffect(() => {
        // @ts-ignore
        const allIngredients:Product[] = [...selectedIngredients.ingredients, ...selectedIngredients.bun];
        const counter: number = allIngredients.reduce((acc, current) => {
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
