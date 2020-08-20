/**
 * @flow
 */

import client from './client'
import auth from '../global/auth'
import { STATUS_UNAUTHORIZED } from '../config/constants'

import type { Response } from '../types/local'

const createApiHandler = (dispatch: any, getState: any) => async <T>(
  apiCall: () => Promise<Response<T>>
): Promise<Response<T>> => {
  const state = getState()
  const authHeader = auth.selectors.authHeader(state)
  client.authHeader = authHeader

  try {
    return await apiCall()
  } catch (error) {
    if (error.response?.status === STATUS_UNAUTHORIZED) {
      dispatch(auth.actions.logout())
    }
    throw error
  }
}

export default createApiHandler
