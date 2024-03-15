import React, {FC, useEffect, useState} from 'react';
import {ProductCardProps, ProductWithUUID} from "../../interfaces/interfaces";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./product-card.module.css"
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import Modal from "../modals/modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {ADD_SELECTED_INGREDIENTS} from "../../services/actions/constructor-action";
import {getProductById, getProductWithUUID, isBun} from "../../utils/utils";
import {SET_CURRENT_INGREDIENT} from "../../services/actions/ingredient-details-action";
import { useDrag } from "react-dnd";
const ProductCard: FC<ProductCardProps> = ({product}) => {
    const [count, setCount] = useState(0)
    const [{isDrag}, dragRef] = useDrag({
        type: "ingredients",
        item: product,
        collect: (monitor: { isDragging: () => any; }) => ({
            isDrag: monitor.isDragging()
        })
    });

    const [isOpen, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    // @ts-ignore
    const {ingredients} = useSelector(state => state.dataReducer);
    // @ts-ignore
    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    const addProduct = (id:string) => {
        const product = getProductById(ingredients, id);

        if (isBun(product)) {
            const topBun = getProductWithUUID(product);
            const bottomBun = getProductWithUUID(product);
            const updatedIngredients = {bun: [topBun, bottomBun],
                     ingredients: selectedIngredients.ingredients}
            dispatch({type: ADD_SELECTED_INGREDIENTS, selectedIngredients: updatedIngredients})
        } else {
            const newProduct: ProductWithUUID = getProductWithUUID(product);
            const updatedIngredients = [...selectedIngredients.ingredients, newProduct]
            dispatch({type: ADD_SELECTED_INGREDIENTS, selectedIngredients: {
                    bun: selectedIngredients.bun,
                    ingredients: updatedIngredients
            }})
        }
    }
    const toOpenModal = () => {
        dispatch({type: SET_CURRENT_INGREDIENT, currentIngredient: product})
        setOpen(true);
    }
    const toCloseModal = () => {
        setOpen(false)
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
        <>
            {
                <div className={`${styles.product_card} mb-3`} onClick={toOpenModal} ref={dragRef}>
                    <img src={product.image} alt={product.name} className={"ml-4 mr-4"}/>
                    <div className={"text text_type_digits-default mt-1 mb-1"} >{product.price}</div>
                    <div className={"text text_type_main-small"}>{product.name}</div>
                    <Counter count={count} size="small" />
                </div>
            }
            {
                isOpen &&
                <Modal title={"Детали ингрединта"} toCloseModal={toCloseModal}>
                    <IngredientDetails/>
                </Modal>
            }
        </>
    )
}

export default ProductCard;