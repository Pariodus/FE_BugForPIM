'use client'
import { Provider as ReactReduxProvider } from "react-redux"
import { store } from './store'
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"

export default function ReduxProvider({children}: {children:React.ReactNode}){
    let reduxPersistor = persistStore(store)
    
    return (
        <ReactReduxProvider store={store}>
            {children}
        </ReactReduxProvider>
    )
}