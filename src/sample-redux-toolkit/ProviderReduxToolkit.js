import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import  {counterReducer}  from './store/reducer'

export default function ProviderReduxToolkit({ children }) {

    const store = configureStore({
        reducer: {
            counter: counterReducer
        },
    })

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

