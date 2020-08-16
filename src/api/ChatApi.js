/**
 * @flow
 */

import client from './client'
import type { ConversationApi, MessageApi, UserApi } from '../types/api'
import type { Conversation, Message, User, Response } from '../types/local'

export const parseUser = (data: UserApi): User => ({
  id: data._id,
  name: data.username,
})

export const parseMessage = (data: MessageApi): Message => ({
  id: data._id,
  content: data.content,
  sender: parseUser(data.sender),
  seenBy: data.seenBy.map(parseUser),
  createdAt: new Date(data.createdAt),
})

export const parseConversation = (data: ConversationApi): Conversation => ({
  id: data._id,
  members: data.members.map(parseUser),
  messages: data.messages.map(parseMessage),
})

const createConversation = async (userName: string): Promise<Response<Conversation>> => {
  const response = await client.request({
    method: 'post',
    url: '/conversations',
    data: { members: [userName] },
  })

  return {
    data: parseConversation(response.data),
    metadata: {},
  }
}

const fetchConversations = async (): Promise<Response<Array<Conversation>>> => {
  const response = await client.request({
    method: 'get',
    url: '/conversations',
  })

  return {
    data: response.data.map(parseConversation),
    metadata: {},
  }
}

const fetchConversation = async (id: string): Promise<Response<Conversation>> => {
  const response = await client.request({
    method: 'get',
    url: `/conversations/${id}/messages`,
  })

  return {
    data: {
      id,
      messages: response.data.map(parseMessage),
      members: [],
    },
    metadata: {},
  }
}

export default {
  fetchConversation,
  fetchConversations,
  createConversation,
}
