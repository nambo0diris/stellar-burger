import {
    WS_CONNECTION__ALL_ORDERS_SUCCESS,
    WS_CONNECTION__ALL_ORDERS_ERROR,
    WS_CONNECTION__ALL_ORDERS_CLOSED,
    WS_GET_ALL_ORDERS
} from '../constants';

import { TGetAllOrdersActions } from '../actions/ws-get-all-orders-action'
import {IOrderTypes} from "../../interfaces/interfaces";

interface IGetAllOrdersState {
    wsConnected: boolean,
    orders: null | IOrderTypes[],
    total: number,
    totalToday: number,
}

const initialState: IGetAllOrdersState = {
    wsConnected: false,
    orders: null,
    total: 0,
    totalToday: 0,
};

export const wsReducerGetAllOrders = (state = initialState, action: TGetAllOrdersActions): IGetAllOrdersState => {
    switch (action.type) {
        case WS_CONNECTION__ALL_ORDERS_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_CONNECTION__ALL_ORDERS_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case WS_CONNECTION__ALL_ORDERS_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_GET_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
};
