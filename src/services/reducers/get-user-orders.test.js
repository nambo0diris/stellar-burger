import * as types from '../constants'
import {wsReducerGetUserOrders} from "./get-user-orders";
import {initialState} from "./get-user-orders";

describe('get-user-orders-reducer', () => {
    it('should return the initial state', () => {
        expect(wsReducerGetUserOrders(initialState, {})).toEqual({
            ...initialState
        })
    })
    it('should have handle WS_CONNECTION__ALL_ORDERS_SUCCESS', () => {
        expect(wsReducerGetUserOrders(initialState,{
            type: types.WS_CONNECTION__USER_ORDERS_SUCCESS,
        })).toEqual({
            ...initialState,
            wsConnected: true,
        })

    })
    it('should have handle WS_CONNECTION__ALL_ORDERS_ERROR', () => {

        expect(wsReducerGetUserOrders(initialState,{
            type: types.WS_CONNECTION__USER_ORDERS_ERROR,
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })
    it('should have handle WS_CONNECTION__ALL_ORDERS_CLOSED', () => {
        expect(wsReducerGetUserOrders(initialState,{
            type: types.WS_CONNECTION__USER_ORDERS_CLOSED,
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })
    it('should have handle WS_GET_ALL_ORDERS', () => {
        const payload = {
            orders: [
                {
                    "_id": "663fa9b297ede0001d06a2a3",
                    "ingredients": [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0942"
                    ],
                    "status": "done",
                    "name": "Краторный spicy бургер",
                    "createdAt": "2024-05-11T17:24:02.646Z",
                    "updatedAt": "2024-05-11T17:24:03.316Z",
                    "number": 39789
                },
                {
                    "_id": "663fa99697ede0001d06a2a0",
                    "ingredients": [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0942"
                    ],
                    "status": "done",
                    "name": "Краторный spicy бургер",
                    "createdAt": "2024-05-11T17:23:34.377Z",
                    "updatedAt": "2024-05-11T17:23:35.001Z",
                    "number": 39788
                }
            ],
            total: 2,
            totalToday: 2,
        }
        expect(wsReducerGetUserOrders(initialState,{
            type: types.WS_GET_USER_ORDERS,
            payload
        })).toEqual({
            ...initialState,
            wsConnected: false,
            orders: [
                {
                    "_id": "663fa9b297ede0001d06a2a3",
                    "ingredients": [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0942"
                    ],
                    "status": "done",
                    "name": "Краторный spicy бургер",
                    "createdAt": "2024-05-11T17:24:02.646Z",
                    "updatedAt": "2024-05-11T17:24:03.316Z",
                    "number": 39789
                },
                {
                    "_id": "663fa99697ede0001d06a2a0",
                    "ingredients": [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0942"
                    ],
                    "status": "done",
                    "name": "Краторный spicy бургер",
                    "createdAt": "2024-05-11T17:23:34.377Z",
                    "updatedAt": "2024-05-11T17:23:35.001Z",
                    "number": 39788
                }
            ],
            total: 2,
            totalToday: 2,
        })
    })
})
