import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import reducers from './root.reducer'

// eslint-disable-next-line no-undef
const reduxDevtoolsCompose = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancer = reduxDevtoolsCompose || compose

const middlewares = [logger]

const store = createStore(reducers, composeEnhancer(applyMiddleware(...middlewares)))
const persistor = persistStore(store)

export { store, persistor }
