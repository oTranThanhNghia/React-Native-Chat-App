/**
 * @flow
 */

import React from 'react'
import { Text, Button } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { screenNames } from '../../config'
import auth from '../../global/auth'

type Props = {
  navigation: StackNavigationProp<any, any>,
}

const Home = ({ navigation }: Props) => {
  const user = useSelector(auth.selectors.user)
  return (
    <SafeAreaView>
      <Text>{user.name}</Text>
      <Button
        onPress={() => {
          navigation.navigate(screenNames.detail)
        }}
      >
        <Text>Click</Text>
      </Button>
    </SafeAreaView>
  )
}

export default Home
