/**
 * @flow
 */

import React from 'react'
import { Text, Button } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../../config'

type Props = {
  navigation: StackNavigationProp<any, any>,
}

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
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
