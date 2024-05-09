import React, {useEffect} from 'react';
import ProfileNavigation from "../components/profile-navigation/profile-navigation";
import Feed from "../components/feed/feed";
import {useDispatch, useSelector} from "../services/types/store-and-thunk-types";
import {closeUserOrders, getUserOrdersConnect} from "../services/actions/ws-get-user-orders-action";
import {getCookie} from "../utils/utils";

const OrderHistory = () => {
    const {user} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const {orders, wsConnected} = useSelector((state) => state.wsReducerGetUserOrders);

    useEffect(() => {
        const token = getCookie('accessToken');
        const wsUrl = `wss://norma.nomoreparties.space/orders`;
        dispatch(getUserOrdersConnect(`${wsUrl}?token=${token}`))
        return () => {
            if (wsConnected) {
                dispatch(closeUserOrders())
            }
        }
    }, [])

    if (!user) {
        return null
    }
    return (
        <>
            <ProfileNavigation />
            <Feed orders={orders}/>
        </>
    );
};

export default OrderHistory;
