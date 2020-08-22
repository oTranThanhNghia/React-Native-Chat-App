/**
 * @flow
 */

import { createActionsSet } from '../../utils'
import { ChatApi } from '../../api'
import createApiHandler from '../../api/createApiHandler'
import chattingActions from '../../global/chatting/chatting.actions'
import type { Conversation } from '../../types/local'

const types = {
  FETCH_CONVERSATIONS: createActionsSet.api('HOME.FETCH_CONVERSATION'),
  CREATE_CONVERSATION: createActionsSet.api('HOME.CREATE_CONVERSATION'),
  ADD_CONVERSATION: 'HOME.ADD_CONVERSATION',
  ADD_MESSAGE: 'HOME.ADD_MESSAGE',
}

const fetchConversations = () => async (dispatch: any, getState: any) => {
  dispatch({ type: types.FETCH_CONVERSATIONS.REQUEST })

  try {
    const response = await createApiHandler(dispatch, getState)<Array<Conversation>>(() => ChatApi.fetchConversations())
    dispatch(chattingActions.setListConversation(response.data))
    dispatch({ type: types.FETCH_CONVERSATIONS.SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.FETCH_CONVERSATIONS.FAILED, payload: error })
  }
}

const createConversation = (userName: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.CREATE_CONVERSATION.REQUEST })
  try {
    const response = await createApiHandler(
      dispatch,
      getState
    )<Conversation>(() => ChatApi.createConversation(userName))
    dispatch(chattingActions.setConversation(response.data))
    dispatch({ type: types.CREATE_CONVERSATION.SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.CREATE_CONVERSATION.FAILED, payload: error })
  }
}

const addNewConversation = () => (dispatch: any, getState: any) => {
  dispatch({ type: types.ADD_CONVERSATION })
}

const addNewLastMessage = () => (dispatch: any) => {
  dispatch({ type: types.ADD_MESSAGE })
}

export default {
  types,
  fetchConversations,
  createConversation,
}
