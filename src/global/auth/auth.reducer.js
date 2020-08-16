/**
 * @flow
 */
import actions from './auth.actions'

import type { User } from '../../types/local'

export type State = {
  isAuthenticated: boolean,
  user?: User,
}

export const initialState: State = {
  isAuthenticated: false,
  user: undefined,
}

export default function authReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case actions.types.SET_USER: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    }

    default: {
      return state
    }
  }
}
