/**
 * @flow
 */

export type UserApi = {
  _id: string,
  username: string,
}

export type MessageApi = {
  _id: string,
  content: string,
  sender: UserApi,
  seenBy: Array<UserApi>,
  createdAt: string,
}

export type ConversationApi = {
  _id: string,
  members: Array<UserApi>,
  messages: Array<MessageApi>,
}
