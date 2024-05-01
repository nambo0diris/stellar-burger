import React, {useEffect} from 'react';
import ProfileNavigation from "../components/profile-navigation/profile-navigation";
import Feed from "../components/feed/feed";
import {RootState, useDispatch, useSelector} from "../services/types/store-and-thunk-types";
import {getUserOrdersConnect} from "../services/actions/ws-get-user-orders-action";
import {getCookie} from "../utils/utils";

const OrderHistory = () => {
    const {user} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const {orders} = useSelector((state: RootState) => state.wsReducerGetUserOrders);

    useEffect(() => {
        const token = getCookie('accessToken');
        const wsUrl = `wss://norma.nomoreparties.space/orders`;
        dispatch(getUserOrdersConnect(`${wsUrl}?token=${token}`))

    }, [dispatch])

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
