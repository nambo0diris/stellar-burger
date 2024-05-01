import React from 'react';
import styles from './orders-dashboard.module.css'
import OrdersStatus from "./orders-status/orders-status";
import OrdersAmount from "./orders-amount/orders-amount";
import {RootState, useSelector} from "../../services/types/store-and-thunk-types";

const OrdersDashboard = () => {
    const {orders,total, totalToday} = useSelector((state: RootState) => state.wsReducerGetAllOrders);
    return (
        <div className={`${styles.ordersDashboard}`}>
            <OrdersStatus/>
            <OrdersAmount amount={total} title={`Выполнено за все время:`}/>
            <OrdersAmount amount={totalToday} title={`Выполнено за сегодня:`}/>
        </div>
    );
};

export default OrdersDashboard;
