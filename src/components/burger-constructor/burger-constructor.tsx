import React, {useEffect, useState} from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import OrderDetails from "../modals/order-details/order-details";
import BurgerLayer from "./burger-layer";
import {useDispatch, useSelector} from "react-redux";
import {GET_ORDER_RESET, getOrder} from "../../services/actions/order-action";
import {useDrop} from "react-dnd";
import {ADD_SELECTED_INGREDIENTS, REMOVE_SELECTED_INGREDIENTS} from "../../services/actions/constructor-action";
import {getProductWithUUID} from "../../utils/utils";
import {ProductWithUUID} from "../../interfaces/interfaces";
import FillingElement from "./filling-element/filling-element";
import BunElement from "./bun-element/bun-element";

const BurgerConstructor = () => {
    // @ts-ignore
    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    // @ts-ignore
    const {success} = useSelector(state => state.orderReducer);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
        accept: "ingredients",
        drop(item) {
            // @ts-ignore
            if (item.type === 'bun') {
                // @ts-ignore
                const top = getProductWithUUID(item)
                // @ts-ignore
                const bottom = getProductWithUUID(item)
                dispatch({type:ADD_SELECTED_INGREDIENTS, selectedIngredients: {ingredients:[...selectedIngredients.ingredients], bun: [top, bottom]}});
            } else {
                // @ts-ignore
                const withUUID = getProductWithUUID(item)
                dispatch({type:ADD_SELECTED_INGREDIENTS, selectedIngredients: {ingredients:[...selectedIngredients.ingredients, withUUID], bun: [...selectedIngredients.bun]}});
            }
        },
    });
    const toCloseModal = () => {
        setOpen(false)
        dispatch({type: GET_ORDER_RESET})
    }

    const makeOderHandler = async () => {
        if(selectedIngredients.bun.length){
            const ingredients = [...selectedIngredients.bun, ...selectedIngredients.ingredients].map(ingredients => ingredients._id)
            // @ts-ignore
            dispatch(getOrder(ingredients));
            dispatch({type: REMOVE_SELECTED_INGREDIENTS})
            setOpen(true)
        }

    }
    useEffect(() => {
        const ingredients = [...selectedIngredients.bun, ...selectedIngredients.ingredients]
        const amount = ingredients.reduce((acc, currentValue) => {
            return acc + currentValue.price;
        },0)
        setTotalAmount(amount);
    },[selectedIngredients]);

    return (
        <>
            <div ref={dropTarget} className={`${styles.constructor_wrapper}`}>
                <BunElement type={"top"}/>
                <div className={styles.filling_element_wrapper}>
                    {
                        selectedIngredients.ingredients.length
                            ?
                        selectedIngredients.ingredients.map((ingredient:ProductWithUUID, id: number) =>
                            <FillingElement ingredient={ingredient} key={ingredient.uuid} index={id}/>)
                            :
                            <div className={`${styles.constructor_line}`}>
                                <BurgerLayer position={"between"}/>
                            </div>
                    }

                </div>
                <BunElement type={"bottom"}/>
            </div>
            <div className={`${styles.constructor_footer} mt-10 mb-10`}>
                <div className={`${styles.total}`}>
                    <div className={"text text_type_digits-medium"}>{totalAmount}</div>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={makeOderHandler}>
                    Оформить заказ
                </Button>
            </div>
            {
                success && isOpen &&
                <OrderDetails toCloseModal={toCloseModal}/>
            }
        </>
    );
};

export default BurgerConstructor;