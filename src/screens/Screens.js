import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useSelector, useDispatch } from 'react-redux'
import Home from './Home'
import Login from './Login'
import Detail from './Detail'
import { screenNames } from '../config'
import auth from '../global/auth'

const Stack = createStackNavigator()

const Screens = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(auth.selectors.isAuthenticated)
  const user = useSelector(auth.selectors.currentUser)

  const logout = useCallback(() => {
    dispatch(auth.actions.logout())
  }, [dispatch])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={screenNames.home}
              component={Home}
              options={{
                title: `Your name: ${user.name}`,
                // eslint-disable-next-line react/display-name
                headerRight: () => <Button title="Logout" onPress={logout} />,
              }}
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
