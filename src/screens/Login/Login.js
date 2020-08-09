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

const Login = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button
        onPress={() => {
          navigation.replace(screenNames.home)
        }}
      >
        <Text>Click</Text>
      </Button>
    </SafeAreaView>
  )
}

export default Login
