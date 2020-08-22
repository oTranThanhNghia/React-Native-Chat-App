/**
 * @flow
 */
import { createSelector } from 'reselect'

import type { State } from './detail.reducer'

const detailSelector = (state): State => state.detail

const conversationId = createSelector(detailSelector, (state) => state.id)

const isFetching = createSelector(detailSelector, (state) => state.isFetching)

const fetchingError = createSelector(detailSelector, (state) => state.fetchingError)

const isSending = createSelector(detailSelector, (state) => state.isSending)

const sendingError = createSelector(detailSelector, (state) => state.sendingError)

export default {
  conversationId,
  isFetching,
  fetchingError,
  isSending,
  sendingError,
}
