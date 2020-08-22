/**
 * @flow
 */
import type { Conversation, Message } from '../../types/local'

const types = {
  SET_LIST_CONVERSATION: 'CHATTING.SET_LIST_CONVERSATION',
  SET_CONVERSATION: 'CHATTING.SET_CONVERSATION',
  ADD_MESSAGE: 'CHATTING.ADD_MESSAGE',
}

const setListConversation = (listConversation: Array<Conversation>) => ({
  type: types.SET_LIST_CONVERSATION,
  payload: listConversation,
})

const setConversation = (conversation: Conversation) => ({
  type: types.SET_CONVERSATION,
  payload: conversation,
})

const addMessage = (conversationId: string, message: Message) => ({
  type: types.ADD_MESSAGE,
  payload: {
    conversationId,
    message,
  },
})

export default {
  types,
  setListConversation,
  setConversation,
  addMessage,
}
