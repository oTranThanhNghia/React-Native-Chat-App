/**
 * @flow
 */

import React, { useEffect, useCallback } from 'react'
import { View } from 'react-native'
import type { NavigationProp, RouteProp } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import type { Conversation, Message } from '../../types/local'
import styles from './styles'
import actions from './detail.actions'
import selectors from './detail.selectors'

import auth from '../../global/auth'
import chattingModel from '../../global/chatting/chatting.model'

import Chat from './Chat'
import { useErrorHandler } from '../../components/error'

const Detail = ({ navigation, route }: { navigation: NavigationProp<any, any>, route: RouteProp<any, any> }) => {
  const { conversation }: { conversation: Conversation } = route.params
  const currentUser = useSelector(auth.selectors.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchConversation(conversation.id))
    return () => {
      dispatch(actions.resetState())
    }
  }, [conversation])

  useErrorHandler(selectors.fetchingError)

  useEffect(() => {
    if (conversation) {
      navigation.setOptions({ title: chattingModel.getName(conversation, { currentUser }) })
    }
  }, [conversation, currentUser])

  const onSend = useCallback(
    (message: Message) => {
      dispatch(actions.sendMessage(conversation.id, message.content))
    },
    [dispatch, conversation]
  )
  useErrorHandler(selectors.sendingError)

  return (
    <View style={styles.container}>
      <Chat onSend={onSend} currentUser={currentUser} conversation={conversation} />
    </View>
  )
}

export default Detail
