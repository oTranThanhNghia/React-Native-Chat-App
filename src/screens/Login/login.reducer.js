/**
 * @flow
 */

import { produce } from 'immer'
import actions from './login.actions'

export type State = {
  isLoading: boolean,
  error: any,
}

const initialState: State = {
  isLoading: false,
  error: null,
}

/* eslint-disable no-param-reassign */
const loginReducer = produce<any, any>((state: State, action: any) => {
  switch (action.type) {
    case actions.types.LOGIN.REQUEST:
      state.isLoading = true
      state.error = null
      break
    case actions.types.LOGIN.SUCCESS:
      state.isLoading = false
      break
    case actions.types.LOGIN.FAILED:
      state.isLoading = false
      state.error = action.payload
      break

    // no default
  }
}, initialState)

export default loginReducer
