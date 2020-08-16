import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useSelector } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Detail from './Detail'
import { screenNames } from '../config'
import auth from '../global/auth'

const Stack = createStackNavigator()

const Screens = () => {
  const isAuthenticated = useSelector(auth.selectors.isAuthenticated)
  const user = useSelector(auth.selectors.user)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={screenNames.home}
              component={Home}
              options={{ headerLeft: null, title: `Your name: ${user.name}` }}
            />
            <Stack.Screen name={screenNames.detail} component={Detail} />
          </>
        ) : (
          <Stack.Screen name={screenNames.login} component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
