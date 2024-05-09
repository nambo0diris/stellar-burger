import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from 'react-redux'
import { store } from '../store';
import {TConstructorActions} from "../actions/constructor-action";
import {TDataActions} from "../actions/data-action";
import {TIngredientsDetailsActions} from "../actions/ingredient-details-action";
import {TOrderActions} from "../actions/order-action";
import {TUserActions} from "../actions/user-action";
import {TGetUserOrdersActions} from "../actions/ws-get-user-orders-action";
import {TGetAllOrdersActions} from "../actions/ws-get-all-orders-action";




export type TApplicationActions =
    TConstructorActions |
    TDataActions |
    TIngredientsDetailsActions |
    TOrderActions |
    TUserActions |
    TGetUserOrdersActions |
    TGetAllOrdersActions


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>
export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
