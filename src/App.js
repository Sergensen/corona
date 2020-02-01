import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native'
import {Button, ThemeProvider} from 'react-native-elements'
import Header from './Header'
import MainView from './MainView'

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <StatusBar hidden />
      <SafeAreaView>
        <Header />
        <MainView />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
