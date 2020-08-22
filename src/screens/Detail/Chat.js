/**
 * @flow
 */
import React, { useMemo, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import type { IMessage, User as GiftedChatUser } from 'react-native-gifted-chat'
import type { Conversation, User, Message } from '../../types/local'

const toGiftedChatUser = (user: User): GiftedChatUser => {
  return {
    _id: user.id,
    name: user.name,
    avatar: '',
  }
}

const toGiftedChatMessage = (message: Message): IMessage => {
  return {
    _id: message.id,
    text: message.content,
    createdAt: message.createdAt,
    user: toGiftedChatUser(message.sender),
  }
}

const toLocalUser = (user: GiftedChatUser): User => ({
  id: user._id.toString(),
  name: user.name,
})

const toLocalMessage = (message: IMessage): Message => ({
  id: message._id.toString(),
  content: message.text,
  createdAt: new Date(message.createdAt),
  sender: toLocalUser(message.user),
  seenBy: [],
})

const Chat = ({
  conversation,
  currentUser,
  onSend,
}: {
  conversation: Conversation,
  currentUser: User,
  onSend: (message: Message) => void,
}) => {
  const messages = useMemo(() => conversation.messages.map(toGiftedChatMessage), [conversation.messages])
  const user = useMemo(() => toGiftedChatUser(currentUser), [currentUser])
  const onSendMessage = useCallback((newMessages: Array<IMessage>) => {
    onSend(newMessages.map(toLocalMessage)[0])
  })
  console.log('Chat Detail message= ', messages)
  console.log('Chat Detail conversation= ', conversation)

  return <GiftedChat messages={messages} onSend={onSendMessage} user={user} />
}

export default Chat
