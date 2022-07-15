import RootReducer from "../Redux/RootReducer"
import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import RootSagas from "../Redux/Sagas/RootSagas"
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const middleware = []
    const enhancers = []

    middleware.push(sagaMiddleware)
    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(RootReducer, composeWithDevTools(compose(...enhancers)))
    sagaMiddleware.run(RootSagas)
    return store
}

export default configureStore
