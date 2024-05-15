import {orderReducer, initialState} from './order-reducer';
import * as types from '../constants/order';

describe('OrderReducer', () => {
    it('should return the initial state', () => {
        expect(orderReducer(initialState,{})).toEqual({
            ...initialState
        })
    })
    it(`should have handle MAKE_ORDER_REQUEST`, () => {
        expect(orderReducer(initialState, {
            type: types.MAKE_ORDER_REQUEST
        })).toEqual({
            ...initialState,
            makeOrderRequest: true,
        })
    })
    it(`should have handle MAKE_ORDER_FAILED`, () => {
        expect(orderReducer(initialState, {
            type: types.MAKE_ORDER_FAILED
        })).toEqual({
           ...initialState,
            makeOrderFailed: true,


        })
    })
    it(`should have handle MAKE_ORDER_SUCCESS`, () => {

        const action = {
            name: "OrderName",
            success: true,
            order: {}
        }
        expect(orderReducer(initialState, {
            type: types.MAKE_ORDER_SUCCESS,
            ...action
        })).toEqual({
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            makeOrderSuccess: true,
            makeOrderFailed: false,
            makeOrderRequest: false,
            currentOrder: null,
            name: "OrderName",
            success: true,
            order: {}
        })
    })
    it(`should have handle MAKE_ORDER_RESET`, () => {
        expect(orderReducer(undefined, {
            type: types.MAKE_ORDER_RESET
        })).toEqual({
           ...initialState,
            name: null,
            success: null,
            order: null
        })
    })
    it(`should have handle GET_ORDER_REQUEST`, () => {
        expect(orderReducer(undefined, {
            type: types.GET_ORDER_REQUEST
        })).toEqual({
            ...initialState,
            getOrderRequest: true,
        })
    })
    it(`should have handle GET_ORDER_FAILED`, () => {
        expect(orderReducer(undefined, {
            type: types.GET_ORDER_FAILED,
        })).toEqual({
            ...initialState,
            getOrderFailed: true,
        })
    })
    it(`should have handle GET_ORDER_SUCCESS`, () => {
        const currentOrder = {}
        expect(orderReducer(initialState, {
            type: types.GET_ORDER_SUCCESS,
            currentOrder
        })).toEqual({
            ...initialState,
            getOrderSuccess: true,
            currentOrder
        })
    })
    it(`should have handle SET_CURRENT_ORDER`, () => {
        const currentOrder = {}
        expect(orderReducer(initialState, {
            type: types.SET_CURRENT_ORDER,
            currentOrder
        })).toEqual({
            ...initialState,
            currentOrder,
        })
    })
    it(`should have handle REMOVE_CURRENT_ORDER`, () => {
        expect(orderReducer(initialState, {
            type: types.REMOVE_CURRENT_ORDER
        })).toEqual({
            ...initialState,
            currentOrder: null,
        })
    })
})