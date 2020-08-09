import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import auth from '../domain/auth'

const storage = AsyncStorage

const persistKeys = {
  root: 'root',
  auth: 'auth',
}

const authPersistConfig = {
  key: persistKeys.auth,
  storage,
}

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth.reducer),
})

export function rootReducer(state, action) {
  switch (action.type) {
    default: {
      return appReducer(state, action)
    }
  }
}

const persistConfig = {
  key: persistKeys.root,
  storage,
  whitelist: [],
}

export default persistReducer(persistConfig, rootReducer)
