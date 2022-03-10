import React from 'react'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducer';

export default function ProviderRedux({ children }) {

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    const store = createStore(
        rootReducer,
        composeEnhancer(
            compose,
            applyMiddleware(thunk),
        ),
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}


// store.subscribe(render)