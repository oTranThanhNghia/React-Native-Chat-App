/**
 * @flow
 */

import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Text, Button } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import * as Device from 'expo-device'
import styles from './styles'

import auth from '../../global/auth'

const Login = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.group}>
        <Text>Login</Text>
        <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder="Your name" />
        <Button
          onPress={() => {
            if (name) {
              dispatch(
                auth.actions.setUser({
                  id: `${name}_${Device.modelName}_${Device.osName}_${Device.osVersion}`,
                  name,
                })
              )
            }
          }}
          full
        >
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Login
