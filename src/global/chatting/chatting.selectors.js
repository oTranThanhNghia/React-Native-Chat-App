/**
 * @flow
 */

import { createSelector } from 'reselect'

import type { State } from './chatting.reducer'

const chattingSelector = (state: any): State => state.chatting

const listConversation = createSelector(chattingSelector, (state: State) => state.conversations)

const createListConversationSelector = (idsSelector: any) =>
  createSelector(listConversation, idsSelector, (conversations, ids) => ids.map((id) => conversations[id]))

const createConversationSelector = (idSelector: any) =>
  createSelector(listConversation, idSelector, (conversations, id) => conversations[id])

export default {
  listConversation,
  createListConversationSelector,
  createConversationSelector,
}
