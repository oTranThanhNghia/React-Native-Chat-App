/**
 * @flow
 */

import { createActionsSet } from '../../utils'
import { ChatApi } from '../../api'
import createApiHandler from '../../api/createApiHandler'
import chattingActions from '../../global/chatting/chatting.actions'
import type { Conversation } from '../../types/local'

const types = {
  FETCH_CONVERSATION: createActionsSet.api('DETAIL.FETCH_CONVERSATION'),
  SEND_MESSAGE: createActionsSet.api('DETAIL.SEND_MESSAGE'),
  RESET_STATE: 'DETAIL.RESET_STATE',
}

const fetchConversation = (id: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.FETCH_CONVERSATION.REQUEST, payload: id })
  try {
    const response = await createApiHandler(dispatch, getState)<Conversation>(() => ChatApi.fetchConversation(id))
    dispatch(chattingActions.setConversation(response.data))
    dispatch({ type: types.FETCH_CONVERSATION.SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.FETCH_CONVERSATION.FAILED, payload: error })
  }
}

const sendMessage = (conversationId: string, message: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.SEND_MESSAGE.REQUEST })
  try {
    const response = await createApiHandler(
      dispatch,
      getState
    )<any>(() => ChatApi.createMessgae(conversationId, message))
    dispatch(chattingActions.addMessage(conversationId, response.data))
    dispatch({ type: types.SEND_MESSAGE.SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.SEND_MESSAGE.FAILED, payload: error })
  }
}

const resetState = () => ({ type: types.RESET_STATE })

export default {
  types,
  fetchConversation,
  sendMessage,
  resetState,
}
