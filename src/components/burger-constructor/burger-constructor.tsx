import React, {useEffect, useState} from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import OrderDetails from "../modals/order-details/order-details";
import BurgerLayer from "./burger-layer";
import {useDispatch, useSelector} from "../../services/types/store-and-thunk-types";
import {makeOrder, makeOrderRequestAction} from "../../services/actions/order-action";
import {useDrop} from "react-dnd";
import {ADD_SELECTED_INGREDIENTS} from "../../services/constants";
import {getProductWithUUID} from "../../utils/utils";
import {Product, ProductWithUUID} from "../../interfaces/interfaces";
import FillingElement from "./filling-element/filling-element";
import BunElement from "./bun-element/bun-element";
import {useLocation, useNavigate} from "react-router-dom";
import {removeSelectedIngredientsAction} from "../../services/actions/constructor-action";

const BurgerConstructor = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const url:string = window.location.href;
    const {user} = useSelector(state => state.userReducer);
    const {selectedIngredients} = useSelector(state => state.constructorReducer);
    const {success} = useSelector(state => state.orderReducer);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
        accept: "ingredients",
        drop(item: Product) {
            if (item.type === 'bun') {
                const top:ProductWithUUID = getProductWithUUID(item)
                const bottom:ProductWithUUID = getProductWithUUID(item)

                dispatch({
                    type:ADD_SELECTED_INGREDIENTS,
                    selectedIngredients: {
                        ingredients:[...selectedIngredients.ingredients],
                        bun: [top, bottom]}
                });
            } else {
                const withUUID:ProductWithUUID = getProductWithUUID(item)

                dispatch({
                    type:ADD_SELECTED_INGREDIENTS,
                    selectedIngredients: {
                        ingredients:[...selectedIngredients.ingredients, withUUID],
                        bun: [...selectedIngredients.bun]}
                });
            }
        },
    });
    const toCloseModal:() => void = () => {
        setOpen(false)
        dispatch(makeOrderRequestAction())
    }

    const makeOderHandler: () => void = () => {
        if (!user) {
            navigate('/login', { state: [{ path: pathname, url, title: 'Login' }], replace: false });
        } else {
            if (selectedIngredients.bun.length) {

                const ingredients: (string| undefined)[]  = [...selectedIngredients.bun, ...selectedIngredients.ingredients].map(ingredients => ingredients._id)

                dispatch(makeOrder(ingredients));
                dispatch(removeSelectedIngredientsAction())
                setOpen(true)
            }
        }



    }
    useEffect(() => {
        const ingredients: Product[] = [...selectedIngredients.bun, ...selectedIngredients.ingredients]
        const amount = ingredients.reduce((acc, currentValue) => {
            return acc + currentValue.price;
        },0)
        setTotalAmount(amount);
        console.log(selectedIngredients)
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
                isOpen &&
                <OrderDetails toCloseModal={toCloseModal}/>
            }
        </>
    );
};

export default BurgerConstructor;
