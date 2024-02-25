import React, {FC} from 'react';
import Modal from "../modal/modal";
import done from "../../../asssets/images/done.png"
import styles from "./order-details.module.css"
interface OrderDetailsProps {
    toCloseModal:()=>void
}
const OrderDetails: FC<OrderDetailsProps> = ({toCloseModal}) => {
    return (
        <Modal  toCloseModal={toCloseModal}>
            <>
                <div className={`text text_type_digits-large mb-8`}>034526</div>
                <div className={`text text_type_main-medium`}>идентификатор заказа</div>
                <img src={done} className={`mt-15 mb-15 ${styles.done_img}`}/>
                <div className={`text text_type_main-small mb-2`}>Ваш заказ начали готовить</div>
                <div className={`text text_type_main-small  ${styles.start_cook}`}>Дождитесь готовности на арбитальной станции</div>
            </>
        </Modal>
    );
};

export default OrderDetails;