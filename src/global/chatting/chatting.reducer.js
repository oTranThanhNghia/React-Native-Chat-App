/* eslint-disable no-param-reassign */
/**
 * @flow
 */

import { produce } from 'immer'
import lodash from 'lodash'

import actions from './chatting.actions'
import type { Conversation } from '../../types/local'

export type State = {
  conversations: {
    [key: string]: Conversation,
  },
}

const initialState: State = {
  conversations: {},
}

const chattingReducer = produce<any, any>((state: State, action: any) => {
  switch (action.type) {
    case actions.types.SET_LIST_CONVERSATION:
      state.conversations = {
        ...state.conversations,
        ...lodash.keyBy(action.payload, 'id'),
      }
      break

    case actions.types.SET_CONVERSATION: {
      const conversation: Conversation = action.payload
      if (state.conversations[conversation.id]) {
        state.conversations[conversation.id] = {
          ...state.conversations[conversation.id],
          ...conversation,
        }
      }
      break
    }
    case actions.types.ADD_MESSAGE: {
      const { conversationId, message } = action.payload
      state.conversations[conversationId].messages.unshift(message)
    }

    // no default
  }
}, initialState)

export default chattingReducer
