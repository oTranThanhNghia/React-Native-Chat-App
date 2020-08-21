/**
 * @flow
 */

import { createSelector } from 'reselect'
import type { State } from './login.reducer'

const loginSelector = (state: any): State => state.login

const isLoading = createSelector(loginSelector, (state: State) => state.isLoading)

const error = createSelector(loginSelector, (state: State) => state.error)

export default {
  isLoading,
  error,
}
