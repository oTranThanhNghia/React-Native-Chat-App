/* eslint-disable no-param-reassign */
/**
 * @flow
 */

import { produce } from 'immer'

import actions from './home.actions'
import type { Conversation } from '../../types/local'

export type State = {
  ids: Array<string>,
  isFetching: boolean,
  fetchingError: any,
  createdConversation: ?Conversation,
  creatingError: any,
  isCreating: boolean,
}

const initialState: State = {
  ids: [],
  isFetching: false,
  fetchingError: null,
  createdConversation: null,
  creatingError: null,
  isCreating: false,
}

const homeReducer = produce<any, any>((state: State, action: any) => {
  switch (action.type) {
    case actions.types.FETCH_CONVERSATIONS.REQUEST:
      state.isFetching = true
      state.fetchingError = null
      break
    case actions.types.FETCH_CONVERSATIONS.SUCCESS:
      state.ids = action.payload.map((conversation) => conversation.id)
      state.isFetching = false
      break

    case actions.types.FETCH_CONVERSATIONS.FAILED:
      state.fetchingError = action.payload
      state.isFetching = false
      break

    case actions.types.CREATE_CONVERSATION.REQUEST:
      state.isCreating = true
      state.creatingError = null
      break
    case actions.types.CREATE_CONVERSATION.SUCCESS:
      state.isCreating = false
      state.createdConversation = action.payload
      state.ids.unshift(action.payload.id)
      break
    case actions.types.CREATE_CONVERSATION.FAILED:
      state.isCreating = false
      state.creatingError = action.payload
      break
    case actions.types.ADD_CONVERSATION:
      state.ids.unshift(action.payload.id)
      break
    case actions.types.ADD_MESSAGE:
      state.ids = state.ids.filter((id) => id !== action.payload)
      state.ids.unshift(action.payload)
      break
    // no default
  }
}, initialState)

export default homeReducer
