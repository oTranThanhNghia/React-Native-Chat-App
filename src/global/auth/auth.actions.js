/**
 * @flow
 */

import type { User } from '../../types/local'

const types = {
  SET_USER: 'SET_USER',
}

const setUser = (user: User) => ({ type: types.SET_USER, payload: user })

export default {
  types,
  setUser,
}
