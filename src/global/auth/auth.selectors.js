/**
 * @flow
 */

import { createSelector } from 'reselect'

import type { State } from './auth.reducer'

const authSelector = (state: any): State => state.auth

const isAuthenticated = createSelector(authSelector, (state: State) => state.isAuthenticated)
const currentUser = createSelector(authSelector, (state: State) => state.user)
const authHeader = createSelector(authSelector, (state: State): string =>
  [state.tokenType, state.authToken].filter(Boolean).join(' ')
)

export default {
  isAuthenticated,
  currentUser,
  authHeader,
}
