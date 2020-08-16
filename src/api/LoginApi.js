/**
 * @flow
 */

import client from './client'

import type { UserApi } from '../types/api'
import type { User, Response } from '../types/local'

const parseUser = (data: UserApi): User => ({
  id: data._id,
  name: data.username,
})

const parseAuth = (data: UserApi) => ({
  authToken: data._id,
  tokenType: 'Bearer',
})

const login = async (userName: string): Promise<Response<any>> => {
  const response = await client.request({
    method: 'post',
    url: '/users/sign_in',
    data: { username: userName },
  })
  return {
    data: parseAuth(response.data),
    metadata: {
      user: parseUser(response.data),
    },
  }
}

export default {
  login,
}
