/**
 * @flow
 */

export type Response<Data, Metadata = {}> = {
  data: Data,
  metadata: Metadata,
}

export type AuthInfo = {
  isAuthenticated: boolean,
  authToken: string,
  tokenType: string,
}

export type User = {
  id: string,
  name: string,
}

export type Message = {
  id: string,
  content: string,
  sender: User,
  seenBy: Array<User>,
  createdAt: Date,
}

export type Conversation = {
  id: string,
  members: Array<User>,
  messages: Array<Message>,
}
