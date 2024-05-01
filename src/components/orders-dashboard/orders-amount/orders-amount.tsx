import React, {FC} from 'react';
import styles from './orders-amount.module.css';

type TOrdersAmountProps = {
    amount: number;
    title: string
}

const OrdersAmount: FC<TOrdersAmountProps> = ({title, amount}) => {
    return (
        <div className={`${styles.ordersAmountWrapper}`}>
            <div className={`${styles.ordersAmountTitle} text text_type_main-medium`}>{title}</div>
            <p className={`${styles.ordersAmount} text text_type_digits-large`}>{amount}</p>
        </div>
    );
};

export default OrdersAmount;
