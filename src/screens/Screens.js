import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Login from './Login'
import Detail from './Detail'
import { screenNames } from '../config'

const Stack = createStackNavigator()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.login} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={screenNames.home} component={Home} options={{ headerLeft: null }} />
        <Stack.Screen name={screenNames.detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
