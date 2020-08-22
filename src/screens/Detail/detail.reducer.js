/**
 * @flow
 */

import { produce } from 'immer'
import actions from './detail.actions'

export type State = {
  id: ?string,
  isFetching: boolean,
  fetchingError: any,
  sendingError: any,
  isSending: boolean,
}

const initialState: State = {
  id: null,
  isFetching: true,
  fetchingError: null,
  sendingError: null,
  isSending: false,
}

/* eslint-disable no-param-reassign */
const detailReducer = produce<any, any>((state, action) => {
  switch (action.type) {
    case actions.types.FETCH_CONVERSATION.REQUEST:
      state.id = action.payload
      state.isFetching = true
      state.fetchingError = null
      break

    case actions.types.FETCH_CONVERSATION.SUCCESS:
      state.isFetching = false
      break

    case actions.types.FETCH_CONVERSATION.FAILED:
      state.isFetching = false
      state.fetchingError = action.payload
      break

    case actions.types.SEND_MESSAGE.REQUEST:
      state.isSending = true
      state.fetchingError = null
      break

    case actions.types.SEND_MESSAGE.SUCCESS:
      state.isSending = false
      break

    case actions.types.SEND_MESSAGE.FAILED:
      state.isSending = false
      state.sendingError = action.payload
      break

    case actions.types.RESET_STATE:
      Object.entries(initialState).forEach(([key, value]) => {
        state[key] = value
      })
      break

    // no default
  }
}, initialState)

export default detailReducer
