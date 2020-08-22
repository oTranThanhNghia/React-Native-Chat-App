/**
 * @flow
 */

import { createSelector } from 'reselect'
import chatting from '../../global/chatting'
import type { State } from './home.reducer'

const homeSelector = (state: any): State => state.home

const conversationIds = createSelector(homeSelector, (state: State) => state.ids)

const listConversation = chatting.selectors.createListConversationSelector(conversationIds)

const isFetching = createSelector(homeSelector, (state: State) => state.isFetching)

const fetchingError = createSelector(homeSelector, (state: State) => state.fetchingError)

const createdConversation = createSelector(homeSelector, (state: State) => state.createdConversation)

const isCreating = createSelector(homeSelector, (state: State) => state.isCreating)

const creatingError = createSelector(homeSelector, (state: State) => state.creatingError)

export default {
  conversationIds,
  listConversation,
  isFetching,
  fetchingError,
  createdConversation,
  isCreating,
  creatingError,
}
