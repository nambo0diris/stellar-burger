import React, {FC, useEffect} from 'react';
import Modal from "../modal/modal";
import done from "../../../asssets/images/done.png"
import styles from "./order-details.module.css"
import {useSelector} from "../../../services/types/store-and-thunk-types";
interface OrderDetailsProps {
    toCloseModal:()=>void
}
const OrderDetails: FC<OrderDetailsProps> = ({toCloseModal}) => {
    const {order, makeOrderRequest} = useSelector(state => state.orderReducer);
    useEffect(() => {
        console.log(order)
    }, [order]);
    return (
        <Modal  toCloseModal={toCloseModal}>
            {order &&
                <>
                    <div className={`text text_type_digits-large mb-8`}>{order?.number}</div>
                    <div className={`text text_type_main-medium`}>идентификатор заказа</div>
                    <img src={done} className={`mt-15 mb-15 ${styles.done_img}`} alt={"done"}/>
                    <div className={`text text_type_main-small mb-2`}>Ваш заказ начали готовить</div>
                    <div className={`text text_type_main-small  ${styles.start_cook}`}>Дождитесь готовности на
                        арбитальной станции
                    </div>
                </>
            }
            {makeOrderRequest &&
                <>
                    <div className={`text text_type_main-medium`}>Заказ оформляется...</div>
                </>
            }

        </Modal>
    );
};

export default OrderDetails;
