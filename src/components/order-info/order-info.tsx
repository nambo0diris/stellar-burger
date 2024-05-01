import React, {useEffect, useMemo} from 'react';
import styles from "./order-info.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../../services/types/store-and-thunk-types";
import {Product} from "../../interfaces/interfaces";
import {pastTime} from "../../utils/utils";
import {useLocation} from "react-router-dom";
import {getOrder} from "../../services/actions/order-action";


const OrderInfo = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const {ingredients} = useSelector(state => state.dataReducer)
    const {currentOrder} = useSelector((state) => state.orderReducer)

    useEffect(() => {
        const orderNumber = location.pathname.split('/')[2];
        dispatch(getOrder(orderNumber))
    }, []);



    const orderInfo = useMemo(()=>{
        if (currentOrder) {
            const ingredientsCount: any = {}
            const ingredientsInfo: Product[] = currentOrder?.ingredients.reduce((acc, currentValue,idx)=>{
                const ingredient = ingredients.find((_ingredient)=>_ingredient._id===currentValue)
                if (ingredient) {
                    acc.push(ingredient)
                }
                if (!ingredientsCount[`${ingredient?._id}`]) {
                    ingredientsCount[`${ingredient?._id}`] = {...ingredient, count: 1}
                } else {
                    ingredientsCount[`${ingredient?._id}`] = {...ingredient, count: ingredientsCount[`${ingredient?._id}`].count + 1}
                }
                return acc
            },[] as Product[])




            const createdTime = pastTime(currentOrder.createdAt)
            const total = ingredientsInfo.reduce((acc, currentValue) => {
                return acc + currentValue.price
            },0)
            const remains = ingredientsInfo.length > 6 ? ingredientsInfo.length - 6 : null;

            return {
                ingredientsCount,
                ingredientsInfo,
                createdTime,
                total,
                remains
            }
        }

    },[currentOrder, ingredients])
    if (currentOrder){

        return (
            <div className={`${styles.orderInfo}`}>
                <div className={`${styles.orderInfoNumber} text text_type_digits-default`}>{`#` + currentOrder.number}</div>
                <div className={`${styles.orderInfoTitleAndStatus}`}>
                    <div className={`${styles.orderInfoTitle} text text_type_main-medium`}>{currentOrder.name}</div>
                    <div className={`${styles.orderInfoStatus} text text_type_main-small`}>{currentOrder.status==="done" ? "Выполнено": "В работе"}</div>
                </div>
                <div className={`${styles.orderInfoIngredientsWrapper}`}>
                    <p className={`${styles.orderInfoIngredientsTitle} text text_type_main-medium`}>Состав:</p>
                    <div className={`${styles.orderInfoIngredients}`}>
                        {orderInfo && Object.entries(orderInfo.ingredientsCount).map((ingredient:any)=>{
                            return (
                                <div className={`${styles.orderInfoIngredient}`} key={ingredient[1]._id}>
                                    <div className={`${styles.ingredientPic}`}><img src={ingredient[1].image_mobile} alt=""/></div>
                                    <div className={`${styles.ingredientName} text text_type_main-small`}>{ingredient[1].name}</div>
                                    <div className={`${styles.ingredientAmountAndCost} text text_type_digits-default`}>
                                        {ingredient[1].count + `x` +ingredient[1].price}
                                        <CurrencyIcon type={"primary"}/>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className={`${styles.orderInfoDateAndPrice}`}>
                    <div className={`${styles.orderInfoDate} text text_type_main-small`}></div>
                    <div className={`${styles.orderInfoPrice} text text_type_digits-default`}>
                        {orderInfo?.total}
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }

};

export default OrderInfo;
