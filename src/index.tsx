import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {Provider} from "react-redux";
import {rootReducer} from "./services/reducers";
import App from "./components/app";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancers(
    // @ts-ignore
    applyMiddleware(thunk)
);

// @ts-ignore
const store = createStore(rootReducer, enhancer);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
