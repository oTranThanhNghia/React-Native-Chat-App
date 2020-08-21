import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import actions from './root.actions'
import auth from '../global/auth'
import loginReducer from '../screens/Login/login.reducer'

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
  login: loginReducer,
})

export function rootReducer(state, action) {
  switch (action.type) {
    case actions.types.RESET_STATE:
      Object.values(persistKeys).forEach((persistKey) => {
        storage.removeItem(`persist:${persistKey}`).catch(() => {})
      })
      return appReducer(undefined, action)

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
