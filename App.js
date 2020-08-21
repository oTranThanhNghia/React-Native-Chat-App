import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import Roboto from 'native-base/Fonts/Roboto.ttf'
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf'

import { store, persistor } from './src/redux/store'
import Screens from './src/screens'

const App = () => {
  const [isReady, setIsReady] = useState(false)
  const loadFont = async () => {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
      ...Ionicons.font,
    })
  }

  useEffect(() => {
    loadFont()
    setIsReady(true)
  })

  if (!isReady) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
