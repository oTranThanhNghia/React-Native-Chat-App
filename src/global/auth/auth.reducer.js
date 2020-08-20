/* eslint-disable no-param-reassign */
/**
 * @flow
 */
import { produce } from 'immer'
import actions from './auth.actions'

import type { User } from '../../types/local'

export type State = {
  isAuthenticated: boolean,
  authToken: string,
  tokenType: string,
  user?: User,
}

export const initialState: State = {
  isAuthenticated: false,
  authToken: '',
  tokenType: '',
  user: undefined,
}

const authReducer = produce<any, any>((state: State = initialState, action: any) => {
  switch (action.type) {
    case actions.types.SET_AUTH_INFO:
      state.isAuthenticated = action.payload.isAuthenticated
      state.authToken = action.payload.authToken
      state.tokenType = action.payload.tokenType
      break
    case actions.types.SET_USER:
      state.user = action.payload.user
    // no default
  }
}, initialState)

export default authReducer
