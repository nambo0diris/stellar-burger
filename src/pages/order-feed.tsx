import React, {useEffect} from 'react';
import Feed from "../components/feed/feed";
import OrdersDashboard from "../components/orders-dashboard/orders-dashboard";
import {useDispatch, useSelector} from "../services/types/store-and-thunk-types";
import {closeAllOrders, getAllOrdersConnect} from "../services/actions/ws-get-all-orders-action";

const OrderFeed = () => {
    const dispatch = useDispatch();
    const {orders, wsConnected} = useSelector((state) => state.wsReducerGetAllOrders);
    useEffect(() => {
        const wsUrl = `wss://norma.nomoreparties.space/orders/all`;
        dispatch(getAllOrdersConnect(`${wsUrl}`))

        return () => {
           if (wsConnected) {
               dispatch(closeAllOrders())
           }
        }
    }, [])
    return (
        <>
            <section>
                <h1 className={"text text_type_main-large  mt-10 mb-5"}>Лента заказов</h1>
                <Feed orders={orders}/>
            </section>
            <section className={"pt-25 pl-4 pr-4"}>
                <OrdersDashboard/>
            </section>
        </>
    );
};

export default OrderFeed;
