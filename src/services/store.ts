import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancers(
    // @ts-ignore
    applyMiddleware(thunk)
);

// @ts-ignore
export const store = createStore(rootReducer, enhancer);