/**
 * @flow
 */

import React, { useState } from 'react'
import { TextInput, View, ActivityIndicator } from 'react-native'
import { Text, Button } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'

import actions from './login.actions'
import selectors from './login.selectors'
import { useErrorHandler } from '../../components/error'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(null)

  const isLoading = useSelector(selectors.isLoading)

  useErrorHandler(selectors.error)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.group}>
        <Text>Login</Text>
        <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder="Your name" />
        <Button
          disabled={isLoading}
          onPress={() => {
            if (name) {
              dispatch(actions.login(name))
            }
          }}
          full
        >
          <Text>Login</Text>
        </Button>
        {isLoading && <ActivityIndicator />}
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
