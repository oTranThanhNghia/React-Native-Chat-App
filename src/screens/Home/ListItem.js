/**
 * @flow
 */

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import type { Conversation } from '../../types/local'
import auth from '../../global/auth'
import screenNames from '../../config/screenNames'
import { useSelector } from 'react-redux'
import chattingModal from '../../global/chatting/chatting.model'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  item: {
    flexDirection: 'row',
  },
  info: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
  },
})

type Props = {
  conversation: Conversation,
}

const ListItem = ({ conversation }: Props) => {
  const navigation = useNavigation()

  const currentUser = useSelector(auth.selectors.currentUser)

  const conversationName = chattingModal.getName(conversation, { currentUser })

  console.log(`ListItem conversation= `, conversation)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screenNames.detail, { conversation })}
    >
      <View style={styles.item}>
        <Icon type="FontAwesome" name="user-circle" />
        <View style={styles.info}>
          <Text style={styles.name}>{conversationName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem
