/**
 * @flow
 */

import React, { useEffect, useCallback } from 'react'
import { View, FlatList, Alert } from 'react-native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import ActionButton from 'react-native-action-button'
import { screenNames } from '../../config'
import styles from './styles'

import actions from './home.actions'
import selectors from './home.selectors'
import { colors } from '../../styles'
import ListItem from './ListItem'

type Props = {
  navigation: StackNavigationProp<any, any>,
}

const Home = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const listConversation = useSelector(selectors.listConversation)

  useEffect(() => {
    dispatch(actions.fetchConversations())
  }, [])

  const onInvitationPress = useCallback(() => {
    Alert.prompt(
      'New conversation',
      'Enter a username: ',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (username?: string) => {
            dispatch(actions.createConversation(username || ''))
          },
        },
      ],
      'plain-text'
    )
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={listConversation}
        renderItem={({ item }) => <ListItem conversation={item} />}
        keyExtractor={(item, index) => `${item.id}_${index}`}
      />
      <ActionButton buttonColor={colors.floatingColor} onPress={onInvitationPress} />
    </View>
  )
}

export default Home
