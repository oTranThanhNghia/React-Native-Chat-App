/**
 * @flow
 */

import { LoginApi } from '../../api'
import authActions from '../../global/auth/auth.actions'

const types = {
  LOGIN: {
    FETCH: 'LOGIN.FETCH',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILED: 'LOGIN.FAILED',
  },
}

// eslint-disable-next-line no-unused-vars
const login = (userName: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.LOGIN.FETCH })
  try {
    const { data, metadata } = await LoginApi.login(userName)
    dispatch({ type: types.LOGIN.SUCCESS })
    dispatch(authActions.setUser(metadata.user))
    dispatch(authActions.setAuthInfo({ ...data, isAuthenticated: true }))
  } catch (error) {
    dispatch({ type: types.LOGIN.FAILED, payload: error })
  }
}

export default {
  types,
  login,
}
