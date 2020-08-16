import authReducer from './auth.reducer'
import authActions from './auth.actions'
import authSelectors from './auth.selectors'

const auth = {
  actions: authActions,
  selectors: authSelectors,
  reducer: authReducer,
}

export default auth
