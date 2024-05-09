import React from 'react';
import styles from './orders-status.module.css';
import {RootState, useSelector} from "../../../services/types/store-and-thunk-types";

const OrdersStatus = () => {
    const {orders} = useSelector((state) => state.wsReducerGetAllOrders);

    return (
        <div className={`${styles.ordersStatusWrapper}`}>
            <div className={`${styles.ordersStatus}`}>
                <div className={`${styles.ordersStatusTitle} text text_type_main-medium`}>Готовы:</div>
                <div className={`${styles.ordersList}`}>
                    {orders?.map((order, id) => {
                        if(order.status==="done"){
                            return (
                                <div key={order._id} className={`${styles.orderItem} text text_type_digits-default`}>{order.number}</div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className={`${styles.ordersStatus}`}>
                <div className={`${styles.ordersStatusTitle} text text_type_main-medium`}>В работе:</div>
                <div className={`${styles.ordersList}`}>
                    {orders?.map((order) => {
                        if(order.status!=="done"){
                            return (
                                <div className={`${styles.orderItem} text text_type_digits-default`}>{order.number}</div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default OrdersStatus;
