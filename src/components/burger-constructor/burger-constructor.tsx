import React, {FC, useContext, useEffect, useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {SelectedIngredients} from "../../interfaces/interfaces";
import styles from "./burger-constructor.module.css"
import OrderDetails from "../modals/order-details/order-details";
import BurgerLayer from "./burger-layer";
import {fetchData} from "../../utils/fetch-data";
import {config} from "../../config";
import {OrderDetailsContext, OrderDetailsInterface} from "../context/order-details-context";
interface BurgerConstructorProps {
    selectedIngredients: SelectedIngredients

    removeProduct: (id: string) => void
}
const BurgerConstructor:FC<BurgerConstructorProps> = ({ selectedIngredients, removeProduct }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderContent, setOrderContent] = useState<OrderDetailsInterface>({ name: null,
        success: null,
        order: {
            number:null
        }});
    console.log(orderContent)
    const toCloseModal = () => {
        setOpen(false)
    }

    useEffect(()=>{
        console.log(orderContent)
    },[orderContent])

    const makeOderHandler = async () => {
        const ingredients = [...selectedIngredients.bun, ...selectedIngredients.ingredients].map(ingredients=>ingredients._id)
        const orderDetails = await fetchData(config.orderDetails, {ingredients})
        setOrderContent(orderDetails);
        setOpen(true)
    }

    useEffect(() => {
        const ingredients = [...selectedIngredients.bun, ...selectedIngredients.ingredients]
        const amount = ingredients.reduce((acc, currentValue) => {
            return acc + currentValue.price;
        },0)
        setTotalAmount(amount);
    },[selectedIngredients])
    return (
        <>
            <div className={`${styles.constructor_wrapper}`}>
                {
                    selectedIngredients.bun.length ?
                    <div className={`${styles.constructor_line}`}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={selectedIngredients.bun[0].name}
                            price={200}
                            thumbnail={selectedIngredients.bun[0].image}
                        />
                    </div>
                        :
                    <div className={`${styles.constructor_line}`}>
                        <BurgerLayer position={"top"}/>
                    </div>
                }

                <div style={{maxHeight:"464px", overflowY:"scroll", display:"flex", flexDirection:"column", gap:"16px",marginRight:"-16px"}}>
                    {
                        selectedIngredients.ingredients.length ?
                        selectedIngredients.ingredients.map((ingredient, id)=>{
                            return(
                                <div key={ingredient.uuid} className={`${styles.constructor_line}`}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={ingredient.name}
                                        price={50}
                                        thumbnail={ingredient.image}
                                    />
                                </div>
                            )
                        }) :
                            <div className={`${styles.constructor_line}`}>
                                <BurgerLayer position={"between"}/>
                            </div>
                    }

                </div>
                {
                    selectedIngredients.bun.length ?
                        <div className={`${styles.constructor_line}`}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={selectedIngredients.bun[0].name}
                                price={200}
                                thumbnail={selectedIngredients.bun[0].image}
                            />
                        </div>
                        :
                        <div className={`${styles.constructor_line}`}>
                            <BurgerLayer position={"bottom"}/>
                        </div>
                }
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
            {isOpen &&
                <OrderDetailsContext.Provider value={orderContent}>
                    <OrderDetails toCloseModal={toCloseModal}/>
                </OrderDetailsContext.Provider>
                }
        </>
    );
};

export default BurgerConstructor;