import {orderReducer} from './order-reducer';
import * as types from '../constants/order';

describe('OrderReducer', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined,{})).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: null,
            order: null
        })
    })
    it(`should have handle MAKE_ORDER_REQUEST`, () => {
        expect(orderReducer(undefined, {
            type: types.MAKE_ORDER_REQUEST
        })).toEqual({
            makeOrderRequest: true,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: null,
            order: null
        })
    })
    it(`should have handle MAKE_ORDER_FAILED`, () => {
        expect(orderReducer(undefined, {
            type: types.MAKE_ORDER_FAILED
        })).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: true,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: null,
            order: null

        })
    })
    it(`should have handle MAKE_ORDER_SUCCESS`, () => {

        const action = {
            name: "OrderName",
            success: true,
            order: {}
        }
        expect(orderReducer(undefined, {
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
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            makeOrderRequest: false,
            currentOrder: null,
            name: null,
            success: null,
            order: null
        })
    })
    it(`should have handle GET_ORDER_REQUEST`, () => {
        expect(orderReducer(undefined, {
            type: types.GET_ORDER_REQUEST
        })).toEqual({
            getOrderRequest: true,
            getOrderSuccess: false,
            getOrderFailed: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            makeOrderRequest: false,
            currentOrder: null,
            name: null,
            success: null,
            order: null
        })
    })
    it(`should have handle GET_ORDER_FAILED`, () => {
        expect(orderReducer(undefined, {
            type: types.GET_ORDER_FAILED,
        })).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: true,
            name: null,
            success: null,
            currentOrder: null,
            order: null
        })
    })
    it(`should have handle GET_ORDER_SUCCESS`, () => {
        const currentOrder = {}
        expect(orderReducer(undefined, {
            type: types.GET_ORDER_SUCCESS,
            currentOrder
        })).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: true,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: {},
            order: null
        })
    })
    it(`should have handle SET_CURRENT_ORDER`, () => {
        const currentOrder = {}
        expect(orderReducer(undefined, {
            type: types.SET_CURRENT_ORDER,
            currentOrder
        })).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: {},
            order: null
        })
    })
    it(`should have handle REMOVE_CURRENT_ORDER`, () => {
        expect(orderReducer(undefined, {
            type: types.REMOVE_CURRENT_ORDER
        })).toEqual({
            makeOrderRequest: false,
            makeOrderSuccess: false,
            makeOrderFailed: false,
            getOrderRequest: false,
            getOrderSuccess: false,
            getOrderFailed: false,
            name: null,
            success: null,
            currentOrder: null,
            order: null
        })
    })
})
