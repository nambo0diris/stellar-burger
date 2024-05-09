import React, {FC, SyntheticEvent, useMemo} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './feed-item.module.css';
import {Link, Location, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentOrder} from "../../../services/actions/order-action";
import {IOrderTypes, Product} from "../../../interfaces/interfaces";
import {useSelector} from "../../../services/types/store-and-thunk-types";
import {pastTime} from "../../../utils/utils";

export type TFeedItemProps = {
    order: IOrderTypes
}

const FeedItem:FC<TFeedItemProps> = ({order}) => {

    const {ingredients} = useSelector(state => state.dataReducer)
    const location: Location = useLocation();
    const path = location.pathname;
    const dispatch = useDispatch();
    const onFeedItemClickHandler = (event: SyntheticEvent) => {
        dispatch(setCurrentOrder(order))
    }


    const orderInfo = useMemo(()=>{
        const ingredientsInfo: Product[] = order.ingredients.reduce((acc, currentValue,idx)=>{
            const ingredient = ingredients.find((_ingredient)=>_ingredient._id===currentValue)
            if (ingredient) {
                acc.push(ingredient)
            }
            return acc
        },[] as Product[])
        const bun = ingredientsInfo.find((ingredient)=>ingredient.type==="bun");
        const updatedIngredientsInfo = ingredientsInfo.filter((ingredient)=>ingredient.type!== "bun");

        if (bun) {
            updatedIngredientsInfo.unshift(bun)
            updatedIngredientsInfo.push(bun)
        }
        const createdTime = pastTime(order.createdAt)
        const total = ingredientsInfo.reduce((acc, currentValue)=>{

           return acc + currentValue.price
        },0)
        const remains = ingredientsInfo.length > 6 ? ingredientsInfo.length - 6 : null;

        return {
            updatedIngredientsInfo,
            createdTime,
            total,
            remains
        }
    },[order, ingredients])



    return (
        <Link className={`${styles.feedItemLink} mb-3`} onClick={onFeedItemClickHandler} key={order.number} to={`${path}`+order.number} state={{background: location}}>
            <div className={`${styles.feedItem} p-6`}>
                <div className={styles.feedItemTop}>
                    <div className={`${styles.feedItemNumber} text text_type_digits-default`}>{`#${order.number}`}</div>
                    <div className={`${styles.feedItemTime}  text text_type_main-small`}>{`${orderInfo.createdTime.daysAgo}, ${orderInfo.createdTime.time}`}</div>
                </div>
                <div className={`${styles.feedItemName} text text_type_main-medium`}>{`${order.name}`}</div>
                <div className={styles.feedItemBottom}>
                    <div className={styles.feedItemIngredients}>
                        {orderInfo && orderInfo.updatedIngredientsInfo.reverse().map((ingredient:Product, idx) => {
                            if(idx<6) return (
                                <div key={idx} className={styles.feedItemPicWrapper}>
                                    <div className={`${styles.feedItemPic}`}>
                                        {idx===0 && orderInfo.remains && (
                                            <div className={`${styles.feedItemPicRemainsWrapper}`}>
                                                <div className={`${styles.feedItemPicRemains} text text_type_digits-default`}>{`+` + orderInfo.remains}</div>
                                            </div>
                                        )}
                                        <img src={`${ingredient.image_mobile}`} alt={`${ingredient.name}`}/>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className={styles.feedItemPriceWrapper}>
                    <div className={`${styles.feedItemPrice} text text_type_digits-medium`}>{orderInfo.total}</div>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeedItem;
