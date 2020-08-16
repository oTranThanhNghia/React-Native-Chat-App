/**
 * @flow
 */

import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import type { IMessage } from 'react-native-gifted-chat/lib/Models'
import styles from './styles'
import auth from '../../global/auth'
import { useSelector } from 'react-redux'

const Detail = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([])
  const user = useSelector(auth.selectors.user)
  console.log(`Detail messages=`)
  console.log(messages)
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])

  const onSend = useCallback((mes = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, mes))
  }, [])

  return (
    <View style={styles.container}>
      <GiftedChat messages={messages} onSend={onSend} user={{ _id: user.id }} />
    </View>
  )
}

export default Detail
