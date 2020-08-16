/**
 * @flow
 */

import { createSelector } from 'reselect'

import type { State } from './auth.reducer'

const authSelector = (state: any): State => state.auth

const isAuthenticated = createSelector(authSelector, (state: State) => state.isAuthenticated)
const user = createSelector(authSelector, (state: State) => state.user)

export default {
  isAuthenticated,
  user,
}
