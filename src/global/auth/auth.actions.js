/**
 * @flow
 */
import rootActions from '../../redux/root.actions'
import type { User, AuthInfo } from '../../types/local'

const types = {
  SET_USER: 'SET_USER',
  SET_AUTH_INFO: 'SET_AUTH_INFO',
}

const setUser = (user: User) => ({ type: types.SET_USER, payload: user })
const setAuthInfo = (authInfo: AuthInfo) => ({ type: types.SET_AUTH_INFO, payload: authInfo })

// eslint-disable-next-line no-unused-vars
const logout = () => (dispatch: any, getState: any) => {
  dispatch(setAuthInfo({ isAuthenticated: false, authToken: '', tokenType: '' }))
  dispatch(rootActions.resetState())
}

export default {
  types,
  setUser,
  setAuthInfo,
  logout,
}
